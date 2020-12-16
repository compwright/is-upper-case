# @compwright/is-upper-case

[![Build status][travis-image]][travis-url]
[![Dependency Status](https://img.shields.io/david/compwright/is-upper-case.svg?style=flat-square)](https://david-dm.org/compwright/is-upper-case)
[![Download Status](https://img.shields.io/npm/dm/@compwright/is-upper-case.svg?style=flat-square)](https://www.npmjs.com/package/@compwright/is-upper-case)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

Check if a string is upper case.

Forked from [blakeembrey/is-upper-case](https://github.com/blakeembrey/is-upper-case), with the following improvements:

* Removed unnecessary dependencies
* Added locale support

## Installation

```
npm install @compwright/is-upper-case --save
```

## Usage

```javascript
const isUpperCase = require('@compwright/is-upper-case')

isUpperCase('STRING') // true
isUpperCase('String') // false
isUpperCase('string') // false

// Returns undefined for non-strings
isUpperCase(null) // undefined
```

Locale support:

```javascript
isUpperCase('STRİNG', 'tr') // true
```

## Typings

Includes a [TypeScript definition](is-upper-case.d.ts).

## License

MIT

[travis-image]: https://img.shields.io/travis/compwright/is-upper-case.svg?style=flat
[travis-url]: https://travis-ci.org/compwright/is-upper-case
