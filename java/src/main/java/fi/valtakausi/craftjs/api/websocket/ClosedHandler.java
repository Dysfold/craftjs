package fi.valtakausi.craftjs.api.websocket;

@FunctionalInterface
public interface ClosedHandler {

	void closed(int code, String reason, boolean remote);
}
