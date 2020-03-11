/*
 * Copyright 2018-2020 Ian Johnson
 *
 * This is free software, distributed under the MIT license.  A copy of the
 * license can be found in the LICENSE file in the project root, or at
 * https://opensource.org/licenses/MIT.
 */
/**
 * Check whether the actual value is within the given percent error of the
 * expected value.
 *
 * The percent error check is inclusive.
 *
 * @param {number} actual
 * @param {number} expected
 * @param {number} percent
 * @return {{message: (function(): string), pass: boolean}}
 */
export default function toBeWithinPercent(actual, expected, percent) {
  const secondArgument = 'percent';
  this.utils.ensureNumbers(actual, expected, '.toBeWithinPercent');

  // If the expected value is zero, we'll be dividing by zero in the
  // percentError function.
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
      message: () =>
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
      message: () =>
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

/**
 * Return the percent error of the given actual value, relative to the given
 * expected value.
 */
function percentError(actual, expected) {
  return (100 * Math.abs(actual - expected)) / expected;
}
