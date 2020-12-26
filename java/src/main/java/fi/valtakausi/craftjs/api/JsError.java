package fi.valtakausi.craftjs.api;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.java.PluginClassLoader;
import org.graalvm.polyglot.PolyglotException;
import org.graalvm.polyglot.PolyglotException.StackFrame;
import org.graalvm.polyglot.SourceSection;

public class JsError {
	
	/**
	 * Gets a plugin for Java class if possible.
	 * @param name Fully qualified class name.
	 * @return Plugin name, or "?" if not known.
	 */
	private static String getPlugin(String name) {
		// Static lookup table
		if (name.startsWith("net.minecraft.server")) {
			return "Minecraft";
		} else if (name.startsWith("org.bukkit")) {
			return "Bukkit";
		}
		
		// Try looking up the class and getting plugin from its class loader
		try {
			ClassLoader loader = Class.forName(name).getClassLoader();
			if (loader instanceof PluginClassLoader) {
				Plugin plugin = ((PluginClassLoader) loader).getPlugin();
				return plugin.getName();
			}
		} catch (ClassNotFoundException e) {
			return "?"; // Failed to load class, we have no idea what this could be
		}
		return "?";
	}

	public static class FrameInfo {
		
		/**
		 * Whether this frame is Java or JS code.
		 */
		public final boolean javaFrame;
		
		/**
		 * Plugin name. Not available for all Java frames.
		 */
		public final String plugin;
		
		/**
		 * Source module. For Java frames, this is a fully qualified class name.
		 * For JS frames, this is path relative to plugin root.
		 */
		public final String source;
		
		/**
		 * Java method or JS function name.
		 */
		public final String methodName;
		
		/**
		 * File name (not path).
		 */
		public final String fileName;
		
		/**
		 * Line number in the file.
		 */
		public final int line;
		
		public FrameInfo(StackFrame frame) {
			this.javaFrame = frame.isHostFrame();
			if (javaFrame) {
				StackTraceElement hostFrame = frame.toHostFrame();
				this.plugin = getPlugin(hostFrame.getClassName());
				this.source = hostFrame.getClassName();
				this.methodName = hostFrame.getMethodName();
				this.fileName = hostFrame.getFileName();
				this.line = hostFrame.getLineNumber();
			} else {
				SourceSection location = frame.getSourceLocation();
				if (location != null) {
					String[] nameParts = location.getSource().getName().split(":");
					this.plugin = nameParts[0];
					this.source = nameParts[1];
					this.fileName = Path.of(source).getFileName().toString();
					this.line = location.getStartLine();
				} else {
					// Location is not available, fall back to defaults
					this.plugin = "?";
					this.source = "unknown";
					this.fileName = "unknown";
					this.line = -1;
				}
				this.methodName = frame.getRootName();
			}
		}
	}
	
	/**
	 * Error or exception name.
	 */
	public final String name;
	
	/**
	 * Error message.
	 */
	public final String message;
	
	/**
	 * Stack frames.
	 */
	public final List<FrameInfo> stack;
	
	public JsError(PolyglotException e) {
		if (e.isHostException()) {
			this.name = e.asHostException().getClass().getName();
			this.message = e.getMessage();
		} else {
			// TODO how do we separate name and message?
			this.name = e.getMessage();
			this.message = null;
		}
		this.stack = new ArrayList<>();
		for (StackFrame frame : e.getPolyglotStackTrace()) {
			stack.add(new FrameInfo(frame));
		}
	}
}
