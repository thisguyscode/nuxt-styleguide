<template>
  <section>
    <code>
      <pre>{{code}}</pre>
    </code>
  </section>
</template>

<script>
export default {
  computed: {
    code: function () {
      // eslint-disable-next-line
      return require('raw-loader!~/assets/styles/cosmetics/cosmetics.border.scss')
    }
  }
}
</script>

<style>

</style>
