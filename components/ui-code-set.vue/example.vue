<template>
  <ui-code-set :codeSet="codeArray"/>
</template>

<script>
export default {
  data: () => {
    return {
      codeArray: [
        {
          name: 'ui-a.vue',
          code: require(`!raw-loader!~/components/ui-a.vue/index.vue`),
          language: 'xml'
        },
        {
          name: 'ui-a.vue',
          code: require(`!raw-loader!~/components/ui-a.vue/index.vue`),
          language: 'xml'
        }
      ]
    }
  }
}
</script>