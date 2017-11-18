<template>
  <section :class="$style.root">
    <ui-a/>
    <ui-b/>
    <ui-c/>
  </section>
</template>

<script>
import uiA from '~/components/ui-a'
import uiB from '~/components/ui-b'
import uiC from '~/components/ui-c'
export default {
  components: {
    uiA,
    uiB,
    uiC
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
// NONE


/* Root class
========================================================================== */
.root {
}

</style>
