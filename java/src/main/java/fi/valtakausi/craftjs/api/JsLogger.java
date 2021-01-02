package fi.valtakausi.craftjs.api;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import fi.valtakausi.craftjs.plugin.JsPlugin;

/**
 * A tiny wrapper for JUL {@link Logger}s used by Bukkit.
 *
 */
public class JsLogger {
	
	private static final Set<String> DEBUG_PLUGINS = new HashSet<>();
	
	static {
		String prop = System.getProperty("craftjs.debug");
		if (prop != null) {
			for (String name : prop.split(",")) {
				DEBUG_PLUGINS.add(name);
			}
		}
	}
	
	/**
	 * Backing (plugin) logger.
	 */
	private final Logger impl;
	
	/**
	 * If debugging has been enabled.
	 */
	private final boolean debugEnabled;
	
	public JsLogger(JsPlugin plugin) {
		// Don't use the plugin logger, uses JsPlugin class as prefix
		this.impl = Logger.getLogger(plugin.getName());
		this.debugEnabled = DEBUG_PLUGINS.contains(plugin.getName());
	}
	
	private String stringify(Object... msgs) {
		return Arrays.stream(msgs).map(Object::toString).collect(Collectors.joining());
	}
	
	public void error(Object... msgs) {
		impl.severe(stringify(msgs));
	}
	
	public void warn(Object... msgs) {
		impl.warning(stringify(msgs));
	}
	
	public void info(Object... msgs) {
		impl.info(stringify(msgs));
	}
	
	public void debug(Object... msgs) {
		// Bukkit suppresses FINE/DEBUG log level
		// NMS hacks to work around this are probably not worth it
		if (debugEnabled) {
			impl.info(stringify(msgs));
		}
	}

}
