/**
 * Check if a string is upper case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  if (typeof string !== 'string') {
    return
  }

  return locale
    ? string.toLocaleUpperCase(locale) === string && string.toLocaleLowerCase(locale) !== string
    : string.toUpperCase() === string && string.toLowerCase() !== string
}
