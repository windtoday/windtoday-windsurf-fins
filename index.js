'use strict'

const createStrmatch = require('str-match')
const reduce = require('lodash.reduce')
const map = require('lodash.mapvalues')
const omit = require('lodash.omit')

const createDirectory = require('./lib/create-directory')
const dirs = require('req-all')('./lib/dir')

const DEFAULT_OPTS = {
  findType: true
}

const getOpts = opts => Object.assign({}, DEFAULT_OPTS, opts)

function getDirectories (dirs, strmatch, opts) {
  const {findType} = opts
  const collection = findType ? dirs : omit(dirs, ['type'])
  return map(collection, dir => createDirectory(dir, strmatch))
}

function directory (str, opts = {}) {
  const {strmatchOpts, findType} = getOpts(opts)
  const strmatch = createStrmatch(strmatchOpts)
  const directories = getDirectories(dirs, strmatch, {findType})

  return reduce(directories, function (acc, directory, name) {
    const { data, output } = directory(acc.output)

    if (data) {
      acc.data[name] = data
      acc.output = output
    }

    return acc
  }, {data: {}, output: str})
}

module.exports = directory
