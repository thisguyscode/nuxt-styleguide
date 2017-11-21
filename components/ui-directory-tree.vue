<template>
  <ul :class="$style.root">
    <ui-directory-item
      v-for="item in root.children"
      :model="item"
      :key="item.id"
    />
  </ul>
</template>

<script>
import uiDirectoryItem from '~/components/ui-directory-item'
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
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";

@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";





/* Root class
========================================================================== */
.root {
  composes: list-directory  from o-list-directory;
}


</style>
