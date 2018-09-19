/* global describe, it */
var assert = require('assert')
var isUpperCase = require('./')

describe('isUpperCase()', function () {
  describe('without locale', function () {
    it('should return undefined if not a string', function () {
      assert.strictEqual(isUpperCase(), undefined)
      assert.strictEqual(isUpperCase(1.0), undefined)
      assert.strictEqual(isUpperCase(0), undefined)
      assert.strictEqual(isUpperCase(true), undefined)
      assert.strictEqual(isUpperCase(false), undefined)
      assert.strictEqual(isUpperCase(null), undefined)
      assert.strictEqual(isUpperCase([]), undefined)
      assert.strictEqual(isUpperCase({}), undefined)
    })

    it('should return true when the string is upper case', function () {
      assert.strictEqual(isUpperCase('TEST'), true)
    })

    it('should return false when the string is mixed case', function () {
      assert.strictEqual(isUpperCase('test'), false)
      assert.strictEqual(isUpperCase('Test'), false)
    })

    it('should handle false positives and return false', function () {
      assert.strictEqual(isUpperCase('1'), false)
      assert.strictEqual(isUpperCase(''), false)
    })
  })

  describe('with locale', function () {
    it('should return undefined if not a string', function () {
      assert.strictEqual(isUpperCase(undefined, 'tr'), undefined)
      assert.strictEqual(isUpperCase(1.0, 'tr'), undefined)
      assert.strictEqual(isUpperCase(0, 'tr'), undefined)
      assert.strictEqual(isUpperCase(true, 'tr'), undefined)
      assert.strictEqual(isUpperCase(false, 'tr'), undefined)
      assert.strictEqual(isUpperCase(null, 'tr'), undefined)
      assert.strictEqual(isUpperCase([], 'tr'), undefined)
      assert.strictEqual(isUpperCase({}, 'tr'), undefined)
    })

    it('should return true when the string is upper case', function () {
      assert.strictEqual(isUpperCase('STRİNG', 'tr'), true)
    })

    it('should return false when the string is mixed case', function () {
      assert.strictEqual(isUpperCase('testi̇', 'tr'), false)
      assert.strictEqual(isUpperCase('Testi̇', 'tr'), false)
    })

    it('should handle false positives and return false', function () {
      assert.strictEqual(isUpperCase('1', 'tr'), false)
      assert.strictEqual(isUpperCase('', 'tr'), false)
    })
  })
})
