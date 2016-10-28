'use strict'

var directories = require('req-all')('../lib/dir')
var isEqual = require('json-is-equal')
var format = require('util').format
var lodash = require('lodash')

lodash.forEach(directories, function (directory, filename) {
  var sortedDirectory = lodash.sortBy(directory, 'name')

  if (!isEqual(directory, sortedDirectory)) {
    console.log(sortedDirectory)
    var message = format("File '%s' is not sorted", filename)
    throw new Error(message)
  }
})
