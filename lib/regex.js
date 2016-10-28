'use strict'

function regex (pattern, str, opts) {
  opts = opts || 'i'
  return RegExp(pattern, opts).test(str)
}

module.exports = regex
