package fi.valtakausi.craftjs.api.websocket;

import java.net.URI;
import java.util.Map;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

public class ClientSocket extends WebSocketClient {

	private final WebSocketHandle handle;
	
	private volatile boolean connected;
		
	public ClientSocket(WebSocketHandle handle, URI serverUri, Map<String, String> httpHeaders) {
		super(serverUri, httpHeaders);
		this.handle = handle;
	}

	@Override
	public void onOpen(ServerHandshake handshakedata) {
		connected = true;
		handle.connectFinished(null);
	}

	@Override
	public void onMessage(String message) {
		handle.queueMessage(message);
	}

	@Override
	public void onClose(int code, String reason, boolean remote) {
		if (connected) {
			// Be sure that reason is not null, WS library Javadoc is not clear on that
			handle.setClosed(new ClosedStatus(code, reason != null ? reason : "", remote));
		} else {
			throw new AssertionError("connection closed before it was opened");
		}
	}

	@Override
	public void onError(Exception e) {
		if (connected) {
			handle.queueError(e);
		} else {
			handle.connectFinished(e);
		}
	}

}
