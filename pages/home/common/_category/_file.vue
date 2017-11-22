<template>
  <section>
    <h1 :class="$style.heading">{{ $route.params.file }}</h1>
    <ui-code-block :code="code" :languages="['scss', 'js']"/>
  </section>
</template>

<script>
import uiCodeBlock from '~/components/ui-code-block'
export default {
  components: {
    uiCodeBlock
  },
  computed: {
    code: function () {
      return require(`!raw-loader!~/assets/styles/${this.$route.params.category}/${this.$route.params.file}`)
    }
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";


/* Root class
========================================================================== */
.root {
  //
}



/* ContentArea
========================================================================== */

  .heading {
    composes: heading heading--alpha  from o-heading;
  }

</style>

