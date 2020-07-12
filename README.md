# CraftJS Javascript

Repository containing base Javascript code for [CraftJS](https://github.com/Ap3teus/craftjs) responsible for implementing basic Node-like functionality (partially CommonJS -compatible module resolvation, `setTimeout` and `setInterval`, Spigot event registration, etc...)

## Getting started

### Installation

Install [CraftJS](https://github.com/Ap3teus/craftjs) using provided instructions and clone this repository to `server/js` -directory.

### Development

The internal code is located at `internal`. The internal code is mostly coded in [Typescript](https://www.typescriptlang.org). Development time compilation can be done by executing `npx tsc --watch` at `internal`. `internal/dist` contains compiled js-files, and they are executed by the plugin.

## Testing

Unit tests can be run by executing `runTests()` in the CraftJS Graal-context. Easiest way to do so is to run `js runTests()` -command in the server console.