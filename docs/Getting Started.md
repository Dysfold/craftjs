# Getting Started

When you first boot up your server with CraftJS installed, the plugin will copy it's core Javascript library to `your-server/js`. The file structure will look something like this:

```
your-server
├── plugins
├── bukkit.yml
├── ...
├── js
|   ├── internal
|   ├── plugins
|   ├── types
```

`internal` contains core CraftJS code. Ideally, there should not be any need to modify code there. `types` contains Typescript-declarations for Spigot's packages and also for some of Java's. This folder should be in the `include` array of your project's `tsconfig.json`.

`plugins` folder contains user code. Each file or directory in the folder is treated as a module, but the recommended approach is to create a new directory there, execute `npm init -y` to initialize an empty npm project and go from there. The default file CraftJS looks for as the entrypoint is `index.js` but this can be changed by editing `package.json`'s `main`-property. A working plugin structure would look something like this:

```
├── js
|   ├── ...
|   ├── plugins
|   |   ├── my-plugin
|   |   |   ├── index.js
|   |   |   ├── package.json
```

## Typescript

Usage of Typescript is heavily recommended, even though it requires some additional setup. Create a `tsconfig.json` file and copy and paste the following.

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": false,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*",
    "../../types/**/*",
  ]
}
```

This will assume your source code resides at `my-plugin/src` and compiled javascript is emitted to `my-plugin/dist`. Also note the inclusion of the `types`-folder. However, by default CraftJS looks for `my-plugin/index.js`, so you will need to edit your `package.json` to something like

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "dependencies": {}
}
```
The key being the `"main"`-field. This will treat `my-plugin/src/index.ts` (which compiles to `my-plugin/dist/index.js`) as your plugin's entrypoint and execute that when your plugin loads. At this point you are essentially set. `tsc --watch` can be used for development time automatic watch compilation.

# Development

*Note: this section's examples use Typescript*

CraftJS is essentially just a Javascript runtime running on top of JVM as a Spigot plugin. This means that you can do (almost) everything that a regular Spigot-plugin programmed with Java can.

```ts
import { PlayerInteractEvent } from 'org.bukkit.event.player';

registerEvent(PlayerInteractEvent, event => {
  event.player.sendMessage(`${event.item.amount}x`);
});
```

This snippet registers a handler for `PlayerInteractEvent` and sends the size of player's tool stack to the player when the event is triggered. Note that we're using `event.player` instead of `event.getPlayer()` which you would have to use in Java. These are essentially identical, and the latter approach works, but it takes up more space, and makes neat things like object destructuring impossible.

```ts
// Destructuring
registerEvent(PlayerInteractEvent, ({ player, item }) => {
  player.sendMessage(`${item.amount}x`);
});

// This also works
registerEvent(PlayerInteractEvent, event => {
  event.getPlayer().sendMessage(`${event.getItem().amount}x`);
});
```

## Imports

```ts
import { PlayerInteractEvent as a } from 'org.bukkit.event.player';

const { PlayerInteractEvent: b } = require('org.bukkit.event.player');

const c = org.bukkit.event.player.PlayerInteractEvent;

// # true
console.log(a === b && a === c && b === c);
```

All of the above are valid ways of importing a java class. The `import` statements gets compiled to a `require` -call by Typescript, and the `require` returns the corresponding java-package. Since the Typescript definitions "fool" the Typescript language server to think they are just regular Javascript modules, editor autocomplete functionality (in the likes of [VS Code](https://code.visualstudio.com/)) can automatically prompt you to import a class from a Java package. The third way is useful if you want to import a class that doesn't have typings.


## Java interop

### Arrays

Graal allows using Java-arrays (and array-like objects) in much the same way as you would a regular Javascript-array. Consider the following:

```ts
// equivalent to server.getOnlinePlayers()
const players = server.onlinePlayers;
// Logs the first entry in the list of online players to console
console.log(players[0]);

// This logs the amount of players
console.log(players.length);

// Iterating also works as expected
for (const player of players) {
  console.log(player);
}

// This will however throw an error
players.concat([]);
```

The `players`-object is not actually a Javascript array, so it doesn't have Javascript array methods (`map`, `slice`, ...). Graal however provides ways to interact with it as if it was, hence why indexing and iterating (and `.length`) work just fine. Easiest way to convert a Java array (or `Collection`, `List`, etc...) to a regular JS array is by using ES6 array spread syntax:

```ts
const players = [...server.onlinePlayers];

// This now works :)
players.concat([]);
```

### Extending Java classes

Sometimes you may find yourself in a situtation where you need to extend or implement a Java class or interface. This does not work with the ES6 class syntax (see more info [here](https://github.com/graalvm/graaljs/issues/32)), but instead with a special `Java.extend`-function. Internally this is used when registering events, but you probably won't need to do anything with it.

```ts
import { Runnable } from 'java.lang';

// Create the class
const MyRunnable = Java.extend(
  Runnable,
  {
    run() {
      console.log('hello world!');
    }
  });

// Create an instance of the class
const runnable = new MyRunnable();

// Run it
runnable.run();
```

Note that this works even though `Runnable` is a Java interface, not a class, and we are implementing it instead of extending.