<template>
<li :class="$style.root">
  
  <!-- ITEM -->
  <div :class="[$style.item, itemClass]">

    <!-- Link (if file) -->
    <nuxt-link :class="$style.fileLink" :to="linkTo" v-if="!itemIsFolder">
      <span :class="$style.fileLinkText">Go to {{ model.name }}</span>
    </nuxt-link>
    
    <!-- Clickable toggle -->
    <a :class="[$style.toggle, toggleClass]" @click="toggleClickHandler" @keyup.enter="toggleEnterHandler" :tabindex="toggleTabIndex">
      <!-- Icon -->
      <ui-icon :class="$style.itemIcon" name="folder-open-o" v-if="open && itemIsFolder"></ui-icon>
      <ui-icon :class="$style.itemIcon" name="folder" v-else-if="open === false && itemIsFolder"></ui-icon>
      <ui-icon :class="$style.itemIcon" name="file"  v-else></ui-icon>
      <!-- Heading -->
      <span :class="$style.itemText">{{ model.name }}</span>
    </a>

    <!-- Preview Link -->
    <nuxt-link :to="linkTo" v-if="itemIsFolder" :class="$style.previewLink">
      <ui-icon :class="$style.previewLinkIcon" name="eye"/>
    </nuxt-link>

  </div>

  <!-- CONTENTS (if folder) -->
  <ul
    v-show="open"
    v-if="itemIsFolder"
    :class="$style.folderContentsList">
    <!-- Indentation Line -->
    <div :class="$style.indentLine"></div>
    <!-- Recursively use this component -->
    <ui-collapsable-item
      v-for="item in model.children"
      :model="item"
      :key="item.id">
    </ui-collapsable-item>
  </ul>

</li>
</template>


<script>
import uiDirectoryItem from '~/components/ui-directory-item'
export default {
  mounted () {
    // console.log(this.$route.path)
  },
  name: 'ui-collapsable-item',
  data: function () {
    return {
      open: false
    }
  },
  components: {
    uiDirectoryItem
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  computed: {
    linkTo: function () {
      return '/home/' + this.model.path
    },
    itemClass: function () {
      if (this.open) {
        return this.$style.itemIsOpen
      }
      if (this.itemIsFolder) {
        return this.$style.itemIsFolder
      }
    },
    toggleClass: function () {
      if (!this.itemIsFolder) {
        return this.$style.toggleIsDisabled
      }
    },
    toggleTabIndex: function () {
      if (this.itemIsFolder) {
        return 0
      } else {
        return -1
      }
    },
    itemIsFolder: function () {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.itemIsFolder) {
        this.open = !this.open
      }
    },
    toggleClickHandler: function () {
      this.toggle()
    },
    toggleEnterHandler: function () {
      this.toggle()
    }
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
// VALUES
@import "~assets/styles/values/values.colors";

// CLASSES
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-text "sass-loader!~/assets/styles/objects/objects.text.scss";
@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";
@value o-liner "sass-loader!~/assets/styles/objects/objects.liner.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";
@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";
@value c-text-style "sass-loader!~/assets/styles/cosmetics/cosmetics.text-style.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";
@value u-position "sass-loader!~/assets/styles/utilities/utilities.position.scss";
@value u-hidden-visually "sass-loader!~/assets/styles/utilities/utilities.hidden-visually.scss";


/* Root class
========================================================================== */

.root {
  //
}






/* Item
========================================================================== */

.item {
  composes: text  from o-text;
  composes: list-directory__item  from o-list-directory;
  composes: margin-right-lg  from u-spacings;
  width: 100%;
  display: block;
  color: $neutral-30;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  &:hover,
  &:focus {
    background-color: $neutral-100;
    box-shadow: inset 0 0 0 1px $neutral-70;
  }
}

.itemIsFolder {
  // composes: bold  from c-text-style;
}

.itemIsOpen {
  composes: bold  from c-text-style;
  color: $neutral-00;
}

  .itemIcon {
    composes: margin-right-sm  from u-spacings;
  }






/* Toggle
========================================================================== */
  .toggle {
    composes: padding-xs  from u-spacings;
    display: block;
    position: relative;
    &:hover,
    &:focus {
      background-color: $neutral-90;
      box-shadow: inset 0 0 0 1px $neutral-70;
    }
  }

  .toggleIsDisabled {
    pointer-events: none;
  }




/* File Link
========================================================================== */
  .fileLink {
    composes: liner liner--link-bloater  from o-liner;
    &:hover,
    &:focus {
      background-color: $neutral-90;
      box-shadow: inset 0 0 0 1px $neutral-70;
    }
  }

    .fileLinkText {
      composes: hidden-visually  from u-hidden-visually;
    }



/* Preview Link
========================================================================== */
.item {
  &:hover,
  &:focus {
    > .previewLink {
      background-color: $neutral-100;
      box-shadow: inset 0 0 0 1px $neutral-70;
      &:hover,
      &:focus {
        background-color: $neutral-90;
        box-shadow: inset 0 0 0 1px $neutral-70;
      }
    }
  }
}
  
  .previewLink {
    composes: liner liner--break-left  from o-liner;
    composes: padding-horizontal-xs  from u-spacings;
    color: $neutral-10;
    display: flex;
    align-items: center;
    z-index: 100;
    cursor: pointer;
    > .previewLinkIcon {
      opacity: .7;
    }
    &:hover,
    &:focus {
      > .previewLinkIcon {
        opacity: 1;
      }
    }
  }

    .previewLinkIcon {
      height: 1em;
      // vertical-align: text;
    }






/* Folder contents
========================================================================== */

.folderContentsList {
  composes: list-directory  from o-list-directory;
  composes: list-directory__item  from o-list-directory;
}

  .indentLine {
    composes: list-directory__line  from o-list-directory;
    border-left: 1px solid $neutral-30;
  }

</style>
