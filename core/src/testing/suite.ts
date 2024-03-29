import { Files, Path } from 'java.nio.file';
import { CommandSender } from 'org.bukkit.command';
import { JsError } from '../boot/errors';
import { Assert, AssertResult, FailedAssert } from './assert';

type TestFunction = ((t: Assert) => void) | ((t: Assert) => Promise<void>);

interface TestCase {
  name: string;
  handler: TestFunction;
}

class TestSuite {
  file: Path;
  tests: TestCase[];

  constructor(file: Path) {
    this.file = file;
    this.tests = [];
  }
}

/**
 * Currently active test suite.
 */
let suite: TestSuite | null;

export function test(name: string, handler: TestFunction): void {
  if (!suite) {
    throw new Error('test() used outside of a test');
  }
  suite.tests.push({ name: name, handler: handler });
}

/**
 * Statistics about tests run.
 */
interface TestStats {
  /**
   * Amount of succeeded test cases.
   */
  succeeded: number;

  /**
   * Amount of test cases with failed assertions.
   */
  failed: number;

  /**
   * Amount of test cases that threw errors.
   */
  errored: number;
}

/**
 * Runs all tests of current JS plugin.
 * @param out Where the results should be sent.
 * @returns If all tests passed.
 */
async function runTests(out: CommandSender): Promise<boolean> {
  const globalStats = { succeeded: 0, failed: 0, errored: 0 };
  const files = Files.walk(__craftjs.pluginRoot.resolve('dist')).toList();
  for (const file of files) {
    if (file.fileName.toString().endsWith('.test.js')) {
      const stats = await runTestFile(file, out);
      globalStats.succeeded += stats.succeeded;
      globalStats.failed += stats.failed;
      globalStats.errored += stats.errored;
    }
  }
  out.sendMessage(
    `ALL: ${globalStats.errored} errored, ${globalStats.failed} failed, ${globalStats.succeeded} succeeded`,
  );

  return globalStats.failed == 0 && globalStats.errored == 0;
}

/**
 * Runs tests in given JS file.
 * @param file Test file.
 * @param out Result sink.
 * @returns Test statistics.
 */
async function runTestFile(file: Path, out: CommandSender): Promise<TestStats> {
  // Initialize suite and load tests
  suite = new TestSuite(file);
  const module = './' + file.fileName.toString();
  require(module, file.parent, true); // Disable caching for require

  // Figure out original TS file name for reporting
  // TODO this may be broken, take a look later
  const { file: origin } = mapLineToSource(
    __craftjs.plugin.name,
    __craftjs.pluginRoot.relativize(suite.file).toString(),
    3,
  );

  out.sendMessage(origin);

  // Run test cases and report to caller
  const stats = { succeeded: 0, failed: 0, errored: 0 };
  for (const test of suite.tests) {
    const results: AssertResult[] = [];
    let promise;
    // Handle sync errors with catchError to guarantee good stack traces
    let error = __interop.catchError(
      () => (promise = test.handler(new Assert(results))),
    );
    if (promise) {
      // For async code, error handling is a bit more complicated
      // This might mangle the stack trace, but it is better than doing nothing
      try {
        await promise;
      } catch (e) {
        error = __interop.catchError(() => {
          throw e;
        });
      }
    }

    // Test reporting
    const success = reportResults(test, results, error, out);
    if (error) {
      stats.errored++;
    } else if (!success) {
      stats.failed++;
    } else {
      stats.succeeded++;
    }
  }

  out.sendMessage(
    `${origin}: ${stats.errored} errored, ${stats.failed} failed, ${stats.succeeded} succeeded`,
  );

  // Clean up
  suite = null;

  return stats;
}

/**
 * Reports individual assertion status.
 * @param test Test case.
 * @param results Results to report.
 * @param error Uncaught error, if present.
 * @param out Report sink.
 */
function reportResults(
  test: TestCase,
  results: AssertResult[],
  error: JsError | null,
  out: CommandSender,
): boolean {
  out.sendMessage(`${test.name}:`);

  // Print results of all asserts
  let success = true;
  for (const result of results) {
    if (result.success) {
      out.sendMessage(`  ✔ ${result.message}`);
    } else {
      success = false;
      const failure = result as FailedAssert;
      out.sendMessage(`  ✘ ${failure.message}`);
      out.sendMessage(`    ${failure.failure}`);
      if (failure.error) {
        // If failure included error, print stack trace
        out.sendMessage(formatError(failure.error));
      }
    }
  }

  // Test might have thrown something before it finished...
  if (error) {
    out.sendMessage(`  ✘ test doesn't throw errors`);
    out.sendMessage(formatError(error));
  }
  return success;
}

// "Export" for Java code
(globalThis as any).__runTests = runTests;
