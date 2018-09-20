/* global describe, it */
var assert = require('assert')
var isUpperCase = require('./')

describe('isUpperCase()', function () {
  describe('without locale', function () {
    it('should throw a TypeError if not a string', function () {
      assert.throws(isUpperCase.bind(null, 100))
    }, { name: 'TypeError' })

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
    it('should throw a TypeError if not a string', function () {
      assert.throws(isUpperCase.bind(null, 100, 'tr'))
    }, { name: 'TypeError' })

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
