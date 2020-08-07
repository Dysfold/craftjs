import { test } from 'zora';
import {
  ServerEvent,
  ServerListPingEvent,
  ServerCommandEvent,
} from 'org.bukkit.event.server';
import { HandlerList } from 'org.bukkit.event';

test('Events', async (t) => {
  let unregister: (() => void) | undefined;
  const promise = () =>
    new Promise<boolean>((resolve, reject) => {
      // Timeout after 200ms
      setTimeout(() => resolve(false), 200);
      try {
        unregister = registerEvent(ServerCommandEvent, () => {
          resolve(true);
        });
      } catch (e) {
        reject(e);
      }
    });

  const call = () =>
    server.pluginManager.callEvent(
      new ServerCommandEvent(server.consoleSender, 'js'),
    );

  const getHandlerAmount = () =>
    HandlerList.getRegisteredListeners(__plugin).toArray().length;

  const oldHandlerAmount = getHandlerAmount();

  const a = promise();
  call();

  t.ok(unregister, 'Unregister is set');
  t.ok(await a, 'Event registration works');

  if (unregister) unregister();

  const b = promise();
  t.ok(unregister, 'Unregister is still set');
  if (unregister) unregister();
  call();

  t.notOk(await b, 'Event unregistration works');

  /*t.eq(
    oldHandlerAmount,
    getHandlerAmount(),
    'Registered listener count stays the same',
  );*/
});
