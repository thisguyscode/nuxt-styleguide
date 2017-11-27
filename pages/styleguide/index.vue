<template>
  <section>
    <ui-page-heading icon="home">styleguide</ui-page-heading>
    <ui-page-preview v-for="i in pages" :key="i.id" :heading="i.name" iconName="folder" :to="'/styleguide/' + i.path"/>
  </section>
</template>

<script>
import uiPagePreview from '~/components/ui-page-preview.vue'
import uiPageHeading from '~/components/ui-page-heading.vue'
export default {
  scrollToTop: true,
  components: {
    uiPagePreview,
    uiPageHeading
  },
  computed: {
    filesystem: function () {
      return this.$store.state.filesystem
    },
    pages: function () {
      var rootFolders = this.filesystem.children
      return rootFolders
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
// @value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";

// @value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";





/* Heading
========================================================================== */


</style>
