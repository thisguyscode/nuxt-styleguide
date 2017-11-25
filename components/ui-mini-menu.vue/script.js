export default {
  data: () => {
    return {
      open: false
    }
  },
  computed: {
    innerClass: function () {
      if (this.open) {
        return this.$style.inner_isOpen
      }
    }
  },
  methods: {
    handleTriggerClick: function () {
      this.toggleOpen()
    },
    toggleOpen: function () {
      this.open = !this.open
    }
  }
}
