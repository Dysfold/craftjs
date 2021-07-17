package fi.valtakausi.craftjs.api.websocket;

public record ClosedStatus(
		int code,
		String reason,
		boolean remote
) {}
