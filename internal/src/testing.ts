import { File } from 'java.io';

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

function runTests() {
  const baseDir = new File('js');
  const testFiles: File[] = [];
  walk(baseDir, (f) => {
    if (
      !f.getName().match(/\.test\.js/g) ||
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
