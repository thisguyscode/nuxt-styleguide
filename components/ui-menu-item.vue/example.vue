<template>
  <ul :class="$style.root">
    <ui-menu-item :label="'Yo'" :onClick="act" :onClickArg="'acted'"/>
  </ul>
</template>

<script>
export default {
  methods: {
    act: function (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" module>

@value o-list-bare "sass-loader!~/assets/styles/objects/objects.list-bare.scss";

.root {
  composes: list-bare  from o-list-bare;
}

</style>
