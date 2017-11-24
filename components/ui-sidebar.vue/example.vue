<template>
  <ui-sidebar>
    <p :class="$style.text">Text</p>
  </ui-sidebar>
</template>


<script>
export default {}
</script>


<style lang="scss" module>

@value o-text "sass-loader!~/assets/styles/objects/objects.text.scss";

.text {
  composes: text  from o-text;
}

</style>