import { Runtime, System } from 'java.lang';
import { Bukkit } from 'org.bukkit';
import { CommandSender } from 'org.bukkit.command';

export function runTests(plugin: string, sender: CommandSender): boolean {
  return __internals.callForeign(plugin, '__runTests', sender) as boolean;
}

// Automated test runner for e.g. CI
// This may cause world corruption due to halt() at the end
// DO NOT run in persistent worlds
const testsProperty = System.getProperty('craftjs.runTests');
if (testsProperty) {
  log.info('Entering CraftJS test mode...');
  log.info('The server will shut down after tests have been run.');
  const targets = testsProperty.split(',');
  let testsPassed = true;
  for (const target of targets) {
    const ok = runTests(target, Bukkit.consoleSender); // Run tests, log to console
    if (!ok) {
      testsPassed = false;
    }
  }

  // Quit, no matter if tests passed or not
  if (testsPassed) {
    log.info('All tests passed, stopping server...');
  } else {
    log.error('Test failures detected (see above). Stopping server...');
  }
  // System.exit status code is not always preserved
  Runtime.runtime.halt(testsPassed ? 0 : 7);
}
