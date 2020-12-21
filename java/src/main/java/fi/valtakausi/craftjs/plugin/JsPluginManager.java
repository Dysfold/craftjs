package fi.valtakausi.craftjs.plugin;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import org.bukkit.Bukkit;
import org.bukkit.plugin.InvalidPluginException;
import org.bukkit.plugin.UnknownDependencyException;

import fi.valtakausi.craftjs.CraftJsMain;

public class JsPluginManager {
	
	/**
	 * CraftJS logger.
	 */
	private final Logger log;
	
	/**
	 * 'craftjs' directory. Directories under this are loaded as JS plugins.
	 */
	private final Path pluginDir;
	
	/**
	 * Our plugin loader.
	 */
	private final JsPluginLoader loader;
	
	/**
	 * Discovered plugins by their names. These are not all enabled!
	 */
	private final Map<String, JsPlugin> plugins;
	
	/**
	 * CraftJS-internal plugins.
	 */
	private final Map<String, JsPlugin> internalPlugins;
	
	public JsPluginManager(CraftJsMain craftjs) {
		this.log = craftjs.getLogger();
		this.pluginDir = craftjs.getDataFolder().toPath();
		this.loader = new JsPluginLoader(craftjs);
		this.plugins = new HashMap<>();
		this.internalPlugins = new HashMap<>();
	}
	
	public void loadInternalPlugin(CraftJsMain craftjs, String name) {
		Path rootDir = craftjs.getInternalPlugin(name);
		
		// If path we got is in jar, load this as internal plugin
		// Otherwise, treat the override as normal plugin
		if (!rootDir.startsWith(craftjs.getDataFolder().toPath())) {
			try {
				JsPlugin plugin = loader.loadPlugin(rootDir);
				internalPlugins.put(name, plugin);
				enablePlugin(plugin);
			} catch (UnknownDependencyException | InvalidPluginException e) {
				throw new AssertionError("failed to load internal plugin: " + name, e);
			}
		}
	}
	
	private void discoverPlugins() {
		plugins.clear();
		if (!Files.exists(pluginDir)) {
			return; // Probably no plugins to be found
		}
		
		// Iterate over available plugins
		try {
			Files.list(pluginDir).forEach(path -> {
				JsPlugin plugin = discoverPlugin(path);
				if (plugin != null) {
					plugins.put(plugin.getName(), plugin);
				}
			});
		} catch (IOException e) {
			log.severe("Failed to discover plugins:");
			e.printStackTrace();
		}
	}
	
	private JsPlugin discoverPlugin(Path path) {
		if (path.getFileName().toString().equals("craftjs-core")) {
			return null; // Not regular plugin, don't load it
		}
		try {
			return loader.loadPlugin(path.toFile());
		} catch (UnknownDependencyException e) {
			throw new UnsupportedOperationException("dependencies are not supported yet");
		} catch (InvalidPluginException e) {
			log.severe("Invalid plugin at" + path + ": " + e.getMessage());
			Throwable cause = e.getCause();
			if (cause != null) {
				cause.printStackTrace();
			}
		}
		return null;
	}
	
	private void enablePlugin(JsPlugin plugin) {
		try {
			Bukkit.getPluginManager().enablePlugin(plugin);
		} catch (Throwable e) {
			log.severe("Failed to enable plugin '" + plugin.getName() + "':");
			e.printStackTrace();
			loader.disablePlugin(plugin); // Clean up partially enabled plugin
		}
	}
	
	public void enablePlugins() {
		discoverPlugins();
		for (JsPlugin plugin : plugins.values()) {
			enablePlugin(plugin);
		}
	}
	
	public void reloadPlugins() {
		// Disable everything
		for (JsPlugin plugin : plugins.values()) {
			Bukkit.getPluginManager().disablePlugin(plugin);
		}
		discoverPlugins(); // Re-discover plugins and changes to them
		enablePlugins(); // Enable the new plugins
	}
	
	public boolean reloadPlugin(String name) {
		// If found, disable and re-enable
		JsPlugin plugin = plugins.get(name);
		if (plugin != null) {
			Bukkit.getPluginManager().disablePlugin(plugin);
			
			// Remove and re-discover, package.json MIGHT have changed
			plugins.remove(name);
			plugin = discoverPlugin(pluginDir.resolve(name));
			if (plugin == null) {
				return false;
			}
			plugins.put(plugin.getName(), plugin);
			try {
				plugin = loader.loadPlugin(plugin.getPluginPath().toFile());
			} catch (UnknownDependencyException | InvalidPluginException e) {
				log.severe("Invalid plugin " + name + ": " + e.getMessage());
				Throwable cause = e.getCause();
				if (cause != null) {
					cause.printStackTrace();
				}
				return false;
			}
			enablePlugin(plugin);
		} else {
			return false;
		}
		return true; // Reload worked
	}

	public JsPluginLoader getPluginLoader() {
		return loader;
	}
	
}
