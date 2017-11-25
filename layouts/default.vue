<template>
<section :class="$style.root">
   
  <aside :class="$style.sidebar">
    <ui-sidebar>
      <ui-directory-tree :root="fileSystem"/>
    </ui-sidebar>
  </aside>
  
  <main :class="$style.contentArea">
    <nuxt/>
  </main>

</section>
</template>


<script>
import uiSidebar from '~/components/ui-sidebar.vue'
import uiDirectoryTree from '~/components/ui-directory-tree.vue'

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
@value o-liner "sass-loader!~/assets/styles/objects/objects.liner.scss";

@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";


/* Root class
========================================================================== */
.root {
  composes: grid grid--align-stretch  from o-grid;
}




/* Sidebar
========================================================================== */

  .sidebar {
    overflow-y: scroll;
    height: 100vh;
    composes: grid__cell  grid__cell--1/3-at-tablet  grid__cell--1/4-at-wide  from o-grid;
  }






/* ContentArea
========================================================================== */

  .contentArea {
    composes: grid__cell grid__cell--2/3-at-tablet  grid__cell--3/4-at-wide  from o-grid;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100vh;
  }


</style>
