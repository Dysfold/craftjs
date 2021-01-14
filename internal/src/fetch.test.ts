import { test } from 'craftjs-plugin';

// FIXME: async test errors are not correctly reported yet
// If fetch OK is not shown, something is wrong

test('fetch polyfill', async (t) => {
  try {
    const json = await (
      await fetch('https://api.github.com', {
        headers: new Headers([['User-Agent', 'CraftJS/test']]),
      })
    ).json();
    if (json.issues_url) {
      log.info('fetch probably ok');
    } else {
      log.error('fetch error: Github API did not work');
    }
  } catch (e) {
    log.error(e);
  }
});
