import equal from 'fast-deep-equal/es6';
import { JsError } from '../boot/errors';

type Throwable = new (...args: any[]) => any;

export class Assert {
  private results: (AssertResult | FailedAssert)[];

  constructor(results: AssertResult[]) {
    this.results = results;
  }

  private success(message: string) {
    this.results.push({ success: true, message: message });
  }

  private failure(message: string, failure: string, error?: JsError) {
    this.results.push({
      success: false,
      message: message,
      failure: failure,
      error: error,
    });
  }

  equal<A, E>(actual: A, expected: E, message: string): void {
    // Deep equality from fast-deep-equal
    if (equal(actual, expected)) {
      this.success(message);
    } else {
      // TODO long arrays and objects may need some special handling...
      this.failure(message, `${actual} is not ${expected}`);
    }
  }

  eq<A, E>(actual: A, expected: E, message: string): void {
    this.equal(actual, expected, message);
  }

  notEqual<A, E>(actual: A, expected: E, message: string): void {
    // Deep equality from fast-deep-equal
    if (!equal(actual, expected)) {
      this.success(message);
    } else {
      // TODO long arrays and objects may need some special handling...
      this.failure(message, `${expected} is ${actual}`);
    }
  }

  notEq<A, E>(actual: A, expected: E, message: string): void {
    this.notEqual(actual, expected, message);
  }

  is<A, E>(actual: A, expected: E, message: string): void {
    if (Object.is(actual, expected)) {
      this.success(message);
    } else {
      this.failure(message, `${expected} is not exactly ${actual}`);
    }
  }

  isNot<A, E>(actual: A, expected: E, message: string): void {
    if (!Object.is(actual, expected)) {
      this.success(message);
    } else {
      this.failure(message, `${expected} is exactly ${actual}`);
    }
  }

  truthy(actual: unknown, message: string): void {
    if (actual) {
      this.success(message);
    } else {
      this.failure(message, `${actual} is not truthy`);
    }
  }

  falsy(actual: unknown, message: string): void {
    if (!actual) {
      this.success(message);
    } else {
      this.failure(message, `${actual} is not falsy`);
    }
  }

  throws(func: () => void, expected: Throwable, message: string): void {
    const error = __interop.catchError(func);
    if (error) {
      // Java classes won't have name property like JS classes/constructors
      const expectedName = Java.typeName(expected) ?? expected.name;
      if (error.name == expectedName) {
        this.success(message);
      } else {
        this.failure(
          message,
          `${error.name} thrown instead of ${expected.name}`,
          error,
        );
      }
    } else {
      this.failure(message, 'no error thrown');
    }
  }

  doesNotThrow(func: () => void, message: string): void {
    const error = __interop.catchError(func);
    if (!error) {
      this.success(message);
    } else {
      this.failure(message, `${error.name} thrown`, error);
    }
  }
}

export interface AssertResult {
  /**
   * If the assertion was true.
   */
  success: boolean;

  /**
   * Message defined by the assertion.
   */
  message: string;
}

export interface FailedAssert extends AssertResult {
  success: false;

  /**
   * What exactly failed; this is printed out in reports.
   */
  failure: string;

  /**
   * Line number where this failure occurred.
   */
  line: number;

  /**
   * The error that was thrown.
   */
  error?: JsError;
}
