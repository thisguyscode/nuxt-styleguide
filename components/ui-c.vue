<template>
  <section :class="$style.root">
    <ul :class="$style.list">
      <li :class="$style.item">Item 1</li>
      <li :class="$style.item">Item 2</li>
      <li :class="$style.item">Item 3</li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-layout "sass-loader!~/assets/styles/objects/objects.layout.scss";
@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";



/* Root class
========================================================================== */
.root {
  composes: orange  from c-background-color;
}




/* Child classes
========================================================================== */
.list {
  composes: layout  from o-layout;
}

.item {
  composes: layout__item  from o-layout;
}

</style>
