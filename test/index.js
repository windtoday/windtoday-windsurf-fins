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

  it('only detect box', function () {
    directory('power box').should.be.eql({
      box: 'Power Box'
    })
  })

  it('detect brand and box', function () {
    directory('mfc power box').should.be.eql({
      brand: 'MFC',
      box: 'Power Box'
    })
  })
})
