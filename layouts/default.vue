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


/* Root class
========================================================================== */
.root {
  composes: grid grid--no-wrap  from o-grid;
}




/* Sidebar
========================================================================== */

  .sidebar {
    composes: grid__cell  grid__cell--1/4-at-tablet  grid__cell--1/5-at-desktop  from o-grid;
  }






/* ContentArea
========================================================================== */

  .contentArea {
    composes: grid__cell  from o-grid;
  }


</style>
