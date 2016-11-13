'use strict'

var directory = require('..')

describe('directory', function () {
  it('nothing to detect', function () {
    const { data } = directory('')
    data.should.be.eql({})
  })

  it('only detect brand', function () {
    const { data, output } = directory('mfc')
    data.should.be.eql({brand: 'MFC'})
    output.should.be.equal('')
  })

  it('only detect type', function () {
    const { data, output } = directory('power box')
    data.should.be.eql({type: 'Power Box'})
    output.should.be.equal(' box')
  })

  it('detect brand and type', function () {
    const { data, output } = directory('mfc power box')
    data.should.be.eql({brand: 'MFC', type: 'Power Box'})
    output.should.be.equal('  box')
  })
})
