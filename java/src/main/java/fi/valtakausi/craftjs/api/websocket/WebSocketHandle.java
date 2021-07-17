package fi.valtakausi.craftjs.api.websocket;

import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;

import org.bukkit.Bukkit;
import org.bukkit.scheduler.BukkitScheduler;
import org.java_websocket.exceptions.WebsocketNotConnectedException;
import org.java_websocket.framing.CloseFrame;

import fi.valtakausi.craftjs.plugin.JsPlugin;

public class WebSocketHandle {
	
	private static final BukkitScheduler SCHEDULER = Bukkit.getScheduler();
	
	private final JsPlugin ownerPlugin;
	private ClientSocket socket;
	
	private final Consumer<WebSocketHandle> connectSuccess;
	private final Consumer<Exception> connectError;
	
	private final Queue<String> receivedMessages;
	private final Queue<Exception> receivedErrors;
	private volatile ClosedStatus closedStatus;
	
	private final AtomicReference<ReceiveRequest> receiveRequest;
	private final AtomicReference<Runnable> closeCallback;
	
	public WebSocketHandle(JsPlugin ownerPlugin, URI serverUri, Map<String, String> httpHeaders,
			Consumer<WebSocketHandle> connectSuccess, Consumer<Exception> connectError) {
		this.ownerPlugin = ownerPlugin;
		this.socket = new ClientSocket(serverUri, httpHeaders);
		this.connectSuccess = connectSuccess;
		this.connectError = connectError;
		this.receivedMessages = new ConcurrentLinkedQueue<>();
		this.receivedErrors = new ConcurrentLinkedQueue<>();
		this.closedStatus = null;
		this.receiveRequest = new AtomicReference<>(null);
		this.closeCallback = new AtomicReference<>(null);
	}
	
	public void connect() {
		socket.connect();
	}
	
	void connectFinished(Exception e) {
		SCHEDULER.runTask(ownerPlugin, () -> {			
			if (e == null) {
				connectSuccess.accept(this);
			} else {
				connectError.accept(e);
			}
		});
	}
	
	void queueMessage(String message) {
		receivedMessages.add(message);
		queueReceiveSync();
	}
	
	void setClosed(ClosedStatus status) {
		closedStatus = status;
		queueReceiveSync();
	}
	
	void queueError(Exception e) {
		receivedErrors.add(e);
		queueReceiveSync();
	}
	
	private void queueReceiveSync() {
		ReceiveRequest req = receiveRequest.getAndSet(null);
		if (req != null) {
			// Call the callbacks next tick in server thread
			SCHEDULER.runTask(ownerPlugin, () -> handleReceive(req));
		}
		Runnable callback = closeCallback.getAndSet(null);
		if (callback != null) {
			SCHEDULER.runTask(ownerPlugin, callback);
		}
	}

	
	public void receive(Consumer<String> success, ClosedHandler closed, Consumer<Exception> error) {
		ReceiveRequest request = new ReceiveRequest(success, closed, error);
		if (!handleReceive(request)) {
			// No messages or errors and not closed 
			if (receiveRequest.getAndSet(request) != null) {
				// Since we only keep one ReceiveRequest, this will lead to broken (never completed) promises
				throw new IllegalStateException("multiple concurrent receive()s from WebSocket are not supported (did you forget to await?)");
			}
		}
	}
	
	private boolean handleReceive(ReceiveRequest req) {
		// Allow polling all pending messages before calling closed or error handlers
		String msg = receivedMessages.poll();
		if (msg != null) {
			req.success().accept(msg);
			return true;
		}
		// An error may cause connection to be closed
		// In that case, it is more important than the close reason
		Exception error = receivedErrors.poll();
		if (error != null) {
			req.error().accept(error);
			return true;
		}
		if (closedStatus != null) {
			req.closed().closed(closedStatus.code(), closedStatus.reason(), closedStatus.remote());
			return true;
		}
		
		// Received nothing, try again later
		return false;
	}
		
	public List<Object> send(String msg) {
		try {
			socket.send(msg);
			return List.of(); // No errors
		} catch (WebsocketNotConnectedException e) {
			if (isClosed()) {
				return List.of(closedStatus.code(), closedStatus.reason(), closedStatus.remote());
			} else {
				return List.of(-1, "not connected or close in progress", false);
			}
		}
	}
	
	public boolean isClosed() {
		return closedStatus != null;
	}
	
	public void close(String reason, Runnable callback) {
		if (isClosed()) {
			throw new IllegalArgumentException("already closed");
		}
		if (closeCallback.getAndSet(callback) != null) {
			throw new IllegalStateException("already closing");
		}
		socket.close(CloseFrame.NORMAL, reason);
		// callback is called after setClosed() indicates this has closed
	}

}
