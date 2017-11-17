<template>
  <section :class="$style.base">
    <uiDemo/>
  </section>
</template>

<script>
import uiDemo from '~/components/ui-demo.vue'

export default {
  components: {
    uiDemo
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value c-test "sass-loader!~/assets/styles/test.scss";



/* Base class
========================================================================== */
.base {
  composes: o-box o-box--huge from c-test;
}

</style>
