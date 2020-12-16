package fi.valtakausi.craftjs.plugin;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.Set;
import java.util.regex.Pattern;

import org.bukkit.event.Event;
import org.bukkit.event.Listener;
import org.bukkit.plugin.InvalidDescriptionException;
import org.bukkit.plugin.InvalidPluginException;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.PluginDescriptionFile;
import org.bukkit.plugin.PluginLoader;
import org.bukkit.plugin.RegisteredListener;
import org.bukkit.plugin.UnknownDependencyException;

import com.google.gson.JsonSyntaxException;

import fi.valtakausi.craftjs.CraftJsMain;

public class JsPluginLoader implements PluginLoader {
	
	/**
	 * File patterns used for loading plugins from main plugins folder.
	 * CraftJS also loads plugins from its own directory.
	 */
	private static final Pattern[] FILE_PATTERNS = new Pattern[] {Pattern.compile("\\.craftjs$")};
	
	private final CraftJsMain craftjs;
	
	public JsPluginLoader(CraftJsMain craftjs) {
		this.craftjs = craftjs;
	}
	
	private Path getRootDir(Path pluginPath) {
		if (Files.isDirectory(pluginPath)) {
			return pluginPath;
		} else {
			throw new UnsupportedOperationException("js plugin bundle");
		}
	}
	
	private PackageJson loadManifest(Path path) throws JsonSyntaxException, IOException {
		return PackageJson.load(Files.readString(path));
	}
	
	@Override
	public Plugin loadPlugin(File file) throws InvalidPluginException, UnknownDependencyException {
		Path path = file.toPath();
		Path rootDir = getRootDir(path);
		Path dataDir = null; // TODO should ask team for opinions on this
		PackageJson manifest;
		try {
			manifest = loadManifest(rootDir.resolve("package.json"));
		} catch (JsonSyntaxException | IOException e) {
			throw new InvalidPluginException("loading package.json failed", e);
		}
		JsPlugin plugin = new JsPlugin(craftjs, path, rootDir, manifest.main, dataDir, manifest.name, manifest.version);
		return plugin;
	}

	@Override
	public PluginDescriptionFile getPluginDescription(File file) throws InvalidDescriptionException {
		PackageJson manifest;
		try {
			manifest = loadManifest(file.toPath());
		} catch (JsonSyntaxException | IOException e) {
			throw new InvalidDescriptionException(e);
		}
		return new PluginDescriptionFile(manifest.name, manifest.version, "");
	}

	@Override
	public Pattern[] getPluginFileFilters() {
		return FILE_PATTERNS;
	}

	@Override
	public Map<Class<? extends Event>, Set<RegisteredListener>> createRegisteredListeners(Listener listener,
			Plugin plugin) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void enablePlugin(Plugin plugin) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void disablePlugin(Plugin plugin) {
		// TODO Auto-generated method stub
		
	}

}
