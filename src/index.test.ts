/*
 * Copyright 2018-2020 Ian Johnson
 *
 * This is free software, distributed under the MIT license.  A copy of the
 * license can be found in the LICENSE file in the project root, or at
 * https://opensource.org/licenses/MIT.
 */
import toBeWithinPercent from '.';

expect.extend({ toBeWithinPercent });

describe('.toBeWithinPercent()', () => {
  test('correctly identifies passing cases', () => {
    expect(5).toBeWithinPercent(5, 1);
    expect(110).toBeWithinPercent(100, 10);
    expect(105).toBeWithinPercent(101, 5);
    expect(-10).toBeWithinPercent(-15, 60);
    expect(1).toBeWithinPercent(1, 0);
    expect(0).toBeWithinPercent(5, 150);
  });

  test('correctly identifies failing cases', () => {
    expect(5).not.toBeWithinPercent(1, 100);
    expect(-1).not.toBeWithinPercent(2, 50);
  });

  test('fails when the expected value is zero', () => {
    expect(() => expect(5).toBeWithinPercent(0, 100)).toThrow();
  });

  test('fails when the actual or expected value is not a number', () => {
    expect(() => expect('hi').toBeWithinPercent(5, 50)).toThrow();
    expect(() =>
      expect(6).toBeWithinPercent(([6] as unknown) as number, 90)
    ).toThrow();
    expect(() =>
      expect({}).toBeWithinPercent(([] as unknown) as number, 1)
    ).toThrow();
  });
});
