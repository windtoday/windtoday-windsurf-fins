'use strict'

const regexWordBoundary = require('regex-word-boundary')
const find = require('lodash.find')
const get = require('lodash.get')

function createDirectory (dir, strmatch) {
  function directory (str) {
    let matcher

    const data = find(dir, function (item) {
      const pattern = item.regex
      const regex = regexWordBoundary(pattern)
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
