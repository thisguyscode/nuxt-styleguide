<template>
  <section>
    <h1 :class="$style.heading">{{ $route.params.name }}</h1>
    <section>
      
      <form>
        <input selected type="radio" id="template" value="template" v-model="selectedCode" name="selectedCode">
        <label for="template">Template</label>

        <input type="radio" id="script" value="script" v-model="selectedCode" name="selectedCode">
        <label for="script">Script</label>

        <input type="radio" id="style" value="style" v-model="selectedCode" name="selectedCode">
        <label for="style">Style</label>

      </form>

      <ui-code-block :code="code" :languages="codeLanguages"/>
      <ui-a></ui-a>
    </section>
  </section>
</template>

<script>
import uiCodeBlock from '~/components/ui-code-block'
import uiA from '~/components/ui-a.vue'
export default {
  mounted () {
    console.log(uiCodeBlock)
  },
  data: () => {
    return {
      selectedCode: 'template',
      codeLanguage: ['xml']
    }
  },
  components: {
    uiA,
    uiCodeBlock
  },
  computed: {
    templateCode: function () {
      return require(`!raw-loader!~/components/${this.$route.params.name}/template.html`)
    },
    scriptCode: function () {
      return require(`!raw-loader!~/components/${this.$route.params.name}/script.js`)
    },
    styleCode: function () {
      return require(`!raw-loader!~/components/${this.$route.params.name}/style.scss`)
    },
    code: function () {
      if (this.selectedCode === 'template') {
        this.codeLanguages = ['xml']
        return this.templateCode
      } else if (this.selectedCode === 'script') {
        this.codeLanguages = ['js']
        return this.scriptCode
      } else if (this.selectedCode === 'style') {
        this.codeLanguages = ['css']
        return this.styleCode
      }
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";

// @value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";





/* Heading
========================================================================== */
.heading {
  composes: heading heading--alpha  from o-heading;
}


</style>
