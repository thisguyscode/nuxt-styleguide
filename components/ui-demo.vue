<template>
<!--  -->
<div :class="$style.base">
  <div :class="$style.child">
    <div :class="$style.grandchild">
      TEXT
    </div>
  </div>
  <div :class="$style.child">
    <div :class="$style.grandchild">
      TEXT
    </div>
  </div>
  <div :class="$style.child">
    <div :class="$style.grandchild">
      TEXT
    </div>
  </div>
  <code :class="$style.code">
    <pre>{{ code }}</pre>
  </code>
</div>
<!--  -->
</template>

<script>
export default {
  computed: {
    code: function () {
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return require('!raw-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss')
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-button "sass-loader!~/assets/styles/objects/objects.button.scss";
@value o-layout "sass-loader!~/assets/styles/objects/objects.layout.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";
@value c-button "sass-loader!~/assets/styles/cosmetics/cosmetics.button.scss";
@value c-test "sass-loader!~/assets/styles/test.scss";

@value u-widths "sass-loader!~/assets/styles/utilities/utilities.widths.scss";



/* Base class
========================================================================== */
.base {
  composes: layout  layout--large  from o-layout;
  composes: orange  from c-background-color;
  composes: box  from o-box;
}



/* Child classes
========================================================================== */
.child {
  composes: layout__item  from o-layout;
  composes: width-1/2  width-1/3-at-desktop  from u-widths;
}

.grandchild {
  composes: button  from o-button;
  composes: button  from c-button;
}

.code {
  font-size: 16px;
}

</style>
