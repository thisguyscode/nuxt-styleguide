<template>
  <ul :class="$style.root">
    <ui-directory-item
      v-for="object in root.children"
      :model="object"
      :key="object.id"
    />
  </ul>
</template>

<script>
import uiDirectoryItem from '~/components/ui-directory-item.vue'
export default {
  props: {
    root: {
      type: Object,
      required: false
    }
  },
  components: {
    uiDirectoryItem
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";





/* Root class
========================================================================== */
.root {
  composes: list-directory  from o-list-directory;
  composes: padding-left-none  from u-spacings;
}


</style>
