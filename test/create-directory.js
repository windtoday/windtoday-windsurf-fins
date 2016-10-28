'use strict'

var createDirectory = require('../lib/create-directory')
var should = require('should')

describe('directory » create', function () {
  describe('brand', function () {
    var brand = createDirectory(require('../lib/dir/brand.json'))

    it('prints name under detection', function () {
      brand('mfc').should.be.equal('MFC')
    })

    it('null under non detection', function () {
      should(brand('')).be.undefined()
    })
  })

  describe('type', function () {
    var type = createDirectory(require('../lib/dir/type.json'))

    it('prints name under detection', function () {
      type('power box').should.be.equal('Power Box')
    })

    it('null under non detection', function () {
      should(type('')).be.undefined()
    })
  })
})
