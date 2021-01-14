package fi.valtakausi.craftjs.api;

import java.nio.charset.StandardCharsets;

import org.graalvm.polyglot.PolyglotException;

public class JavaInterop {

	public String bytesToString(byte[] bytes) {
		return new String(bytes, StandardCharsets.UTF_8);
	}
	
	/**
	 * Handles {@link PolyglotException polyglot} errors thrown by given
	 * function by returning them as JS errors.
	 * @param func Function to call.
	 * @return Error converted for JS usage, or null if nothing was thrown.
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

}
