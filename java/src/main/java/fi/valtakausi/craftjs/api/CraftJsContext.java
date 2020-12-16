package fi.valtakausi.craftjs.api;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.bukkit.Bukkit;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;

import fi.valtakausi.craftjs.CraftJsMain;
import fi.valtakausi.craftjs.plugin.JsPlugin;
import fi.valtakausi.craftjs.plugin.PackageJson;

/**
 * CraftJS context exposed as __craftjs.
 * One context per JS plugin.
 *
 */
public class CraftJsContext {
	
	/**
	 * CraftJS version.
	 */
	public final String version;
	
	/**
	 * Plugin root path.
	 */
	public final Path pluginRoot;
	
	/**
	 * CraftJS plugin instance.
	 */
	private final CraftJsMain craftjs;
	
	/**
	 * This JS plugin instance.
	 */
	private final JsPlugin plugin;
	
	/**
	 * Current GraalJS context.
	 */
	private Context context;
	
	public CraftJsContext(CraftJsMain craftjs, JsPlugin plugin) {
		this.version = plugin.getDescription().getVersion();
		this.pluginRoot = plugin.getRootDir();
		this.craftjs = craftjs;
		this.plugin = plugin;
	}
	
	public void initGraalContext() {
		if (context != null) {
			throw new IllegalStateException("context already exists");
		}
		context = craftjs.newGraalContext(this);
	}
	
	public void destroyGraalContext() {
		if (context == null) {
			throw new IllegalStateException("context does not exist");
		}
		context = null;
	}
	
	/**
	 * Evaluates code in context of this plugin.
	 * @param code JS code.
	 * @return Return value of the code.
	 */
	public Value eval(String code) {
		return context.eval("js", code);
	}
	
	/**
	 * Schedules a task once.
	 * @param task Task to run.
	 * @param delay Delay in ticks.
	 * @return Id of new task.
	 */
	public int scheduleOnce(Runnable task, long delay) {
		if (delay == 0) {
			return Bukkit.getScheduler().scheduleSyncDelayedTask(plugin, task);
		} else {
			return Bukkit.getScheduler().scheduleSyncDelayedTask(plugin, task, delay);
		}
	}
	
	/**
	 * Schedules a repeating task.
	 * @param task Task to run.
	 * @param delay Initial delay.
	 * @param period Time between executions.
	 * @return Id of new task.
	 */
	public int scheduleRepeating(Runnable task, long delay, long period) {
		return Bukkit.getScheduler().scheduleSyncRepeatingTask(plugin, task, delay, period);
	}
}
