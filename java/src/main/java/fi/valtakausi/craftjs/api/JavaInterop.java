package fi.valtakausi.craftjs.api;

import java.nio.charset.StandardCharsets;
import org.graalvm.polyglot.PolyglotException;

public class JavaInterop {

	public String bytesToString(byte[] bytes) {
		return new String(bytes, StandardCharsets.UTF_8);
	}
	
	/**
	 * Executes a function while catching polyglot exceptions thrown by it.
	 * Java exceptions that don't pass at least one layer of JS are not caught.
	 * @param func A function.
	 * @return An error, or null if no error occurred.
	 */
	public JsError catchError(Runnable func) {
		try {
			func.run();
			return null;
		} catch (PolyglotException e) {
			return new JsError(e);
		}
	}
	
	public String systemProperty(String name) {
		return System.getProperty(name);
	}
	
	/**
	 * Ensures that the given JS number will stay a Java double when passed
	 * to Java side. This may be needed to call certain APIs with generic
	 * types (e.g. Bukkit persistent data).
	 * @param value JS number (converted to double).
	 * @return Number that will stay double.
	 */
	public double toDouble(double value) {
		return value;
	}

}
