'use strict'

const regexWordBoundary = require('regex-word-boundary')
const strmatch = require('str-match')()
const find = require('lodash.find')
const get = require('lodash.get')

function createDirectory (dir) {
  function directory (str, opts) {
    let matcher

    let data = find(dir, function (item) {
      const pattern = item.regex
      const regex = regexWordBoundary(pattern, opts)
      matcher = strmatch(str, regex)
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
