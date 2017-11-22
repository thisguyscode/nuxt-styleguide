<template>
  <section>
    <h1 :class="$style.heading">global.scss</h1>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";

// @value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";





/* Heading
========================================================================== */
.heading {
  composes: heading heading--alpha  from o-heading;
}


</style>
