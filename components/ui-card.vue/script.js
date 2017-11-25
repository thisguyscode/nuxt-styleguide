export default {
  props: {
    contrast: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    rootClass: function () {
      var array = []
      if (this.contrast === 'heavy') {
        array.push(this.$style.root_contrastHeavy)
      } else if (this.contrast === 'light') {
        array.push(this.$style.root_contrastLight)
      } else {
        array.push(this.$style.root_contrastNormal)
      }
      return array
    }
  }
}
