<template>
  <section>
    <!-- <span :class="$style.categoryHeading">{{ $route.params.category }}</span> -->
    <h1 :class="$style.heading">
      <ui-icon :class="$style.headingLogo" name="file"/>
      <span>{{ $route.params.file }}</span>
    </h1>
    <ui-code-block :code="code" :languages="['scss', 'js']"/>
  </section>
</template>

<script>
import uiCodeBlock from '~/components/ui-code-block'
export default {
  components: {
    uiCodeBlock
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

</style>

