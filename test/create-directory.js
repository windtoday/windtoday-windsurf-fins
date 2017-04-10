'use strict'

const createDirectory = require('../lib/create-directory')
const should = require('should')

describe('directory » create', function () {
  describe('brand', function () {
    const brand = createDirectory(require('../lib/dir/brand.json'))

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
    const type = createDirectory(require('../lib/dir/type.json'))

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
