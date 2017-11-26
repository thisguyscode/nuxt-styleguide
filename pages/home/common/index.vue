<template>
  <section>

    <ui-page-heading icon="folder-open-o">common</ui-page-heading>
    
    <ui-page-preview heading="page-name" iconName="file">
      <p>A page about stuff that is really cool and stuff.</p>
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
  height: .8em;
}

</style>
