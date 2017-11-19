<template>
  <section :class="$style.root">
    <slot></slot>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";





/* Root class
========================================================================== */
.root {
  composes: box  from o-box;
  composes: neutral-100  from c-background-color;
}


</style>
