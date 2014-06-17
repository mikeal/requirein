module.exports = function (where, name) {
  var Module = require('module').Module
  var mod_dir = require('path').join(where, 'node_modules')
  var m = Module._resolveFilename(name, {paths:[mod_dir]})
  return require(m)
}
