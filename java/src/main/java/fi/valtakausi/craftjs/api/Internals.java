package fi.valtakausi.craftjs.api;

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
	
	public Value callForeign(String plugin, String func, Object... args) {
		return craftjs.getJsPluginManager().getPlugin(plugin).getContext().call(func, args);
	}

}
