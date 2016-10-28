'use strict'

var reduce = require('lodash.reduce')
var map = require('lodash.mapvalues')
var createDirectory = require('./lib/create-directory')
var DIRECTORIES = map(require('req-all')('./lib/dir'), createDirectory)

function directory (str, opts) {
  return reduce(DIRECTORIES, function (acc, directoryFn, directory) {
    var detection = directoryFn(str, opts)
    if (detection) acc[directory] = detection
    return acc
  }, {})
}

module.exports = directory
