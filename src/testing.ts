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

async function runTests(base?: string) {
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
  await __zoraHarness.report();
}

async function runner() {
  const env = java.lang.System.getenv('CRAFTJS_ENV');
  console.log(`craftjs_env=${env}`);
  if (env === 'test') {
    runTests();
    try {
      await __zoraHarness.report();
      if (!__zoraHarness.pass) {
        throw new Error();
      }
      java.lang.Runtime.getRuntime().halt(0);
    } catch {
      java.lang.Runtime.getRuntime().halt(1);
    }
  }
}

runner();

global.runTests = runTests;
