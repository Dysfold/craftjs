package fi.valtakausi.craftjs.api.database;

import java.nio.file.Path;
import org.h2.mvstore.MVStore;

public class Database {

	/**
	 * Database storage.
	 */
	private final MVStore store;
	
	public Database(Path file) {
		this.store = MVStore.open(file.toAbsolutePath().toString());
	}
	
	public Table<?, ?> getTable(String name) {
		return new Table<>(store.openMap(name));
	}

	public void close() {
		store.close();
	}
}
