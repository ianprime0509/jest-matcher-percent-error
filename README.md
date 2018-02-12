# jest-matcher-percent-error

[![npm](https://img.shields.io/npm/v/jest-matcher-percent-error.svg)]()
[![Travis](https://img.shields.io/travis/ianprime0509/jest-matcher-percent-error.svg)]()

This is a simple matcher for [Jest](https://facebook.github.io/jest) that tests
whether the actual value matches the expected value, within some specified
percent error.

## Installation

With npm:

```shell
$ npm install --save-dev jest-matcher-percent-error
```

## Usage

To test whether the result of `foo()` is within 10% of 100:

```javascript
import toBeWithinPercent from 'jest-matcher-percent-error';

expect.extend({ toBeWithinPercent });

test('foo works', () => {
  expect(foo()).toBeWithinPercent(100, 10);
});
```

## License

This is free software, distributed under the [MIT
license](https://opensource.org/licenses/MIT).
