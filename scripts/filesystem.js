var dirTree = require('directory-tree')
var mkdirp = require('mkdirp')
var fs = require('fs')
var getDirName = require('path').dirname

var tree = dirTree('assets/styles', {exclude: /TEMPLATE.scss/})

function writeFile (path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) {
      return cb(err)
    }
    fs.writeFile(path, contents, cb)
  })
}

writeFile('./data/fs/styles.json', JSON.stringify(tree, null, 2), 'utf-8', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('The file was saved!')
})
