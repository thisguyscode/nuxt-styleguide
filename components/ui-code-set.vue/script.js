export default {
  data: () => {
    return {
      selected: 0,
      showCode: true
    }
  },
  props: {
    codeSet: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleCode: function () {
      this.showCode = !this.showCode
    },
    handleNavItemClick: function () {
      if (!this.showCode) {
        this.showCode = true
      }
    }
  },
  computed: {
    selectedCode: function () {
      var selected = this.codeSet[this.selected]
      return selected
    }
  }
}
