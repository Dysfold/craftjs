import { test } from 'craftjs-plugin';
import { WebSocket } from 'craftjs-plugin/websocket';

test('websocket echo', async (t) => {
  const ws = await WebSocket.open('wss://echo.websocket.org');
  ws.send('websocket test');
  t.eq(await ws.receive(), 'websocket test', 'websocket echo works');
  await ws.close('finished');
});
