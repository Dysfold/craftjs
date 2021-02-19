# CraftJS
CraftJS is a Bukkit plugin that adds support for writing plugins in TypeScript
and JavaScript.

## Current status
CraftJS is in early development and has little documentation aside of the
JS/Javadocs. No guarantees about API stability are provided.

## Requirements
* Paper (Minecraft 1.16)
  * Spigot would likely be trivial, will be considered later
* GraalVM 21.0 (Java 11 version)
  * Older known not to work, newer versions *might* be ok

## Usage
Tutorials for creating CraftJS plugins will come later. For now, see 'internal'
for a JS plugin example. If you copy the package.json from there, make sure to
change dependency 'craftjs-plugin' to latest version from npm.

To install CraftJS, just copy the jar file to your plugins folder.

## Development
CraftJS can be built with 'build.sh' script available at repository root.
Unfortunately, only Linux is supported for building at the moment.

More development instructions will come later.

## Technical details
JavaScript is executed with [GraalJS](https://github.com/oracle/graaljs), which
(unline Nashorn) supports modern JavaScript features. CraftJS itself provides

* JavaScript plugin loader implementation
* require() implementation with Java import support (for TypeScript)
* Bukkit scheduling helpers
* Event handler and command registration support
* Various standard library function implementations/polyfills

TypeScript types are [generated](https://github.com/bensku/java-ts-bind)
automatically from Java source code and include Javadoc. They are available
on npm as 'craftjs-plugin'.

### Components
CraftJS consists of the following components that can be found in directories
with similar names:
* core: Javascript core
  * Provides core APIs (e.g. require) to JS plugins
  * Injected to each Graal context before loading JS plugin
* internal: CraftJS JS plugin
  * Internal JS plugin that provides e.g. /craftjs command
  * Has access to internal APIs from java component
* java: CraftJS Java code
  * Maven project with all our Java code

## Differences from ScriptCraft
CraftJS is inspired by an older scripting plugin,
[Scriptcraft](https://github.com/walterhiggins/ScriptCraft). Despite the
obvious similarities, the two plugins have several important differences:

* CraftJS uses [GraalJS](https://github.com/oracle/graaljs) instead of Nashorn
  * Better support for new JS features
  * (Usually) better performance
* CraftJS has TypeScript types
  * Autocomplete (and import) Bukkit classes!
