<template>
  <nav :class="$style.base">
    <ul :class="$style.list">
      <li :class="$style.item">
        <nuxt-link :class="$style.link" to="/">Home</nuxt-link>
      </li>
      <li :class="$style.item">
        <nuxt-link :class="$style.link" to="/">Demo</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */

@value o-list-inline "sass-loader!~/assets/styles/objects/objects.list-inline.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";





/* Base class
========================================================================== */

.base {
  composes: blue  from c-background-color;
}


/* Child classes
========================================================================== */
.list {
  composes: orange  from c-background-color;
  composes: list-inline  from o-list-inline;
}

.item {
  composes: green  from c-background-color;
  composes: list-inline__item  from o-list-inline;
}

.link {
  composes: purple  from c-background-color;
  text-transform: uppercase;
}

</style>
