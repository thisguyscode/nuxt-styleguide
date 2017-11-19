<template>
  <section :class="$style.root">
    <ui-collapsable-item
      v-for="folder in system.folders"
      :trigger="folder.name"
      :items="folder.files"
      :key="folder.id" />
  </section>
</template>

<script>
import uiCollapsableList from '~/components/ui-collapsable-item'
export default {
  props: {
    system: {
      type: Object,
      required: false
    }
  },
  components: {
    uiCollapsableItem
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";





/* Root class
========================================================================== */
.root {
}


</style>
