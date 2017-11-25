export default {
  mounted () {
    console.log(this.clickFunction)
  },
  props: {
    onClick: {
      type: Function,
      required: false
    },
    onClickArg: {
      required: false
    },
    iconName: {
      type: String,
      default: 'eye'
    },
    label: {
      type: String,
      default: '---'
    }
  },
  methods: {
    doNothing: function () {
      console.log('xyz')
    }
  },
  computed: {
    clickFunction: function () {
      if (this.onClick && this.onClickArg) {
        console.log('both')
        return this.onClick(this.onClickArg)
      } else if (this.onClick) {
        return this.onClick
      } else {
        return this.doNothing
      }
    }
  }
}
