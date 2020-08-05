# CraftJS

***NOTE: Under heavy development***

Spigot Plugin that allows programming custom functionality for your server using Javascript. Inspired heavily by [Scriptcraft](https://github.com/walterhiggins/ScriptCraft) but trying to address some of it's issues.

Core Javascript code is available [here](https://github.com/Ap3teus/craftjs-javascript)

## Getting Started

Download the plugin jar from [releases](https://github.com/Ap3teus/craftjs/releases) or build the code directly from source.

### Building from source

0. Make sure you have `maven` installed
1. Download and install [Graal Java runtime](https://www.graalvm.org/downloads) and make sure it's configured as your default Java (executing `java --version` should say `OpenJDK Runtime Environment GraalVM` )
2. Run `mvn install`
3. Copy the built jar from `target` to your server's plugins-folder

## Differences to Scriptcraft

CraftJS and Scriptcraft are both essentially just a Javascript engine wrapped into a Spigot plugin. Scriptcraft uses now deprecated [Nashorn](https://openjdk.java.net/projects/nashorn/) -engine, while CraftJS uses [Graal](https://www.graalvm.org/docs/reference-manual/languages/js/). This allows the executing code to use more recent (ES6+) Javascript features without using transpilers (like [Babel](https://babeljs.io)), and should also allow for much better performance.
