<template>
  <ui-directory-tree :root='fileSystem'/>
</template>

<script>
export default {
  data: () => {
    return {
      fileSystem: {
        path: '/',
        name: 'root',
        children: [
          {
            path: 'common',
            name: 'common',
            children: [
              {
                path: 'common/config',
                name: 'config',
                children: [
                  {
                    path: 'common/config/config.baseline.scss',
                    name: 'config.baseline.scss',
                    size: 248,
                    extension: '.scss',
                    type: 'file'
                  }
                ],
                size: 248,
                type: 'directory'
              }
            ],
            size: 56914,
            type: 'directory'
          },
          {
            path: 'components',
            name: 'components',
            children: [
              {
                path: 'components/ui-a.vue',
                name: 'ui-a.vue',
                children: [
                  {
                    path: 'components/ui-a.vue/example.vue',
                    name: 'example.vue',
                    size: 77,
                    extension: '.vue',
                    type: 'file'
                  },
                  {
                    path: 'components/ui-a.vue/index.vue',
                    name: 'index.vue',
                    size: 133,
                    extension: '.vue',
                    type: 'file'
                  },
                  {
                    path: 'components/ui-a.vue/script.js',
                    name: 'script.js',
                    size: 24,
                    extension: '.js',
                    type: 'file'
                  },
                  {
                    path: 'components/ui-a.vue/style.scss',
                    name: 'style.scss',
                    size: 359,
                    extension: '.scss',
                    type: 'file'
                  },
                  {
                    path: 'components/ui-a.vue/template.html',
                    name: 'template.html',
                    size: 53,
                    extension: '.html',
                    type: 'file'
                  }
                ],
                size: 646,
                type: 'directory'
              }
            ],
            size: 18818,
            type: 'directory'
          }
        ]
      }
    }
  }
}
</script>
