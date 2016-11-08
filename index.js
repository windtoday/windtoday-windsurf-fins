'use strict'

const createDirectory = require('./lib/create-directory')
const reduce = require('lodash.reduce')
const map = require('lodash.mapvalues')

const DIRECTORIES = map(require('req-all')('./lib/dir'), createDirectory)

function directory (str, opts) {
  return reduce(DIRECTORIES, function (acc, dir, name) {
    const { data, output } = dir(acc.output, opts)

    if (data) {
      acc.data[name] = data
      acc.output = output
    }

    return acc
  }, {data: {}, output: str})
}

module.exports = directory
