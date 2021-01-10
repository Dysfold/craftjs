package fi.valtakausi.craftjs.api;

import org.graalvm.polyglot.Value;

import fi.valtakausi.craftjs.CraftJsMain;
import fi.valtakausi.craftjs.plugin.JsPlugin;

/**
 * CraftJS context that delegates execution to another context,
 * but holds its own script paths.
 *
 */
public class DelegatingContext extends CraftJsContext {

	private final CraftJsContext delegate;
	
	public DelegatingContext(CraftJsMain craftjs, JsPlugin plugin, CraftJsContext delegate) {
		super(craftjs, plugin);
		this.delegate = delegate;
	}
	
	@Override
	public Value eval(String code, String name) {
		return delegate.eval(code, plugin.getName(), name);
	}

}
