import { Map } from 'java.util';
import { InternalDb } from './boot/craftjs';

/**
 * A database with multiple key-value tables.
 */
export class Database {
  private impl: InternalDb;

  constructor(name: string) {
    this.impl = __craftjs.openDatabase(name);
  }

  /**
   * Gets or creates a new database table.
   * @param name Table name.
   */
  getTable(name: string): Table<any, any> {
    return new Table(this.impl.getTable(name));
  }
}

/**
 * A single database table storing key-value pairs.
 */
export class Table<K, V> {
  map: Map<K, V>;

  constructor(map: Map<K, V>) {
    this.map = map;
  }

  clear(): void {
    this.map.clear();
  }

  delete(key: K): boolean {
    return this.map.remove(key) != null;
  }

  get(key: K): V | null {
    return this.map.get(key);
  }

  has(key: K): boolean {
    return this.map.containsKey(key);
  }

  set(key: K, value: V): Table<K, V> {
    this.map.put(key, value);
    return this;
  }
}
