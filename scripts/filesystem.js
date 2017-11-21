/* ==========================================================================
   # FILESYSTEM
========================================================================== */

/**
 * Converts configured directories to a custom formatted JSON for use
 * in the app.
 *
 * A little experimental at the moment
*/

/* Dependencies
========================================================================== */
var dirTree = require('directory-tree')
var mkdirp = require('mkdirp')
var fs = require('fs')
var PATH = require('path')

/* Config Variables
========================================================================== */
var styles = {
  src: 'assets/styles',
  exclude: /TEMPLATE.scss/
}
var components = {
  src: 'components',
  exclude: /TEMPLATE.scss/
}
var dest = 'data/fs/main.json'

/* Functions
========================================================================== */
// Write a file to disk
function writeFile (path, contents, cb) {
  var getDirName = PATH.dirname
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
// Compile styles tree
var stylesTree = dirTree(styles.src, {exclude: styles.exclude})
var stylesFormatted = removeDirectoryString(stylesTree, styles.src)
stylesFormatted.path = 'common'

// Compile components tree
var componentsTree = dirTree(components.src, {exclude: components.exclude})
var componentsFormatted = componentsTree
componentsFormatted.path = 'components'

// Merge objects
var merged = []
merged.push(stylesFormatted, componentsFormatted)

// Write the JSON string to file
var stringified = JSON.stringify(merged, null, 2)
writeFile(dest, stringified, 'utf-8', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
