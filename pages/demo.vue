<template>
  <section :class="$style.base">
    <ui-demo/>
    <ui-code :code="code"/>
  </section>
</template>

<script>
import uiDemo from '~/components/ui-demo'
import uiCode from '~/components/ui-code'
export default {
  components: {
    uiDemo,
    uiCode
  },
  computed: {
    code: function () {
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return require('!raw-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss')
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */


/* Base class
========================================================================== */
.base {
}

</style>
