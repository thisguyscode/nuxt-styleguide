<template>
<section :class="$style.root">

  <aside :class="$style.sidebar">
    <ui-sidebar>
      <ui-directory-tree :root="fileSystem"/>
    </ui-sidebar>
  </aside>

  <main :class="$style.contentArea">
    <div :class="$style.contentInner">
      <p :class="$style.heading"><nuxt-link to='/blank/'>Go to another page</nuxt-link></p>
      <ui-a :class="$style.contentItem"/>
      <ui-b :class="$style.contentItem"/>
      <ui-c :class="$style.contentItem"/>
    </div>
  </main>

</section>
</template>

<script>
import uiA from '~/components/ui-a'
import uiB from '~/components/ui-b'
import uiC from '~/components/ui-c'
import uiSidebar from '~/components/ui-sidebar'
import uiCollapsableItem from '~/components/ui-collapsable-item'
import uiDirectoryTree from '~/components/ui-directory-tree'

import fileSystem from '~/data/fileSystem.json'

export default {
  data: () => {
    return {
      fileSystem: fileSystem
    }
  },
  components: {
    uiA,
    uiB,
    uiC,
    uiSidebar,
    uiCollapsableItem,
    uiDirectoryTree
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-grid "sass-loader!~/assets/styles/objects/objects.grid.scss";
@value o-text "sass-loader!~/assets/styles/objects/objects.text.scss";
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";


/* Root class
========================================================================== */
.root {
  composes: orange  from c-background-color;
  composes: grid  grid--1/4  grid--1/5-at-desktop  from o-grid;
}




/* Sidebar
========================================================================== */

  .sidebar {
    composes: grid__cell  grid__cell--1/4-at-tablet  grid__cell--1/5-at-desktop  from o-grid;
  }

    .heading {
      composes: heading  from o-heading;
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

    .contentInner {
      composes: grid  grid--1/3  from o-grid;
    }

      .contentItem {
        composes: grid__cell  grid__cell--1/5    from o-grid;
      }


</style>
