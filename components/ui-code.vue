<template>
  <section :class="$style.base">
    <pre><code :class="$style.code" v-html="content">
    </code></pre>
    <span ref="slotWrapper">
      <slot></slot>
    </span>
  </section>
</template>


<script>
import hljs from '~/utils/highlightLanguages.js'
export default {
  data: () => {
    return {
      content: 'loading code',
      lineCount: 0
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
      required: false
    },
    filename: {
      type: String,
      required: false
    }
  },
  computed: {
    preComputedCode: function () {
      return hljs.highlightAuto(this.code, this.languages).value
    }
  },
  methods: {
    getLineCount: function (content) {
      return content.split(/\r\n|\r|\n/).length
    },
    removeExtraIndent: function (content) {
      var lines = content.split('\n')
      if (lines[0] === '') {
        lines.shift()
      }
      var matches
      var indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null
      if (indentation) {
        lines = lines.map(function (line) {
          line = line.replace(indentation, '')
          return line.replace(/\t/g, '    ')
        })
        content = lines.join('\n').trim()
      }
      return content
    },
    setContentFromSlot: function () {
      var rawContent
      this.$slots.default.forEach(vnode => {
        if (vnode.tag === 'pre') {
          var preContent = vnode.elm.innerHTML
          rawContent = this.removeExtraIndent(preContent)
        } else {
          rawContent = this.$refs.slotWrapper.innerHTML
        }
      })
      var content = rawContent.toString()
      var highlightedCode = hljs.highlightAuto(content, this.languages).value
      return highlightedCode
    }
  },
  mounted () {
    if (this.code) {
      this.content = this.preComputedCode
    } else if (this.$slots.default.length > 0) {
      this.content = this.setContentFromSlot()
    }
    this.lineCount = this.getLineCount(this.content)
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-code "sass-loader!~/assets/styles/objects/_objects.code.scss";
@value o-box "sass-loader!~/assets/styles/objects/_objects.box.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/_cosmetics.background-color.scss";



/* Base class
========================================================================== */
.base {
  composes: dark  from c-background-color;
  composes: box box--lg  from o-box
}




/* Child classes
========================================================================== */
.code {
  composes: code  from o-code
}

</style>


<style lang="scss">

/* Syntax highlighting
========================================================================== */

.hljs-keyword,
.hljs-literal,
.hljs-symbol,
.hljs-name {
  color: #569CD6;
}

.hljs-link {
  color: #569CD6;
  text-decoration: underline;
}

.hljs-built_in,
.hljs-type {
  color: #4EC9B0;
}

.hljs-number,
.hljs-class {
  color: #B8D7A3;
}

.hljs-string,
.hljs-meta-string {
  color: #D69D85;
}

.hljs-regexp,
.hljs-template-tag {
  color: #9A5334;
}

.hljs-subst,
.hljs-function,
.hljs-title,
.hljs-params,
.hljs-formula {
  color: #DCDCDC;
}

.hljs-comment,
.hljs-quote {
  color: #57A64A;
  // font-style: italic;
}

.hljs-doctag {
  color: #608B4E;
}

.hljs-meta,
.hljs-meta-keyword,
.hljs-tag {
  color: #9B9B9B;
}

.hljs-variable,
.hljs-template-variable {
  color: #BD63C5;
}

.hljs-attr,
.hljs-attribute,
.hljs-builtin-name {
  color: #9CDCFE;
}

.hljs-section {
  color: gold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-bullet,
.hljs-selector-tag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #D7BA7D;
}

.hljs-addition {
  background-color: #144212;
  display: inline-block;
  width: 100%;
}

.hljs-deletion {
  background-color: #600;
  display: inline-block;
  width: 100%;
}

</style>
