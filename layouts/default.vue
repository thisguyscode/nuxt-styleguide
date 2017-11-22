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
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-grid "sass-loader!~/assets/styles/objects/objects.grid.scss";
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";

@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";


/* Root class
========================================================================== */
.root {
  composes: grid grid--no-wrap grid--align-stretch  from o-grid;
}




/* Sidebar
========================================================================== */

  .sidebar {
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
    composes: grid__cell  from o-grid;
  }


</style>
