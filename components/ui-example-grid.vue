<template>
  <ul :class="$style.root">
    <li :class="$style.cell"></li>
    <li :class="$style.cell"></li>
    <li :class="$style.cell"></li>
    <li :class="$style.cell"></li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-grid "sass-loader!~/assets/styles/objects/objects.grid.scss";
@value o-list-bare "sass-loader!~/assets/styles/objects/objects.list-bare.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";



/* Root class
========================================================================== */
.root {
  composes: grid  from o-grid;
  composes: list-bare  from o-list-bare;
}




/* Cells
========================================================================== */

.cell {
  composes: grid__cell  from o-grid;
  composes: each-different  from c-background-color;
  padding: 50px;
}
</style>
