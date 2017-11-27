import uiDirectoryItem from '~/components/ui-directory-item.vue'
export default {
  mounted () {
    // console.log(this.$route.path)
    // console.log(this.model.path)
  },
  name: 'ui-directory-item',
  data: function () {
    return {
      open: false
    }
  },
  components: {
    uiDirectoryItem
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  computed: {
    dirPrefix: function () {
      return '/styleguide/'
    },
    linkTo: function () {
      return this.dirPrefix + this.model.path
    },
    itemClass: function () {
      var array = []
      if (this.$route.path === this.dirPrefix + this.model.path) {
        array.push(this.$style.item_isActive)
      }
      if (this.open) {
        array.push(this.$style.item_isOpen)
      }
      return array
    },
    toggleClass: function () {
      if (!this.itemIsFolder) {
        return this.$style.toggle_isDisabled
      }
    },
    toggleTabIndex: function () {
      if (this.itemIsFolder && !this.itemIsActive) {
        return 0
      } else {
        return -1
      }
    },
    itemIsFolder: function () {
      if (this.model.path.endsWith('.vue')) {
        return false
      } else {
        return this.model.children && this.model.children.length
      }
    },
    itemIsActive: function () {
      return this.$route.path === this.dirPrefix + this.model.path
    }
  },
  methods: {
    toggle: function () {
      if (this.itemIsFolder) {
        this.open = !this.open
      }
    },
    toggleClickHandler: function () {
      this.toggle()
    },
    toggleEnterHandler: function () {
      this.toggle()
    }
  }
}
