<template>
<div :class="$style.root">
  
  <code :class="$style.code">
    <pre :class="$style.pre" v-html="highlightedCode"></pre>
  </code>

</div>
</template>

<script>
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
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-code "sass-loader!~/assets/styles/objects/objects.code.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";

// @value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";


/* Root class
========================================================================== */
.root {
  composes: neutral-10  from c-background-color;
}




/* Code classes
========================================================================== */
.code {
  composes: box  from o-box;
  composes: code  from o-code;
}

.pre {
  //
}
</style>


<style lang="scss">

/* Syntax Highlighting
======================================================================== */
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
