package fi.valtakausi.craftjs.api.database;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.BiConsumer;

import org.h2.mvstore.Cursor;
import org.h2.mvstore.MVMap;

/**
 * Table API for JS code. See core/src/database.ts for most documentation.
 */
public class Table<K, V> implements Iterable<List<Object>> {

	/**
	 * The backing H2 MVStore map.
	 */
	private final MVMap<K, V> map;
	
	Table(MVMap<K, V> map) {
		this.map = map;
	}
	
	public int getSize() {
		return map.size();
	}
	
	public void clear() {
		map.clear();
	}
	
	public boolean delete(K key) {
		return map.remove(key) != null;
	}
	
	public V get(K key) {
		return map.get(key);
	}
	
	public boolean has(K key) {
		return map.containsKey(key);
	}
	
	public Table<K, V> set(K key, V value) {
		map.put(key, value);
		return this;
	}
	
	public static class CursorIterator<K, V> implements Iterator<List<Object>> {

		private final Cursor<K, V> cursor;
		
		CursorIterator(Cursor<K, V> cursor) {
			this.cursor = cursor;
		}
		
		@Override
		public boolean hasNext() {
			return cursor.hasNext();
		}

		@Override
		public List<Object> next() {
			// Advance to next, then also take its value
			return List.of(cursor.next(), cursor.getValue()); // [key, value]
		}
		
	}
	
	public Iterable<List<Object>> cursor(K from) {
		return () -> new CursorIterator<>(map.cursor(from));
	}
	
	public static class ValueIterator<T> implements Iterator<T> {
		private final Iterator<T> it;
		
		ValueIterator(Collection<T> values) {
			this.it = values.iterator();
		}

		@Override
		public boolean hasNext() {
			return it.hasNext();
		}

		@Override
		public T next() {
			return it.next();
		}
	}

	public Iterable<K> keys() {
		return () -> new ValueIterator<>(map.keySet());
	}
	
	public Iterable<V> values() {
		return () -> new ValueIterator<>(map.values());
	}
	
	public static class EntryIterator<K, V> implements Iterator<List<Object>> {
		private final Iterator<Map.Entry<K, V>> it;
		
		EntryIterator(Set<Map.Entry<K, V>> set) {
			this.it = set.iterator();
		}

		@Override
		public boolean hasNext() {
			return it.hasNext();
		}

		@Override
		public List<Object> next() {
			Map.Entry<K, V> entry = it.next();
			return List.of(entry.getKey(), entry.getValue());
		}
	}

	public Iterable<List<Object>> entries() {
		return () -> new EntryIterator<>(map.entrySet());
	}

	@Override
	public Iterator<List<Object>> iterator() {
		return new EntryIterator<>(map.entrySet());
	}

	public void forEach(BiConsumer<K, V> action) {
		map.forEach(action);
	}

}
