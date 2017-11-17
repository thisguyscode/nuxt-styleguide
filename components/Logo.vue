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

/* Global Style Dependencies
======================================================================== */
@value test "sass-loader!~/assets/styles/test.scss";

.container {
  composes: o-box, o-box--large from test;
  composes: o-layout, o-layout--large from test;
  background-color: black;
}

.child {
  composes: o-layout__item from test;
  composes: u-1/2 from test;
}

.grandchild {
  height: 100px;
  background-color: blue;
}

</style>
