/* ==========================================================================
   # COMPONENTS
========================================================================== */

/**
 * This script should generate a file which imports ALL local Vue components.
 * It currently does not do anything for node_modules (which would be nice.)
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
  // Start the array off with Vue import
  var compiled = [
    'import Vue from \'vue\'' +
    '\n'
  ]
  // Loop through the passed array
  for (var obj in array) {
    var current = array[obj]
    var startOfExtension = current.name.lastIndexOf('.')
    var nameWithoutExtension = current.name.substr(0, startOfExtension)
    var camelCaseComponent = camel(nameWithoutExtension)
    // Compose an import string for component and the example version
    var string =
      'import ' + camelCaseComponent + ' from ' + '\'~/components/' + current.name + '\'' + '\n' +
      'import ' + camelCaseComponent + 'Example' + ' from ' + '\'~/components/' + current.name + '/example' + '\'' + '\n'
    // Push that string to the local array variable
    compiled.push(string)
  }
  // Loop through again (Because the order of the strings is important in the final file)
  for (obj in array) {
    current = array[obj]
    startOfExtension = current.name.lastIndexOf('.')
    nameWithoutExtension = current.name.substr(0, startOfExtension)
    camelCaseComponent = camel(nameWithoutExtension)
    // Composes another string which registers / instantiates the component
    string =
      'Vue.component(\'' + nameWithoutExtension + '\', ' + camelCaseComponent + ')' + '\n' +
      'Vue.component(\'' + nameWithoutExtension + '-example' + '\', ' + camelCaseComponent + 'Example)' + '\n'
    // Push that string (should now be AFTER all the import scripts )
    compiled.push(string)
  }
  return compiled
}

// Check for directory and write to disk
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
var joinedArrays = compiledArray.join('\n')

writeFile(dest, joinedArrays, 'utf-8', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
