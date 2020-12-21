package fi.valtakausi.craftjs;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;

import org.bukkit.plugin.java.JavaPlugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Value;

import fi.valtakausi.craftjs.api.CraftJsContext;
import fi.valtakausi.craftjs.api.DelegatingContext;
import fi.valtakausi.craftjs.api.Internals;
import fi.valtakausi.craftjs.api.JavaInterop;
import fi.valtakausi.craftjs.plugin.JsPlugin;
import fi.valtakausi.craftjs.plugin.JsPluginLoader;
import fi.valtakausi.craftjs.plugin.JsPluginManager;

public class CraftJsMain extends JavaPlugin {
		
	private static final Context.Builder CONTEXT_BUILDER = Context.newBuilder("js")
			.allowHostClassLookup(className -> true) // Allow loading all classes
			.allowHostAccess(HostAccess.ALL) // ... and accessing their members
			.allowExperimentalOptions(true)
			.option("js.nashorn-compat", "true"); // For native JS getter/setter compatibility
	
	/**
	 * Zip file system of CraftJS jar.
	 */
	private FileSystem jarFs;
	
	/**
	 * Core pseudo-plugin that is loaded to every JS plugin context.
	 */
	private JsPlugin core;
	
	/**
	 * JS plugin manager.
	 */
	private JsPluginManager pluginManager;
	
	@Override
	public void onEnable() {
		try {
			jarFs = FileSystems.newFileSystem(getFile().toPath(), null);
		} catch (IOException e) {
			throw new AssertionError("corrupted craftjs jar");
		}
		pluginManager = new JsPluginManager(this);
		core = JsPlugin.createCraftJsCore(this);
		
		// Load JS plugins
		pluginManager.loadInternalPlugin(this, "craftjs-internal");
		pluginManager.enablePlugins();
	}
	
	@Override
	public File getFile() {
		return super.getFile();
	}
	
	/**
	 * Creates a new Graal context and prepares it for
	 * {@link #installCore(CraftJsContext)}.
	 * @param context CraftJS context.
	 * @param internalApis If internal APIs should be enabled.
	 * @return GraalJS context.
	 */
	public Context newGraalContext(CraftJsContext context, boolean internalApis) {
		Context ctx = CONTEXT_BUILDER.build();
		Value bindings = ctx.getBindings("js");
		
		// Inject Java APIs that are not context-specific
		bindings.putMember("__interop", new JavaInterop());
		
		// Prepare for evaluating CraftJS core
		bindings.putMember("__craftjs", new DelegatingContext(this, core, context));
		ctx.eval("js", "let exports = {};");
		
		// Enable internal APIs if requested
		if (internalApis) {
			bindings.putMember("__internals", new Internals(this));
		}
		
		return ctx;
	}
	
	/**
	 * Installs core JS APIs to a CraftJS context.
	 * @param context CraftJS context.
	 */
	public void installCore(CraftJsContext context) {
		// Load require implementation to globals
		try {
			context.eval(Files.readString(core.getRootDir().resolve("dist").resolve("boot").resolve("require.js")));
		} catch (IOException e) {
			throw new AssertionError("failed to load require impl", e);
		}
		// Require (and add to globals) CraftJS core
		context.eval("globalThis.__craftjscore = require('./index');");
	}
	
	public JsPluginLoader getJsLoader() {
		return pluginManager.getPluginLoader();
	}
	
	public JsPluginManager getJsPluginManager() {
		return pluginManager;
	}
	
	/**
	 * Gets path to root of internal CraftJS plugin. Normally, this will be
	 * inside CraftJS jar. For development, it could be inside normal plugins
	 * directory.
	 * @param name Internal plugin name.
	 * @return Path to plugin root.
	 */
	public Path getInternalPlugin(String name) {
		Path override = getDataFolder().toPath().resolve(name);
		if (Files.exists(override)) {
			return override;
		} else {
			return jarFs.getPath(name);
		}
	}
}
