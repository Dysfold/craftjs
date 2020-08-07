import { File } from 'java.io';
import { Paths } from 'java.nio.file';
import { Color } from 'org.bukkit';

declare global {
  function runTests(): void;
}

function walk(file: File, callback: (file: File) => void) {
  if (!file.isDirectory()) {
    callback(file);
    return;
  }
  for (const f of file.listFiles()) {
    walk(f, callback);
  }
}

function getTestBaseDir(base?: string) {
  if (!base) {
    return __jsdir;
  }
  if (base[0] === '.') {
    return Paths.get(__jsdir, base).toString();
  }
  const pluginDir = Paths.get(__jsdir, 'plugins', base).toString();
  return pluginDir;
}

function runTests(base?: string) {
  const baseDir = new File(getTestBaseDir(base));
  const testFiles: File[] = [];
  walk(baseDir, (f) => {
    if (
      !f.getName().match(/\.test\.js$/g) ||
      f.getPath().match('node_modules') // Exclude tests of node_modules
    ) {
      return;
    }
    testFiles.push(f);
  });

  const ownPath = new File(__filename).toPath().getParent();

  testFiles.forEach((f) => {
    const relative = ownPath.relativize(f.toPath());
    require(`./${f.getPath()}`, '.');
  });
}

async function runner() {
  const env = java.lang.System.getenv('CRAFTJS_ENV');
  console.log(`craftjs_env=${env}`);
  if (env === 'test') {
    runTests();
    await __zoraHarness.report();
    if (!__zoraHarness.pass) {
      java.lang.System.exit(1);
    } else {
      server.shutdown();
    }
  }
}

runner();

global.runTests = runTests;
