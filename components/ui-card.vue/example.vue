<template>
  <ui-card>
    <p :class="$style.text">Text</p>
  </ui-card>
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