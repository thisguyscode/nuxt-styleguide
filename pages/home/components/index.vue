<template>
  <section>
    <ui-page-heading icon="folder-open-o">components</ui-page-heading>
    
    <ui-page-preview v-for="i in pages" :key="i.id" :heading="i.name" iconName="file" :to="i.path">
      <!-- <p>A page about stuff that is really cool and stuff.</p> -->
    </ui-page-preview>
  </section>
</template>

<script>
import uiPageHeading from '~/components/ui-page-heading.vue'
import uiPagePreview from '~/components/ui-page-preview.vue'
export default {
  components: {
    uiPageHeading,
    uiPagePreview
  },
  computed: {
    filesystem: function () {
      return this.$store.state.filesystem
    },
    pages: function () {
      var rootFolders = this.filesystem.children
      var componentsFolder = rootFolders.find(function (child) {
        return child.name === 'components'
      })
      return componentsFolder.children
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
