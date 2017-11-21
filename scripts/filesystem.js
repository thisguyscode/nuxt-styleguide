/* ==========================================================================
   # FILESYSTEM
========================================================================== */

/**
 * Converts the file system to a JSON object and applies some simple string
 * modifications.
 *
 * Currently only for the styles directory - mostly experimental
 * at this point.
*/

/* Dependencies
========================================================================== */
var dirTree = require('directory-tree')
var mkdirp = require('mkdirp')
var fs = require('fs')
var path = require('path')

/* Config Variables
========================================================================== */
var src = 'assets/styles'
var dest = 'data/fs/styles.json'
var tree = dirTree(src, {exclude: /TEMPLATE.scss/})
var getDirName = path.dirname

/* Functions
========================================================================== */
// Write a file to disk
function writeFile (path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) {
      return cb(err)
    }
    fs.writeFile(path, contents, cb)
  })
}
// Recursively remove the source from each obj.path in the directory
function removeDirectoryString (directoryObject, stringToRemove) {
  var obj = directoryObject.children
  for (var key in obj) {
    var current = obj[key]
    var trimmed = current.path.replace(`${stringToRemove}/`, '')
    current.path = trimmed
    if (current.children) {
      removeDirectoryString(current, stringToRemove)
    }
  }
  return directoryObject
}

/* On script run
========================================================================== */
// Remove src directory from paths
var formattedTree = removeDirectoryString(tree, src)
// Rename the root path
formattedTree.path = '/'
// Convert to JSON String
var stringified = JSON.stringify(formattedTree, null, 2)
// Write the JSON string to file
writeFile(dest, stringified, 'utf-8', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
