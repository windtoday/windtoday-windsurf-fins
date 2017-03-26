'use strict'

const directory = require('..')
const should = require('should')

describe('directory', function () {
  it('under non detection, output is the string input', function () {
    const result = directory('foo')
    should(result).be.eql({
      data: {},
      output: 'foo'
    })
  })

  it('only detect brand', function () {
    const result = directory('mfc')
    should(result).be.eql({
      data: { brand: 'MFC' },
      output: ''
    })
  })

  it('only detect type', function () {
    const result = directory('power box')
    should(result).be.eql({
      data: { type: 'Power Box' },
      output: ' box'
    })
  })

  it('detect brand and type', function () {
    const result = directory('mfc power box')
    should(result).be.eql({
      data: { brand: 'MFC', type: 'Power Box' },
      output: '  box'
    })
  })
})
