/* ==========================================================================
   # COMPONENTS
========================================================================== */

/**
 *
*/

/* Dependencies
========================================================================== */
var camel = require('to-camel-case')
var fs = require('fs')
var PATH = require('path')
var mkdirp = require('mkdirp')

/* Config Variables
========================================================================== */
var filesystem = require('../data/filesystem/main.json')
var componentsDirectoryObject = filesystem.children.find(function (child) {
  return child.name === 'components'
})
var dest = 'plugins/all-components.js'

/* Functions
========================================================================== */
// Create imports
function createImports (array) {
  var compiled = [
    'import Vue from \'vue\'' +
    '\n'
  ]
  for (var obj in array) {
    var current = array[obj]
    var startOfExtension = current.name.lastIndexOf('.')
    var nameWithoutExtension = current.name.substr(0, startOfExtension)
    var camelCaseComponent = camel(nameWithoutExtension)
    var string =
      'import ' + camelCaseComponent + ' from ' + '\'~/components/' + current.name + '\'' + '\n' +
      'import ' + camelCaseComponent + 'Example' + ' from ' + '\'~/components/' + current.name + '/example' + '\'' + '\n'
    compiled.push(string)
  }
  for (obj in array) {
    current = array[obj]
    startOfExtension = current.name.lastIndexOf('.')
    nameWithoutExtension = current.name.substr(0, startOfExtension)
    camelCaseComponent = camel(nameWithoutExtension)
    string =
      'Vue.component(\'' + nameWithoutExtension + '\', ' + camelCaseComponent + ')' + '\n' +
      'Vue.component(\'' + nameWithoutExtension + '-example' + '\', ' + camelCaseComponent + 'Example)' + '\n'
    compiled.push(string)
  }
  return compiled
}

function writeFile (path, contents, cb) {
  var getDirName = PATH.dirname
  mkdirp(getDirName(path), function (err) {
    if (err) {
      return cb(err)
    }
    fs.writeFile(path, contents, cb)
  })
}

/* On script run
========================================================================== */

var compiledArray = createImports(componentsDirectoryObject.children)
var joinTest = compiledArray.join('\n')

writeFile(dest, joinTest, 'utf-8', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
