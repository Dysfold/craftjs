package fi.valtakausi.craftjs.api;

import fi.valtakausi.craftjs.CraftJsMain;

public class Internals {
	
	private final CraftJsMain craftjs;

	public Internals(CraftJsMain craftjs) {
		this.craftjs = craftjs;
	}
	
	public boolean reloadPlugin(String name) {
		return craftjs.getJsPluginManager().reloadPlugin(name);
	}

}
