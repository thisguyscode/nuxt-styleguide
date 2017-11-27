var paths = []

function get (directoryObject) {
  var children = directoryObject.children
  for (var key in children) {
    var current = children[key]
    paths.push('/styleguide/' + current.path)
    if (current.children) {
      getPaths(current)
    }
  }
}

const getPaths = (directoryObject) => {
  get(directoryObject)
  var newArray = paths
  return newArray
}

module.exports = getPaths
