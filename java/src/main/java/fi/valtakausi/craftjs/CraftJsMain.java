package fi.valtakausi.craftjs;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.nio.file.Files;

import org.bukkit.plugin.java.JavaPlugin;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Value;

import fi.valtakausi.craftjs.api.CraftJsContext;
import fi.valtakausi.craftjs.api.JavaInterop;
import fi.valtakausi.craftjs.plugin.JsPlugin;
import fi.valtakausi.craftjs.plugin.JsPluginLoader;

public class CraftJsMain extends JavaPlugin {
		
	private static final Context.Builder CONTEXT_BUILDER = Context.newBuilder("js")
			.allowHostClassLookup(className -> true) // Allow loading all classes
			.allowHostAccess(HostAccess.ALL) // ... and accessing their members
			.allowExperimentalOptions(true)
			.option("js.nashorn-compat", "true"); // For native JS getter/setter compatibility
	
	/**
	 * Core pseudo-plugin that is loaded to every JS plugin context.
	 */
	private JsPlugin core;
	
	@Override
	public void onEnable() {
		core = JsPlugin.createCraftJsCore(this);
	}
	
	@Override
	public File getFile() {
		return super.getFile();
	}
	
	public Context newGraalContext(CraftJsContext context) {
		Context ctx = CONTEXT_BUILDER.build();
		Value bindings = ctx.getBindings("js");
		
		// Inject Java APIs that are not context-specific
		bindings.putMember("__interop", new JavaInterop());
		
		
		// Prepare for evaluating CraftJS core
		bindings.putMember("__craftjs", core.getContext());
		
		// Load require implementation to globals
		try {
			ctx.eval("js", Files.readString(core.getRootDir().resolve("boot").resolve("require.js")));
		} catch (IOException e) {
			throw new AssertionError("failed to load require impl");
		}
		// Require (and add to globals) CraftJS core
		ctx.eval("js", "globalThis.__craftjscore = require('./index');");
		
		// Prepare for evaluating the JS plugin
		bindings.putMember("__craftjs", context);
		return ctx;
	}
	
	public JsPluginLoader getJsLoader() {
		return null;
	}
}
