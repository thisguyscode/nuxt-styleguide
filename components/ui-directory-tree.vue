<template>
  <section :class="$style.root">
    <ui-collapsable-list
      v-for="folder in system.folders"
      :trigger="folder.name"
      :items="folder.items"
      :key="folder.id" />
  </section>
</template>

<script>
import uiCollapsableList from '~/components/ui-collapsable-list'
export default {
  props: {
    system: {
      type: Object,
      required: false
    }
  },
  components: {
    uiCollapsableList
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
