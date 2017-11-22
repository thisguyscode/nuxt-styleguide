<template>
<section :class="$style.root">
  
  <div :class="$style.contentHeader">
    <ui-breadcrumbs/>
  </div>

  <div :class="$style.contentInner">
    <nuxt-child/>
  </div>

</section>
</template>


<script>
import uiBreadcrumbs from '~/components/ui-breadcrumbs'

export default {
  components: {
    uiBreadcrumbs
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-grid "sass-loader!~/assets/styles/objects/objects.grid.scss";
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";
@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";


/* Root class
========================================================================== */
.root {
  //
}



/* ContentArea
========================================================================== */

  .contentHeader {
    composes: bottom light  from c-border;
  }

  .contentInner {
    composes: box box--lg  from o-box;
  }

</style>
