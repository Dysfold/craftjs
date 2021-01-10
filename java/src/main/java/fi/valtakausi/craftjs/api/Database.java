package fi.valtakausi.craftjs.api;

import java.nio.file.Path;
import java.util.Map;

import org.h2.mvstore.MVStore;

public class Database {

	/**
	 * Database storage.
	 */
	private final MVStore store;
	
	public Database(Path file) {
		this.store = MVStore.open(file.toAbsolutePath().toString());
	}
	
	public Map<?, ?> getTable(String name) {
		return store.openMap(name);
	}

	public void close() {
		store.close();
	}
}
