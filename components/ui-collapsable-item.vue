<template>
<li :class="$style.root">
  
  <!-- ITEM -->
  <p :class="[$style.item, itemClass]" @click="toggle">
    <!-- Icon -->
    <ui-icon :class="$style.icon" name="folder" v-if="open && itemIsFolder"></ui-icon>
    <ui-icon :class="$style.icon" name="folder-o" v-else-if="open === false && itemIsFolder"></ui-icon>
    <ui-icon :class="$style.icon" name="file-o"  v-else="open === false && itemIsFolder === false"></ui-icon>
    <!-- <span v-if="itemIsFolder">[{{open ? '-' : '+'}}] </span> -->
    <!-- Heading -->
    <span>{{ model.name }}</span>
  </p>

  <!-- CONTENTS (if folder) -->
  <ul
    v-show="open"
    v-if="itemIsFolder"
    :class="$style.folderContentsList">
    <!-- Recursively use this component -->
    <ui-collapsable-item
      v-for="model in model.items"
      :model="model"
      :key="model.id">
    </ui-collapsable-item>
  </ul>

</li>
</template>


<script>
import uiCollapsableItem from '~/components/ui-collapsable-item'
export default {
  name: 'ui-collapsable-item',
  data: function () {
    return {
      open: false
    }
  },
  components: {
    uiCollapsableItem
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemClass: function () {
      if (this.open) {
        return this.$style.itemIsOpen
      }
    },
    itemIsFolder: function () {
      return this.model.items &&
        this.model.items.length
    }
  },
  methods: {
    toggle: function () {
      if (this.itemIsFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-text "sass-loader!~/assets/styles/objects/objects.text.scss";
@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";

@value c-text-style "sass-loader!~/assets/styles/cosmetics/cosmetics.text-style.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";



/* Root class
========================================================================== */

.root {
  composes: margin-bottom-sm  from u-spacings;
}





/* Item
========================================================================== */

.item {
  composes: text  from o-text;
  composes: margin-bottom-sm  from u-spacings;
  cursor: pointer;
}

.itemIsOpen {
  composes: bold  from c-text-style;
}




/* Item
========================================================================== */
// Needs abstracting!
.icon {
  composes: margin-right-sm  from u-spacings;
}




/* Folder contents
========================================================================== */

.folderContentsList {
  composes: list-directory  from o-list-directory;
}

</style>
