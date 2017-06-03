'use strict'

const createStrmatch = require('str-match')
const reduce = require('lodash.reduce')
const map = require('lodash.mapvalues')

const createDirectory = require('./lib/create-directory')
const dirs = require('req-all')('./lib/dir')

function directory (str, opts = {}) {
  const {strmatchOpts} = opts
  const strmatch = createStrmatch(strmatchOpts)
  const directories = map(dirs, dir => createDirectory(dir, strmatch))

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
