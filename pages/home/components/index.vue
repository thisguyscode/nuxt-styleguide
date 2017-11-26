<template>
  <section>
    <ui-page-heading icon="folder-open-o">components</ui-page-heading>
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





/* Heading
========================================================================== */
.heading {
  composes: heading heading--alpha  from o-heading;
}


</style>
