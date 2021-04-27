package fi.valtakausi.craftjs;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;

import org.bukkit.Bukkit;
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
		
	private static final Context.Builder CONTEXT_BUILDER = makeContextBuilder();

	private static Context.Builder makeContextBuilder() {
		// Configure unrestricted host access and additional type mappings
		HostAccess hostAccess = HostAccess.newBuilder(HostAccess.ALL)
				.targetTypeMapping(Number.class, Float.class, o -> o != null, Number::floatValue,
						HostAccess.TargetMappingPrecedence.HIGHEST) // JS number -> float, with precision loss
				.build();
		
		return Context.newBuilder("js")
				.allowHostClassLookup(className -> true) // Allow loading all classes
				.allowHostAccess(hostAccess)
				.hostClassLoader(CraftJsMain.class.getClassLoader()) // Needed for loading classes from plugins
				.allowExperimentalOptions(true)
				.option("js.foreign-object-prototype", "true") // Java List - JS array compatibility
				.option("js.nashorn-compat", "true"); // For native JS getter/setter compatibility
	}
	
	/**
	 * Zip file system of CraftJS jar.
	 */
	private FileSystem jarFs;
	
	/**
	 * JS plugin manager.
	 */
	private JsPluginManager pluginManager;
	
	/**
	 * Core pseudo-plugin that is loaded to every JS plugin context.
	 */
	private JsPlugin core;
	
	/**
	 * Package lookup, to be exposed to core JS code.
	 */
	private PackageLookup packageLookup;
	
	@Override
	public void onEnable() {
		try {
			jarFs = FileSystems.newFileSystem(getFile().toPath(), null);
		} catch (IOException e) {
			throw new AssertionError("corrupted craftjs jar");
		}
		Path dir = getDataFolder().toPath();
		pluginManager = new JsPluginManager(this, dir.getParent()); // Must exist before core is created
		core = JsPlugin.createCraftJsCore(this);
		packageLookup = PackageLookup.create(Bukkit.getPluginManager().getPlugins());
		
		// Load JS plugins
		pluginManager.loadInternalPlugin("craftjs-internal");
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
		// Load code needed in early boot to globals
		// Currently, this includes error handling and require() implementation
		try {
			Path bootDir = core.getRootDir().resolve("dist").resolve("boot");
			context.eval(Files.readString(bootDir.resolve("errors.js")), "dist/boot/errors.js");
			context.eval(Files.readString(bootDir.resolve("require.js")), "dist/boot/require.js");
		} catch (IOException e) {
			throw new AssertionError("failed to load require impl", e);
		}
		// Require (and add to globals) CraftJS core
		boolean error = context.eval("__coreEntrypoint();", "entrypoint").asBoolean();
		if (error) {
			throw new AssertionError("core install failed");
		}
	}
	
	public JsPlugin getJsCore() {
		return core;
	}
	
	public JsPluginLoader getJsLoader() {
		return pluginManager.getPluginLoader();
	}
	
	public JsPluginManager getJsPluginManager() {
		return pluginManager;
	}
	
	/**
	 * Gets path to root of internal CraftJS plugin. Normally, this will be
	 * inside CraftJS jar. For development, it could be inside an override
	 * directory in host file system.
	 * @param name Internal plugin name.
	 * @return Path to plugin root.
	 */
	public Path getInternalPlugin(String name) {
		Path override = getDataFolder().toPath().resolve("override").resolve(name);
		if (Files.isDirectory(override)) {
			return override;
		} else {
			return jarFs.getPath(name);
		}
	}
	
	public Path getDatabaseDir() {
		return getDataFolder().toPath().resolve("databases");
	}
	
	public PackageLookup getPackageLookup() {
		return packageLookup;
	}
}
