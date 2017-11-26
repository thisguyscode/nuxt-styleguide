<template>
  <ul :class="$style.list">
    <ui-directory-item
      v-for="object in root.children"
      :model="object"
      :key="object.id"
    />
  </ul>
</template>

<script>
export default {
  data: () => {
    return {
      root: {
        name: 'root',
        path: '/',
        type: 'folder',
        children: [
          {
            name: 'folder',
            type: 'folder',
            path: '/first-folder',
            children: [
              {
                name: 'file',
                type: 'file',
                path: '/first-folder/file'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" module>

@value o-list-directory "sass-loader!~/assets/styles/objects/objects.list-directory.scss";
@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";

.list {
  composes: list-directory  from o-list-directory;
  composes: padding-left-none  from u-spacings;
}

</style>