'use strict'

const strmatch = require('str-match')()
const should = require('should')

const createDirectory = require('../lib/create-directory')
const brandDirectory = require('../lib/dir/brand.json')
const typeDirectory = require('../lib/dir/type.json')

describe('directory » create', function () {
  describe('brand', function () {
    const brand = createDirectory(brandDirectory, strmatch)

    it('prints name under detection', function () {
      const { data, output } = brand('mfc')
      should(data).be.equal('MFC')
      should(output).be.equal('')
    })

    it('undefined under non detection', function () {
      const { data, output } = brand('foobar')
      should(data).be.undefined()
      should(output).be.equal('foobar')
    })
  })

  describe('type', function () {
    const type = createDirectory(typeDirectory, strmatch)

    it('prints name under detection', function () {
      const { data, output } = type('power box')
      should(data).be.equal('Power Box')
      should(output).be.equal('')
    })

    it('undefined under non detection', function () {
      const { data, output } = type('foobar')
      should(data).be.undefined()
      should(output).be.equal('foobar')
    })
  })
})
