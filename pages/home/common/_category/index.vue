<template>
  <section>
    <ui-page-heading icon="folder-open-o">{{ $route.params.category }}</ui-page-heading>
  </section>
</template>

<script>
import uiPageHeading from '~/components/ui-page-heading.vue'
export default {
  components: {
    uiPageHeading
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
