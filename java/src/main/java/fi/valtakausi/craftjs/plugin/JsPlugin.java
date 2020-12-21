package fi.valtakausi.craftjs.plugin;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.CopyOption;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.logging.Logger;

import org.bukkit.Bukkit;
import org.bukkit.Server;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.generator.ChunkGenerator;
import org.bukkit.plugin.PluginBase;
import org.bukkit.plugin.PluginDescriptionFile;
import org.bukkit.plugin.PluginLoader;
import org.bukkit.plugin.PluginLogger;

import fi.valtakausi.craftjs.CraftJsMain;
import fi.valtakausi.craftjs.api.CraftJsContext;

public class JsPlugin extends PluginBase {
	
	public static JsPlugin createCraftJsCore(CraftJsMain craftjs) {
		Path jarPath = craftjs.getFile().toPath();
		Path dataDir = craftjs.getDataFolder().toPath();
		
		// Root dir is inside CraftJS jar, or override directory (for development)
		Path rootDir = craftjs.getInternalPlugin("craftjs-core");
		return new JsPlugin(craftjs, jarPath, rootDir, "index.js",
				dataDir, "craftjs-core", craftjs.getDescription().getVersion(), false);
	}
	
	/**
	 * Loader of this plugin.
	 */
	private final JsPluginLoader loader;
	
	/**
	 * Path to plugin file or directory.
	 */
	private final Path pluginPath;
	
	/**
	 * Root of plugin distribution. When a plugin is packaged, this is the root
	 * of zip file system.
	 */
	private final Path rootDir;
	
	/**
	 * Entrypoint, as specified in package.json.
	 */
	private final String entrypoint;
	
	/**
	 * Plugin data directory.
	 */
	private final Path dataDir;
	
	/**
	 * Plugin name.
	 */
	private final String name;
	
	/**
	 * Version string.
	 */
	private final String version;
	
	/**
	 * Logger of this plugin
	 */
	private final Logger logger;
	
	/**
	 * Context where this plugin is executed.
	 */
	private final CraftJsContext context;
	
	/**
	 * Enable internal APIs for this plugin.
	 */
	private final boolean internalApis;
	
	/**
	 * If this plugin is enabled.
	 */
	private boolean enabled;

	JsPlugin(CraftJsMain craftjs, Path pluginFile, Path rootDir, String entrypoint, Path dataDir, String name, String version,
			boolean internalApis) {
		this.loader = craftjs.getJsLoader();
		this.pluginPath = pluginFile;
		this.rootDir = rootDir;
		this.entrypoint = entrypoint;
		this.dataDir = dataDir;
		this.name = name;
		this.version = version;
		this.logger = new PluginLogger(this);
		this.context = new CraftJsContext(craftjs, this);
		this.internalApis = internalApis;
		this.enabled = false;
	}
	
	public Path getRootDir() {
		return rootDir;
	}
	
	public Path getPluginPath() {
		return pluginPath;
	}
	
	public Path getNodeModules() {
		return rootDir.resolve("node_modules");
	}
	
	public CraftJsContext getContext() {
		return context;
	}
	
	public boolean internalApisEnabled() {
		return internalApis;
	}

	@Override
	public File getDataFolder() {
		return dataDir.toFile();
	}

	@Override
	public PluginDescriptionFile getDescription() {
		return new PluginDescriptionFile(name, version, "");
	}

	@Override
	public FileConfiguration getConfig() {
		return new YamlConfiguration(); // Empty config for now
	}

	@Override
	public InputStream getResource(String filename) {
		try {
			return Files.newInputStream(rootDir.resolve(filename));
		} catch (IOException e) {
			return null; // TODO handle IO errors better
		}
	}

	@Override
	public void saveConfig() {
		// TODO
	}

	@Override
	public void saveDefaultConfig() {
		// TODO
	}

	@Override
	public void saveResource(String resourcePath, boolean replace) {
		try {
			Files.copy(rootDir.resolve(resourcePath), dataDir.resolve(resourcePath),
					replace ? new CopyOption[] {StandardCopyOption.REPLACE_EXISTING} : new CopyOption[0]);
		} catch (IOException e) {
			// TODO handle this error
			e.printStackTrace();
		}
	}

	@Override
	public void reloadConfig() {
		// TODO
	}

	@Override
	public PluginLoader getPluginLoader() {
		return loader;
	}

	@Override
	public Server getServer() {
		return Bukkit.getServer();
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}

	@Override
	public void onDisable() {
		context.destroyGraalContext(); // Unload all code
	}
	
	public void setEnabled(boolean state) {
		if (state == enabled) {
			return; // Nothing to do
		}
		enabled = state;
		if (state) {
			onLoad(); // Called for correctness, even if it is empty
			onEnable();
		} else {
			onDisable();
		}
	}

	@Override
	public void onEnable() {
		context.initGraalContext(); // Load CraftJS core
		// Load, probably specified in package.json
		context.eval("require('./" + entrypoint + "');");
	}
	
	@Override
	public void onLoad() {
		// Everything happens in onEnable/onDisable
	}

	@Override
	public boolean isNaggable() {
		return false; // TODO figure out what this does? found no documentation
	}

	@Override
	public void setNaggable(boolean canNag) {
		
	}

	@Override
	public ChunkGenerator getDefaultWorldGenerator(String worldName, String id) {
		return null;
	}

	@Override
	public Logger getLogger() {
		return logger;
	}

	@Override
	public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
		return null; // Handled per-command basis
	}

	@Override
	public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
		return false; // Handled per-command basis
	}

}
