# CraftJS

***NOTE: Under heavy development***

Spigot Plugin that allows programming custom functionality for your server using Javascript. Inspired heavily by [Scriptcraft](https://github.com/walterhiggins/ScriptCraft) but trying to address some of it's issues.

# CraftJS Javascript

Repository containing base Javascript code for [CraftJS](https://github.com/Ap3teus/craftjs) responsible for implementing basic Node-like functionality (partially CommonJS -compatible module resolvation, `setTimeout` and `setInterval` , Spigot event registration, etc...)

## Differences to Scriptcraft

CraftJS and Scriptcraft are both essentially just a Javascript engine wrapped into a Spigot plugin. Scriptcraft uses now deprecated [Nashorn](https://openjdk.java.net/projects/nashorn/) -engine, while CraftJS uses [Graal](https://www.graalvm.org/docs/reference-manual/languages/js/). This allows the executing code to use more recent (ES6+) Javascript features without using transpilers (like [Babel](https://babeljs.io)), and should also allow for much better performance.

## Getting started

### Installation

***NOTE: CraftJS requires you to use [Paper](https://papermc.io)***

Download the plugin jar from [releases](https://github.com/Ap3teus/craftjs/releases) or build the code directly from source. More info [here](./docs/Getting%20Started.md)

### Contributing

The plugin's java code is located at `java` . The internal Javascript code, mostly coded in [Typescript](https://www.typescriptlang.org), can be found under `internal` . Development time compilation can be done by executing `npx tsc --watch` at `internal` . `internal/dist` contains compiled js-files, and they are executed by the plugin.

### Building the plugin from source

0. Make sure you have `maven` installed
1. Download and install [Graal Java runtime](https://www.graalvm.org/downloads) and make sure it's configured as your default Java (executing `java -version` should say `OpenJDK Runtime Environment GraalVM` )
2. Run `mvn install` in the `java` -directory
3. Copy the built jar from `java/target` to your server's plugins-folder

## Testing

Unit tests can be run by executing `runTests()` in the CraftJS Graal-context. Easiest way to do so is to run `js runTests()` -command in the server console.

## Typescript

`types` -directory contains Typescript definitions generated from Java types. It's not perfect, but most of the time it's been enough.

More information is available [here](./docs/Typescript.md)
