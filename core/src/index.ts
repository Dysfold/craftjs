require('./boot/sourcemap'); // Don't export these
export * from './commands';
export * from './events';
export * from './scheduling';

// Export our require to globals
// (don't actually require it here, it is not supported)
declare global {
  function require(id: string, relative?: string): any;
}
