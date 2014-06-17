var requirein = require('../')
  , assert = require('assert')
  , path = require('path')
  , d = path.join(__dirname, 'sub1', 'sub2', 'sub3')
  ;

var request = requirein(d, 'request')

assert.ok(request.put)
assert.ok(request.get)
assert.equal(typeof request, 'function')
