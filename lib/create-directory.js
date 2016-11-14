'use strict'

const strmatch = require('str-match')()
const find = require('lodash.find')
const get = require('lodash.get')
const regex = require('./regex')

function createDirectory (dir) {
  function directory (str, opts) {
    let matcher

    let data = find(dir, function (item) {
      const pattern = item.regex
      const re = regex(pattern, opts)
      matcher = strmatch(str, re)
      return matcher.test
    })

    return {
      data: get(data, 'name'),
      output: matcher.output
    }
  }

  return directory
}

module.exports = createDirectory
