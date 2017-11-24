export default {
  computed: {
    list: function () {
      var list = []
      this.$route.matched.forEach((item) => {
        if (!item.path.endsWith('/')) {
          var obj = Object.create(item)
          var start = obj.path.lastIndexOf('/') + 1
          var end = obj.path.length - 1
          var testString = obj.path.substr(start, end)
          if (testString === ':name') {
            obj.path = '/home/components/' + this.$route.params.name
            obj.type = 'file'
          } else if (testString === ':category') {
            obj.path = '/home/common/' + this.$route.params.category
            obj.type = 'folder'
          } else if (testString === ':file') {
            obj.path = '/home/common/' + this.$route.params.category + '/' + this.$route.params.file
            obj.type = 'file'
          }
          list.push(obj)
        }
      })
      return list
    }
  },
  methods: {
    itemIconName: function (item) {
      if (item.type === 'file') {
        return 'file-o'
      } else if (item.type === 'folder') {
        return 'folder-open-o'
      } else {
        return 'folder-open-o'
      }
    },
    isLast: function (index) {
      var list = this.list
      return index === list.length - 1
    },
    isFirst: function (index) {
      return index === 0
    },
    showName: function (item) {
      var name = ''
      if (item.customName) {
        name = item.customName
      } else {
        var path = item.path
        var start = path.lastIndexOf('/') + 1
        var end = path.length
        name = path.substr(start, end)
      }
      return name
    }
  }
}
