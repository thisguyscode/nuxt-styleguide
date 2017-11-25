export default {
  data: () => {
    return {
      currentProgress: 0
    }
  },
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    computedValue: function () {
      if (this.value) {
        return this.value
      } else {
        return 'XYZ'
      }
    }
  }
}
