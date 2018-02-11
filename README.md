# jest-matcher-percent-error

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
