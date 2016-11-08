'use strict'

const find = require('lodash.find')
const get = require('lodash.get')
const regex = require('./regex')

function createDirectory (data) {
  function directory (str, opts) {
    const result = find(data, function (item) {
      const pattern = item.regex
      return regex(pattern, str, opts)
    })

    return get(result, 'name')
  }

  return directory
}

module.exports = createDirectory
