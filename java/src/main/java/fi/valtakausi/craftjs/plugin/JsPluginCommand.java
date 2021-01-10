package fi.valtakausi.craftjs.plugin;

import java.util.List;
import java.util.Map;

import org.bukkit.command.Command;
import org.bukkit.command.CommandMap;
import org.bukkit.command.CommandSender;
import org.bukkit.command.PluginIdentifiableCommand;
import org.bukkit.plugin.Plugin;

public class JsPluginCommand extends Command implements PluginIdentifiableCommand {
	
	@FunctionalInterface
	public interface CommandHandler {
		boolean handle(CommandSender sender, String alias, String[] args);
	}
	
	@FunctionalInterface
	public interface JsTabCompleter {
		List<String> complete(CommandSender sender, String alias, String[] args);
	}

	/**
	 * Plugin that registered this command.
	 */
	private final JsPlugin plugin;
	
	/**
	 * Command handler JS function.
	 */
	private final CommandHandler handler;
	
	/**
	 * Tab completion handler.
	 */
	private final JsTabCompleter completer;
	
	public JsPluginCommand(JsPlugin plugin, CommandHandler handler, JsTabCompleter completer,
			String name, List<String> aliases, String description) {
		super(name, description, "", aliases);
		this.plugin = plugin;
		this.handler = handler;
		this.completer = completer;
	}

	@Override
	public Plugin getPlugin() {
		return plugin;
	}

	@Override
	public boolean execute(CommandSender sender, String alias, String[] args) {
		return handler.handle(sender, alias, args);
	}
	
	@Override
	public List<String> tabComplete(CommandSender sender, String alias, String[] args) {
		return completer.complete(sender, alias, args);
	}
	
	public void unload(CommandMap commandMap) {
		// Remove all aliases of the command (including plugin prefixes)
		Map<String, Command> knownCommands = commandMap.getKnownCommands();
		knownCommands.remove(getName());
		knownCommands.remove(getPlugin().getName() + ":" + getName());
		for (String alias : getAliases()) {
			knownCommands.remove(alias);
			knownCommands.remove(getPlugin().getName() + ":" + alias);
		}
		unregister(commandMap); // Call Bukkit to do some cleanup
	}

}
