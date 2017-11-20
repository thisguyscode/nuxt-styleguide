<template>
<section :class="$style.root">

  <aside :class="$style.sidebar">
    <ui-sidebar>
      <ui-directory-tree :root="fileSystem"/>
    </ui-sidebar>
  </aside>
  
  <main :class="$style.contentArea">
    <div :class="$style.contentHeader">
      <ui-breadcrumbs :list="list"/>
    </div>
    <nuxt-link to="/home/global/">global</nuxt-link>
    <div :class="$style.contentInner">
      <nuxt-child/>
    </div>
  </main>

</section>
</template>


<script>
import uiSidebar from '~/components/ui-sidebar'
import uiDirectoryTree from '~/components/ui-directory-tree'
import uiBreadcrumbs from '~/components/ui-breadcrumbs'

import fileSystem from '~/data/fs/styles.json'

export default {
  data: () => {
    return {
      fileSystem: fileSystem
    }
  },
  components: {
    uiSidebar,
    uiDirectoryTree,
    uiBreadcrumbs
  },
  computed: {
    list: function () {
      return this.$route.matched
    }
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
  composes: grid  from o-grid;
}




/* Sidebar
========================================================================== */

  .sidebar {
    composes: grid__cell  grid__cell--1/4-at-tablet  grid__cell--1/5-at-desktop  from o-grid;
  }





/* ContentArea
========================================================================== */

  .fileTree {
    composes: list-directory  from o-list-directory;
  }





/* ContentArea
========================================================================== */

  .contentArea {
    composes: grid__cell  from o-grid;
  }

    .contentHeader {
      composes: bottom heavy  from c-border;
    }

    .contentInner {
      composes: box box--lg  from o-box;
    }

</style>
