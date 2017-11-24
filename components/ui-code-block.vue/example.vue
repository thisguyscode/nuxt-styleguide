<template>
  <ui-code-block :code="code"/>
</template>

<script>
export default {
  computed: {
    code: function () {
      return require(`!raw-loader!~/assets/styles/config/config.baseline.scss`)
    }
  }
}
</script>
