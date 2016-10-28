'use strict'

var find = require('lodash.find')
var get = require('lodash.get')
var regex = require('./regex')

function createDirectory (data) {
  function directory (str, opts) {
    var result = find(data, function (item) {
      var pattern = item.regex
      return regex(pattern, str, opts)
    })

    return get(result, 'name')
  }

  return directory
}

module.exports = createDirectory
