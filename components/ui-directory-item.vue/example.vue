<template>
  <span>
    <ui-directory-item
      v-for="object in root.children"
      :model="object"
      :key="object.id"
    />
  </span>
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
