<template>
  <section>

    <ui-page-heading icon="folder-open-o">common</ui-page-heading>
    
    <ui-page-preview v-for="i in pages" :key="i.id" :heading="i.name" :iconName="getIconName(i)" :to="'/home/' + i.path">
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
      var commonFolder = rootFolders.find(function (child) {
        return child.name === 'common'
      })
      return commonFolder.children
    }
  },
  methods: {
    getIconName: function (object) {
      if (object.type === 'file') {
        return 'file'
      } else {
        return 'folder'
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

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";



/* Heading
========================================================================== */
.heading {
  composes: heading heading--beta  from o-heading;
}

.headingIcon {
  composes: margin-right-sm  from u-spacings;
  width: .8em;
}

</style>
