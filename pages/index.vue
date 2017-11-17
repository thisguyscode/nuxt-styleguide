<template>
  <section :class="$style.base">
    <h1 :class="$style.heading">Home</h1>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */

@value c-background-color "sass-loader!~/assets/styles/cosmetics/_cosmetics.background-color.scss";




/* Base class
========================================================================== */

.base {
  composes: blue  from c-background-color;
}





/* Child classes
========================================================================== */
.heading {
  composes: green  from c-background-color;
}

</style>
