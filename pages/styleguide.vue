<template>
<section :class="$style.root">
  
  <div :class="$style.contentHeader">
    <ui-breadcrumbs/>
  </div>

  <div :class="[$style.contentHeader, $style.placeholderHeader]">
    <ui-breadcrumbs/>
  </div>

  <div :class="$style.contentInner">
    <nuxt-child/>
  </div>

</section>
</template>


<script>
import uiBreadcrumbs from '~/components/ui-breadcrumbs.vue'

export default {
  components: {
    uiBreadcrumbs
  },
  mounted () {
    this.$store.dispatch('getFilesystem')
  },
  fetch ({store}) {
    // getFilesystem action returns a Promise since it's defined as an async function
    return store.dispatch('getFilesystem')
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-grid "sass-loader!~/assets/styles/objects/objects.grid.scss";
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-liner "sass-loader!~/assets/styles/objects/objects.liner.scss";
@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";
@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";


/* Root class
========================================================================== */
.root {
  position: relative;
}



/* ContentArea
========================================================================== */

  .contentHeader {
    composes: liner liner--break-bottom  from o-liner;
    composes: bottom light  from c-border;
    composes: neutral-95  from c-background-color;
    z-index: 20;
    width: 100%;
  }

  .placeholderHeader {
    position: relative;
    visibility: hidden;
    pointer-events: none;
  }

  .contentInner {
    // composes: box box--lg  from o-box;
  }

</style>
