'use strict'

var directory = require('..')

describe('directory', function () {
  it('nothing to detect', function () {
    directory('').should.be.eql({})
  })

  it('only detect brand', function () {
    directory('mfc').should.be.eql({
      brand: 'MFC'
    })
  })

  it('only detect type', function () {
    directory('power box').should.be.eql({
      type: 'Power Box'
    })
  })

  it('detect brand and type', function () {
    directory('mfc power box').should.be.eql({
      brand: 'MFC',
      type: 'Power Box'
    })
  })
})
