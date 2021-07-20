// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Path } from 'java.nio.file';
import { Plugin } from 'org.bukkit.plugin';

// Don't export internal code
require('./boot/sourcemap');

// Export (and load) public APIs
export * from './commands';
export * from './database';
export * from './events';
export * from './logging'; // Loaded earlier, but export the types
export * from './scheduling';
export * from './fetch';
export * as chat from './chat';
export * as websocket from './websocket';

// Testing is quite high-level functionality, might use other APIs
export * from './testing/index';

// Export our require (and currentPlugin) to globals
// (don't export an import, we can't require the require implementation)
declare global {
  function require(id: string, relative?: string | Path): void;

  /**
   * Currently executing JS plugin. This is NOT an instance of the
   * CraftJS Java plugin.
   */
  const currentPlugin: Plugin;
}
