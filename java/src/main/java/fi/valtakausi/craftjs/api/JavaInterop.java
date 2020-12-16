package fi.valtakausi.craftjs.api;

import java.nio.charset.StandardCharsets;

public class JavaInterop {

	public String bytesToString(byte[] bytes) {
		return new String(bytes, StandardCharsets.UTF_8);
	}
}
