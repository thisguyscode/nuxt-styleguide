<template>
  <section>
    <h1 :class="$style.heading">{{ $route.params.file }}</h1>
    <code>
      <pre>{{ code }}</pre>
    </code>
  </section>
</template>

<script>
export default {
  computed: {
    code: function () {
      // if (this.$route.params.file && this.$route.params.category) {
      return require(`!raw-loader!~/assets/styles/${this.$route.params.category}/${this.$route.params.file}`)
      // }
    }
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";


/* Root class
========================================================================== */
.root {
  //
}



/* ContentArea
========================================================================== */

  .heading {
    composes: heading heading--alpha  from o-heading;
  }

</style>

