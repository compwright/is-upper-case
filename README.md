# @compwright/is-upper-case

[![Build status][travis-image]][travis-url]

Check if a string is uppercase.

## Installation

```
npm install @compwright/is-upper-case --save
```

## Usage

```javascript
const isUpperCase = require('is-upper-case')

isUpperCase('STRING') // true
isUpperCase('String') // false
isUpperCase('string') // false

// Returns undefined for non-strings
isUpperCase(null) // undefined
```

Locale support:

```javascript
const isUpperCase = require('is-upper-case')

isUpperCase('STRİNG', 'tr') // true
```

## Typings

Includes a [TypeScript definition](is-upper-case.d.ts).

## License

MIT

[travis-image]: https://img.shields.io/travis/compwright/is-upper-case.svg?style=flat
[travis-url]: https://travis-ci.org/compwright/is-upper-case
