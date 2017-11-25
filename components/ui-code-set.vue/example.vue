<template>
  <ui-code-set :codeSet="codeArray"/>
</template>

<script>
export default {
  data: () => {
    return {
      codeArray: [
        {
          name: 'ui-a',
          code: require(`!raw-loader!~/components/ui-a.vue/style.scss`),
          language: 'scss'
        },
        {
          name: 'ui-breadcrumbs',
          code: require(`!raw-loader!~/components/ui-breadcrumbs.vue/index.vue`),
          language: 'xml'
        }
      ]
    }
  }
}
</script>