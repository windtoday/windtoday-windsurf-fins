'use strict'

const reduce = require('lodash.reduce')
const map = require('lodash.mapvalues')
const createDirectory = require('./lib/create-directory')
const DIRECTORIES = map(require('req-all')('./lib/dir'), createDirectory)

function directory (str, opts) {
  return reduce(DIRECTORIES, function (acc, directoryFn, directory) {
    const detection = directoryFn(str, opts)
    if (detection) acc[directory] = detection
    return acc
  }, {})
}

module.exports = directory
