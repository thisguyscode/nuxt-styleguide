<template>
  <section>
    <ui-page-heading icon="file-o">global.scss</ui-page-heading>
    <section :class="$style.codeSection">
      <ui-code-block :code="code"/>
    </section>
  </section>
</template>

<script>
import uiCodeBlock from '~/components/ui-code-block.vue'
import uiPageHeading from '~/components/ui-page-heading.vue'
export default {
  components: {
    uiCodeBlock,
    uiPageHeading
  },
  computed: {
    code: function () {
      return require(`!raw-loader!~/assets/styles/global.scss`)
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-page-section "sass-loader!~/assets/styles/objects/objects.page-section.scss";

// @value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";



/* Heading
========================================================================== */
.heading {
  composes: heading heading--alpha  from o-heading;
}

.codeSection {
  composes: page-section padded-x  from o-page-section;
  composes: margin-bottom-lg  from u-spacings;
}


</style>
