package fi.valtakausi.craftjs.api;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import org.bukkit.Bukkit;
import org.bukkit.command.TabCompleter;
import org.bukkit.event.Event;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.plugin.EventExecutor;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Value;

import fi.valtakausi.craftjs.CraftJsMain;
import fi.valtakausi.craftjs.plugin.JsPlugin;
import fi.valtakausi.craftjs.plugin.JsPluginCommand;
import fi.valtakausi.craftjs.plugin.JsPluginCommand.CommandHandler;
import fi.valtakausi.craftjs.plugin.JsPluginCommand.JsTabCompleter;

/**
 * CraftJS context exposed as __craftjs.
 * One context per JS plugin.
 *
 */
public class CraftJsContext {
	
	private static final Listener EVENT_LISTENER = new Listener() {};
	
	/**
	 * The JS plugin instance.
	 */
	public final JsPlugin plugin;
	
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
	 * Current GraalJS context.
	 */
	private Context context;
	
	/**
	 * Registered commands. Unlike event handlers, these need to be
	 * unregistered by us when context is destroyed.
	 */
	private final List<JsPluginCommand> commands;
	
	public CraftJsContext(CraftJsMain craftjs, JsPlugin plugin) {
		this.plugin = plugin;
		this.version = plugin.getDescription().getVersion();
		this.pluginRoot = plugin.getRootDir();
		this.craftjs = craftjs;
		this.commands = new ArrayList<>();
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
		// Unload all commands before context is gone
		for (JsPluginCommand command : commands) {
			command.unload(Bukkit.getCommandMap());
		}
		commands.clear();
		
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
	
	/**
	 * Registers an event handler.
	 * @param event Event type.
	 * @param priority Event priority.
	 * @param handler
	 * @param ignoreCancelled
	 */
	public void registerEvent(Class<? extends Event> event, EventPriority priority, EventExecutor handler, boolean ignoreCancelled) {
		Bukkit.getPluginManager().registerEvent(event, EVENT_LISTENER, priority, handler, plugin, ignoreCancelled);
	}
	
	/**
	 * Registers a command handler.
	 * @param handler Command handler function.
	 * @param completer Tab completer function.
	 * @param name Primary command name.
	 * @param aliases Command aliases (secondary names).
	 * @param description Command description.
	 */
	public void registerCommand(CommandHandler handler, JsTabCompleter completer, String name, List<String> aliases, String description) {
		JsPluginCommand command = new JsPluginCommand(plugin, handler, completer, name, aliases, description);
		Bukkit.getCommandMap().register(plugin.getName().toLowerCase(), command); // Register to global command map
		commands.add(command); // Queue to be unloaded when this is destroyed
	}
}
