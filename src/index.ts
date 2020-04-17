/*
 * Copyright 2018-2020 Ian Johnson
 *
 * This is free software, distributed under the MIT license.  A copy of the
 * license can be found in the LICENSE file in the project root, or at
 * https://opensource.org/licenses/MIT.
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      /**
       * Ensures that the actual value is within some percent error of the expected value.
       *
       * @param expected - the expected value
       * @param percent - the maximum percent error to tolerate
       */
      toBeWithinPercent(expected: number, percent: number): R;
    }
  }
}

/**
 * Returns the percent error of the given actual value, relative to the given
 * expected value.
 */
function percentError(actual: number, expected: number): number {
  return (100 * Math.abs(actual - expected)) / expected;
}

/**
 * Checks whether the actual value is within the given percent error of the
 * expected value.
 *
 * The percent error check is inclusive.
 */
export default function toBeWithinPercent(
  this: jest.MatcherUtils,
  actual: number,
  expected: number,
  percent: number
): { message: () => string; pass: boolean } {
  const secondArgument = 'percent';
  this.utils.ensureNumbers(actual, expected, '.toBeWithinPercent');

  // If the expected value is zero, we'll be dividing by zero in the
  // percentError function
  if (expected === 0) {
    throw new Error(
      this.utils.matcherHint('[.not].toBeWithinPercent', undefined, undefined, {
        secondArgument,
      }) +
        '\n\n' +
        'Expected value cannot be zero.'
    );
  }

  const error = percentError(actual, expected);
  if (error <= percent) {
    return {
      message: (): string =>
        this.utils.matcherHint('.not.toBeWithinPercent', undefined, undefined, {
          secondArgument,
        }) +
        '\n\n' +
        `Expected value not to be within ${this.utils.printExpected(
          percent
        )}% of:\n` +
        `  ${this.utils.printExpected(expected)}\n` +
        'Received:\n' +
        `  ${this.utils.printReceived(actual)} (${this.utils.printReceived(
          error
        )}% error)`,
      pass: true,
    };
  } else {
    return {
      message: (): string =>
        this.utils.matcherHint('.toBeWithinPercent', undefined, undefined, {
          secondArgument,
        }) +
        '\n\n' +
        `Expected value to be within ${this.utils.printExpected(
          percent
        )}% of:\n` +
        `  ${this.utils.printExpected(expected)}\n` +
        'Received:\n' +
        `  ${this.utils.printReceived(actual)} (${this.utils.printReceived(
          error
        )}% error)`,
      pass: false,
    };
  }
}
