<template>
  <div :class="$style.container">
    <div :class="$style.child">
      <div :class="$style.grandchild"></div>
    </div>
    <div :class="$style.child">
      <div :class="$style.grandchild"></div>
    </div>
  </div>
</template>

<style lang="scss" module>

.container {
  composes: o-box, o-box--large from "sass-loader!~/assets/styles/test.scss";
  composes: o-layout, o-layout--large from "sass-loader!~/assets/styles/test.scss";
  background-color: black;
}

.child {
  composes: o-layout__item from "sass-loader!~/assets/styles/test.scss";
  composes: u-1/2 from "sass-loader!~/assets/styles/test.scss";
}

.grandchild {
  height: 100px;
  background-color: blue;
}

</style>
