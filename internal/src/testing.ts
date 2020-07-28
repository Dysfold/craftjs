import { File } from 'java.io';
import { Paths } from 'java.nio.file';

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

global.runTests = runTests;
