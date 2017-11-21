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
  exclude: /TEMPLATE.scss/,
  newName: 'common'
}
var components = {
  src: 'components',
  exclude: /README.md/
}
var dest = 'data/filesystem/main.json'

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
function replaceDirectoryString (directoryObject, stringToReplace, newString) {
  var obj = directoryObject.children
  for (var key in obj) {
    var current = obj[key]
    var trimmed = current.path.replace(`${stringToReplace}`, `${newString}`)
    console.log(trimmed)
    current.path = trimmed
    // console.log(current.path)
    if (current.children) {
      replaceDirectoryString(current, stringToReplace, newString)
    }
  }
  return directoryObject
}

/* On script run
========================================================================== */
// Compile styles tree
var stylesTree = dirTree(styles.src, {exclude: styles.exclude})
var stylesFormatted = replaceDirectoryString(stylesTree, styles.src, styles.newName)
if (styles.newName) {
  stylesFormatted.path = styles.newName
  stylesFormatted.name = styles.newName
}

// Compile components tree
var componentsTree = dirTree(components.src, {exclude: components.exclude})
var componentsFormatted = componentsTree
if (components.newName) {
  componentsFormatted.path = components.newName
  componentsFormatted.name = components.newName
}

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
