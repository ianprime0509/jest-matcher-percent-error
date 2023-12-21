# jest-matcher-percent-error

[![npm](https://img.shields.io/npm/v/jest-matcher-percent-error.svg)](https://www.npmjs.com/package/jest-matcher-percent-error)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/ianprime0509/jest-matcher-percent-error/ci.yml?branch=main)

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
import toBeWithinPercent from "jest-matcher-percent-error";

expect.extend({ toBeWithinPercent });

test("foo works", () => {
  expect(foo()).toBeWithinPercent(100, 10);
});
```

## License

This is free software, released under the
[Zero Clause BSD License](https://spdx.org/licenses/0BSD.html), as found in the
`LICENSE` file of this repository. This license places no restrictions on your
use, modification, or redistribution of the library: providing attribution is
appreciated, but not required.
