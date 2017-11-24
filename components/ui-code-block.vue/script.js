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
    }
  },
  methods: {
    lineCount: function (content) {
      return content.split(/\r\n|\r|\n/).length
    }
  },
  props: {
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
