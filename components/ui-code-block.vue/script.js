import hljs from '~/utils/highlightLanguages.js'
export default {
  data: () => {
    return {
      content: 'loading code'
    }
  },
  computed: {
    highlightedCode: function () {
      return hljs.highlightAuto(this.code, this.languages).value
    },
    rootClass: function () {
      var array = []
      if (this.rounded === 'all') {
        array.push(this.$style.root_rounded)
      } else if (this.rounded === 'bottom') {
        array.push(this.$style.root_roundedBottomOnly)
      }
      return array
    }
  },
  methods: {
    lineCount: function (content) {
      return content.split(/\r\n|\r|\n/).length
    }
  },
  props: {
    rounded: {
      type: String,
      default: 'all'
    },
    languages: {
      type: Array,
      default: function () {
        return ['html', 'scss', 'css', 'javascript', 'json']
      }
    },
    code: {
      required: true
    }
  }
}
