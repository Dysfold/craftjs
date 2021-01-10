package fi.valtakausi.craftjs.plugin;

import com.google.gson.Gson;

/**
 * Deserialized package.json. Only fields we specifically need are included.
 */
public class PackageJson {
	
	private static final Gson GSON = new Gson();
	
	public static PackageJson load(String content) {
		return GSON.fromJson(content, PackageJson.class);
	}
	
	public String name;
	public String version;
	public String main;
	
	public Boolean _internalApis;
}