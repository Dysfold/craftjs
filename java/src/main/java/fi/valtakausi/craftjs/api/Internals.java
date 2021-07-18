package fi.valtakausi.craftjs.api;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.function.Consumer;

import org.graalvm.polyglot.Value;

import fi.valtakausi.craftjs.CraftJsMain;

public class Internals {
	
	private final CraftJsMain craftjs;

	public Internals(CraftJsMain craftjs) {
		this.craftjs = craftjs;
	}
	
	public boolean reloadPlugin(String name) {
		return craftjs.getJsPluginManager().reloadPlugin(name);
	}
	
	public Object callForeign(String plugin, String func, Object... args) {
		Value result = craftjs.getJsPluginManager().getPlugin(plugin).getContext().call(func, args);
		if (result.hasMember("then")) {
			// Wrap the promise so that it can be passed to another context
			var wrappedCallbacks = new Object() {
				CountDownLatch ready = new CountDownLatch(1);
				volatile Value resolve;
				volatile Value reject;
			};
			
			// Syncronous wait in promise may occur with multiple JS contexts
			// For one context, the latch is ALWAYS counted down before resolve/reject
			Consumer<Value> resolveProxy = (value) -> {
				try {
					wrappedCallbacks.ready.await();
				} catch (InterruptedException e) {
					return; // Discard promise
				}
				wrappedCallbacks.resolve.execute(value);
			};
			Consumer<Value> rejectProxy = (error) -> {
				try {
					wrappedCallbacks.ready.await();
				} catch (InterruptedException e) {
					return; // Discard promise
				}
				wrappedCallbacks.reject.execute(error);
			};
			
			// Original promise will call resolve/reject proxy
			result.getMember("then").execute(resolveProxy, rejectProxy);
			
			Thenable wrapped = (resolve, reject) -> {
				wrappedCallbacks.resolve = resolve;
				wrappedCallbacks.reject = reject;
				wrappedCallbacks.ready.countDown(); // resolve and reject proxies may proceed
			};
			return wrapped;
		} else {
			return result;
		}
	}
	
	public List<String> listPlugins() {
		List<String> plugins = new ArrayList<>(craftjs.getJsPluginManager().getPublicPlugins());
		Collections.sort(plugins);
		return plugins;
	}

}
