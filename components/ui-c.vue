<template>
  <section :class="$style.root"></section>
</template>

<script>
export default {}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";



/* Root class
========================================================================== */
.root {
  composes: orange  from c-background-color;
  padding: 20px;
}

</style>
