'use strict'

var createDirectory = require('../lib/create-directory')
var should = require('should')

describe('directory » create', function () {
  describe('brand', function () {
    var brand = createDirectory(require('../lib/dir/brand.json'))

    it('prints name under detection', function () {
      const { data, output } = brand('mfc')
      data.should.be.equal('MFC')
      output.should.be.equal('')
    })

    it('undefined under non detection', function () {
      const { data, output } = brand('foobar')
      should(data).be.undefined()
      output.should.be.equal('foobar')
    })
  })

  describe('type', function () {
    var type = createDirectory(require('../lib/dir/box.json'))

    it('prints name under detection', function () {
      const { data, output } = type('power box')
      data.should.be.equal('Power Box')
      output.should.be.equal(' box')
    })

    it('undefined under non detection', function () {
      const { data, output } = type('foobar')
      should(data).be.undefined()
      output.should.be.equal('foobar')
    })
  })
})
