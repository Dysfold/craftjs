package fi.valtakausi.craftjs.api.websocket;

import java.util.function.Consumer;

public record ReceiveRequest(
		Consumer<String> success,
		ClosedHandler closed,
		Consumer<Exception> error
) {}
