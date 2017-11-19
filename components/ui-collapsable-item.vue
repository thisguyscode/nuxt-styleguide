<template>
<li :class="$style.root">
  
  <!-- ITEM -->
  <p :class="[$style.item, itemClass]" @click="toggle">
    <!-- Heading -->
    <span>{{model.name}}</span>
    <!-- Icon -->
    <span v-if="itemIsFolder">[{{open ? '-' : '+'}}]</span>
  </p>

  <!-- CONTENTS (if folder) -->
  <ul
    v-show="open"
    v-if="itemIsFolder"
    :class="$style.folderContentsList">
    <!-- Recursively use this component -->
    <ui-collapsable-item
      v-for="model in model.children"
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
      return this.model.children &&
        this.model.children.length
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
@value o-list-bare "sass-loader!~/assets/styles/objects/objects.list-bare.scss";

@value c-text-style "sass-loader!~/assets/styles/cosmetics/cosmetics.text-style.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";



/* Root class
========================================================================== */

.root {
  composes: margin-bottom-sm  from u-spacings;
}



/* Child classes
========================================================================== */
.item {
  composes: text  from o-text;
  composes: margin-bottom-sm  from u-spacings;
}

.itemIsOpen {
  composes: bold  from c-text-style;
}

.folderContentsList {
  composes: list-bare  from o-list-bare;
}

</style>
