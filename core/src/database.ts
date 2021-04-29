import { Iterable } from 'java.lang';
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
    return this.impl.getTable(name);
  }
}

/**
 * Types directly supported by CraftJS's key-value database API.
 */
export type DatabaseType = string | number;

/**
 * A CraftJS database API table;
 * an ordered key-value storage backed by disk storage.
 */
export declare class Table<
  K extends DatabaseType,
  V extends DatabaseType
> extends Iterable<[K, V]> {
  /**
   * Gets current size of this table.
   * @returns Amount of entries in table.
   */
  get size(): number;

  /**
   * Clears this table. Data in it is LOST!
   */
  clear(): void;

  /**
   * Deletes an entry from this table.
   * @param key Key to delete.
   * @returns Whether or not an entry existed before deletion.
   */
  delete(key: K): boolean;

  /**
   * Gets a value from this table.
   * @param key Key for value.
   * @returns The value, or null if no value with given key exists.
   */
  get(key: K): V | null;

  /**
   * Checks if this table has the given key.
   * @param key A key.
   */
  has(key: K): boolean;

  /**
   * Sets a value to this table.
   * @param key Key for value.
   * @param value The value.
   * @returns This table, for easily chaining set()s.
   */
  set(key: K, value: V): Table<K, V>;

  /**
   * Gets a cursor to this table at the given key.
   * @param from First key to include in iteration
   * @returns A cursor that can be used to iterate values in this table from
   * given starting point key.
   */
  cursor(from: K): Iterable<[K, V]>;

  /**
   * Gets keys of this table.
   * @returns Iterable keys.
   */
  keys(): Iterable<K>;

  /**
   * Gets values of this table.
   * @returns Iterable values.
   */
  values(): Iterable<V>;

  /**
   * Gets key-value entries of this table.
   * @returns Table entries.
   */
  entries(): Iterable<[K, V]>;
}
