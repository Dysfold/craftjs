package fi.valtakausi.craftjs.api;

import org.graalvm.polyglot.Value;

@FunctionalInterface
public interface Thenable {

	void then(Value onResolve, Value onReject);
}
