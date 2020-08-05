# CraftJS API reference

## Global variables

| Name       | Type                                                                             | Description                                                    |
|------------|----------------------------------------------------------------------------------|----------------------------------------------------------------|
| server     | static [Bukkit](https://papermc.io/javadocs/paper/1.16/org/bukkit/Bukkit.html)   | Shorthand for `org.bukkit.Bukkit`                              |
| __filename | string                                                                           | The path of the currently executing file                       |
| __dirname  | string                                                                           | The parent folder of the currently executing file              |
| global     | Object                                                                           | Represents the global namespace. `globalThis` can also be used |
| __plugin   | [Plugin](https://papermc.io/javadocs/paper/1.16/org/bukkit/plugin/Plugin.html)   | The CraftJS plugin-object                                      |
| __ctx      | [Context](https://www.graalvm.org/sdk/javadoc/org/graalvm/polyglot/Context.html) | GraalJS context where the javascript code is being executed    |

---

## Require

``` ts
require(module): void
```

### Parameters

| Name   | Type     |
|--------|----------|
| module | `string` |

### Description

Works like NodeJS `require` , and imports `module` as a local file or from `node_modules` -directory. Can also be used to import Java-packages, mostly for better Typescript interop.

### Examples

``` ts
// Require npm module
const _ = require('lodash');

// Require a local file
const foo = require('./foo');

// Require a Java-package
const { File } = require('java.io');
```

---

## RegisterEvent

``` ts
registerEvent(event, callback, priority?): Function
```

### Parameters

| Name     | Type                                                                                                   |
|----------|--------------------------------------------------------------------------------------------------------|
| event    | `typeof` [Event](https://papermc.io/javadocs/paper/1.16/org/bukkit/event/Event.html)                   |
| callback | `(e: typeof event) => void`                                                                            |
| priority | [EventPriority](https://papermc.io/javadocs/paper/1.16/org/bukkit/event/EventPriority.html) (optional) |

### Description

Registers Spigot event of type `event` with default priority of `HIGHEST` , and calls the provided callback function with the event when the event is triggered. Returns a function that when called unregisters the handler.

### Examples

``` ts
import { PlayerInteractEvent } from 'org.bukkit.event.player';

registerEvent(PlayerInteractEvent, (event) => {
  console.log(event.player.name);
});
```

---

## RegisterCommand

``` ts
registerCommand(name, callback): void
```

### Parameters

| Name     | Type                                                                                                                                                           |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name     | `string`                                                                                                                                                       |
| callback | `(sender: ` [CommandSender](https://papermc.io/javadocs/paper/1.16/org/bukkit/command/CommandSender.html)`, label: string, args: string[]) => void \| boolean` |

### Description

Registers command with `name`, and calls `callback` when the command is executed. The command is considered to have succeeded if the callback function returns either `undefined` (i.e. doesn't return anything) or `true` . If the callback function returns `false` , the command is considered to have failed.

### Examples

``` ts
registerCommand('hello', (sender, label, args) => {
  sender.sendMessage( `Hello ${args[0]} !` );
});

// Output:
// > /hello dude
// < Hello dude !
```

---
