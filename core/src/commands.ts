import { CommandSender, ConsoleCommandSender } from 'org.bukkit.command';
import { Player } from 'org.bukkit.entity';

/**
 * Command options.
 */
interface CommandOptions {
  /**
   * Checks if a given sender is allowed to execute this command. The default
   * checker consults executableBy and permission options.
   *
   * Overriding this causes other access options to be IGNORED!
   */
  accessChecker?: (sender: CommandSender) => boolean;

  /**
   * What kind of command executor can use this command. By default, players
   * and console are allowed.
   */
  executableBy?: 'players' | 'console' | 'both';

  /**
   * A permission needed to execute this command. When left out, only OPs are
   * allowed for security reasons. Note that console is considered to have ALL
   * permissions.
   */
  permission?: string;

  /**
   * Missing permission message, or a function that sendsa suitable message to
   * command sender. Called when a player lacks a permission.
   */
  permissionMessage?:
    | string
    | ((sender: CommandSender, command: string, permission: string) => void);

  /**
   * Usage message (if plain text), or a function that sends a suitable
   * message to command sender. These messages are typically sent when
   * a command handler returns false (not undefined!).
   */
  usage?:
    | string
    | ((sender: CommandSender, command: string, ...args: string[]) => void);

  /**
   * Command description.
   */
  description?: string;

  /**
   * Argument tab completion handler. By default, nothing is tab-completed.
   */
  completer?: (
    sender: CommandSender,
    alias: string,
    ...args: string[]
  ) => string[];
}

function registerCommand(
  names: string | string[],
  handler: (sender: CommandSender, ...args: string[]) => boolean | void,
  options: CommandOptions = {},
): void {
  // Figure out primary name
  let name: string;
  let aliases: string[];
  if (typeof names == 'string') {
    name = names;
    aliases = []; // No aliases
  } else {
    name = names[0];
    names.shift(); // Rest of names = aliases
    aliases = names;
  }

  // Wrap user-provided handler to do access checks and print usage message
  const wrappedHandler = (sender: CommandSender, ...args: string[]) => {
    let permission = true;
    const executableBy = options.executableBy;
    if (executableBy) {
      if (
        executableBy == 'console' &&
        !(sender instanceof ConsoleCommandSender)
      ) {
        permission = false; // Treat it as if the player didn't have permission
      } else if (executableBy == 'players' && !(sender instanceof Player)) {
        sender.sendMessage(`Command ${name} can only be executed by players.`);
        return false;
      }
    }

    // Check if player has permission to execute this command
    if (options.accessChecker) {
      if (!options.accessChecker(sender)) {
        permission = false;
      }
    } else if (options.permission) {
      permission = sender.hasPermission(options.permission);
    } else {
      // Default to OP requirement to avoid accidentally exposing admin commands
      permission = sender.op;
    }

    // Send error message and stop here if player is not allowed to execute
    if (!permission) {
      const msg = options.permissionMessage;
      if (msg) {
        if (typeof msg == 'string') {
          sender.sendMessage(msg);
        } else {
          msg(sender, name, options.permission ?? 'craftjs.placeholder.op');
        }
      } else {
        sender.sendMessage("You don't have a permission to do that.");
      }
      return false;
    }

    const success = handler(sender, ...args);

    // Handle failures if false was explicitly returned
    // undefined/no return indicates success
    if (success === false) {
      const usage = options.usage;
      if (usage) {
        if (typeof usage == 'string') {
          sender.sendMessage(usage);
        } else {
          usage(sender, name, ...args);
        }
      }
      return false;
    }

    // Access checks passed, handler returned true or undefined
    return true;
  };

  const completer = options.completer ?? (() => []);

  // Call Java side to register the command
  __craftjs.registerCommand(
    wrappedHandler,
    completer,
    name,
    aliases,
    options.description ?? '',
  );
}

declare global {
  /**
   * Registers a command. By default, it is executable only be admins. For
   * player-facing commands, specify a permission (or access handler) in options.
   * @param names Command name or names.
   * @param handler Command handler
   * @param options The command options.
   */
  function registerCommand(
    names: string | string[],
    handler: (sender: CommandSender, ...args: string[]) => boolean | void,
    options?: CommandOptions,
  ): void;
}
globalThis.registerCommand = registerCommand;
