<template>
  <section :class="$style.root">
    <ui-page-heading icon="file-o">{{ $route.params.file }}</ui-page-heading>
    <section :class="$style.codeSection">
      <ui-code-block :code="code" :languages="['scss', 'js']"/>
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
      return require(`!raw-loader!~/assets/styles/${this.$route.params.category}/${this.$route.params.file}`)
    }
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-page-section "sass-loader!~/assets/styles/objects/objects.page-section.scss";

@value c-text-color "sass-loader!~/assets/styles/cosmetics/cosmetics.text-color.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";


/* Root class
========================================================================== */
.root {
  //
}



/* XX
========================================================================== */

  .heading {
    composes: heading heading--beta  from o-heading;
    composes: margin-bottom-md  from u-spacings;
  }

    .headingLogo {
      composes: margin-right-xs from u-spacings;
      height: .8em;
    }

  .categoryHeading {
    composes: heading heading--delta  from o-heading;
    composes: neutral-30  from c-text-color;
  }

.codeSection {
  composes: page-section padded-x  from o-page-section;
  composes: margin-bottom-lg  from u-spacings;
}

</style>

