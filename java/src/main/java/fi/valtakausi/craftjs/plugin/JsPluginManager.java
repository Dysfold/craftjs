package fi.valtakausi.craftjs.plugin;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import org.bukkit.Bukkit;
import org.bukkit.plugin.InvalidPluginException;
import org.bukkit.plugin.UnknownDependencyException;

import fi.valtakausi.craftjs.CraftJsMain;

public class JsPluginManager {
	
	/**
	 * CraftJS plugin main.
	 */
	private final CraftJsMain craftjs;
	
	/**
	 * CraftJS logger.
	 */
	private final Logger log;
	
	/**
	 * The main plugin directory.
	 */
	private final Path pluginsDir;
	
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
	
	public JsPluginManager(CraftJsMain craftjs, Path pluginDir) {
		this.craftjs = craftjs;
		this.log = craftjs.getLogger();
		this.pluginsDir = pluginDir;
		this.loader = new JsPluginLoader(craftjs);
		this.plugins = new HashMap<>();
		this.internalPlugins = new HashMap<>();
	}
	
	public JsPlugin getPlugin(String name) {
		// Search both internal and normal plugins
		return internalPlugins.getOrDefault(name, plugins.get(name));
	}
	
	public void loadInternalPlugin(String name) {
		// Load from CraftJS jar or override directory
		Path rootDir = craftjs.getInternalPlugin(name);
		
		// Load it, wherever it is
		try {
			JsPlugin plugin = loader.loadPlugin(rootDir);
			internalPlugins.put(name, plugin);
			enablePlugin(plugin);
		} catch (UnknownDependencyException | InvalidPluginException e) {
			throw new AssertionError("failed to load internal plugin: " + name, e);
		}
	}
	
	private void discoverPlugins() {
		plugins.clear();
		if (!Files.exists(pluginsDir)) {
			return; // Shouldn't happen, but if it does -> no plugins to load
		}
		
		// Iterate over potential JS plugins
		try {
			Files.list(pluginsDir).forEach(path -> {
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
		if (!loader.isJsPlugin(path)) {
			return null; // Not a (JS) plugin
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
		Bukkit.getPluginManager().enablePlugin(plugin);
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
			plugin = discoverPlugin(pluginsDir.resolve(name));
			if (plugin == null) {
				return false;
			}
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
			plugins.put(plugin.getName(), plugin);
			enablePlugin(plugin);
		} else {
			return false;
		}
		return true; // Reload worked
	}

	public JsPluginLoader getPluginLoader() {
		return loader;
	}
	
	public Set<String> getPublicPlugins() {
		return plugins.keySet();
	}
	
}
