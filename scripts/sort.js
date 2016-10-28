'use strict'

var directories = require('req-all')('../lib/dir')
var jsonFuture = require('json-future')
var lodash = require('lodash')
var path = require('path')

lodash.forEach(directories, function (directory, filename) {
  var sortedDirectory = lodash.sortBy(directory, 'name')
  var filepath = path.resolve('lib/dir', filename + '.json')
  jsonFuture.save(filepath, sortedDirectory)
})
