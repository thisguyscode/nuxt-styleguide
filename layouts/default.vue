<template>
<section :class="$style.root">
   
  <aside :class="$style.sidebar">
    <ui-sidebar>
      <h1 :class="$style.sidebarHeading">Menu</h1>
      <ui-directory-tree :root="fileSystem"/>
    </ui-sidebar>
  </aside>
  
  <main :class="$style.contentArea">
    <nuxt/>
  </main>

</section>
</template>


<script>
import uiSidebar from '~/components/ui-sidebar'
import uiDirectoryTree from '~/components/ui-directory-tree'

import fileSystem from '~/data/filesystem/main.json'

export default {
  data: () => {
    return {
      fileSystem: fileSystem
    }
  },
  components: {
    uiSidebar,
    uiDirectoryTree
  },
  computed: {
    testCode: function () {
      return require(`!raw-loader!~/assets/styles/config/config.baseline.scss`)
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-grid "sass-loader!~/assets/styles/objects/objects.grid.scss";
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-liner "sass-loader!~/assets/styles/objects/objects.liner.scss";

@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";


/* Root class
========================================================================== */
.root {
  // display: flex;
  // width: 100%;
  // position: relative;
  composes: grid grid--no-wrap grid--align-stretch  from o-grid;
}




/* Sidebar
========================================================================== */

  .sidebar {
    // flex-basis: 20%;
    composes: grid__cell  grid__cell--1/4-at-tablet  grid__cell--1/5-at-desktop  from o-grid;
  }

    .sidebarHeading {
      composes: heading heading--delta  from o-heading;
      composes: padding-bottom-sm  from u-spacings;
      composes: bottom very-light  from c-border;
    }






/* ContentArea
========================================================================== */

  .contentArea {
    composes: grid__cell  grid__cell--auto-size  from o-grid;
  }


</style>
