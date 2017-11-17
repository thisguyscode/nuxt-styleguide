<template>
<!--  -->
<section :class="$style.base">
  <div :class="$style.inner">

    <div :class="$style.cell">
      <div :class="$style.buttonWrapper">
        <div :class="$style.button">Text</div>
      </div>
    </div>

    <div :class="$style.cell">
      <div :class="$style.buttonWrapper">
        <div :class="$style.button">Text</div>
      </div>
    </div>

    <div :class="$style.cell">
      <div :class="$style.buttonWrapper">
        <div :class="$style.button">Text</div>
      </div>
    </div>

  </div>
</section>
<!--  -->
</template>

<script>
import uiCode from '~/components/ui-code'
export default {
  components: {
    uiCode
  },
  computed: {
    code: function () {
      // eslint-disable-next-line import/no-webpack-loader-syntax
      return require('!raw-loader!~/assets/styles/cosmetics/_cosmetics.background-color.scss')
    }
  }
}
</script>

<style module>

/* Dependencies
========================================================================== */
@value o-button "sass-loader!~/assets/styles/objects/_objects.button.scss";
@value o-layout "sass-loader!~/assets/styles/objects/_objects.layout.scss";
@value o-box "sass-loader!~/assets/styles/objects/_objects.box.scss";

@value c-background-color "sass-loader!~/assets/styles/cosmetics/_cosmetics.background-color.scss";
@value c-button "sass-loader!~/assets/styles/cosmetics/_cosmetics.button.scss";
@value c-test "sass-loader!~/assets/styles/test.scss";

@value u-widths "sass-loader!~/assets/styles/utilities/_utilities.widths.scss";





/* Base class
========================================================================== */

.base {
  composes: box  from o-box;
}





/* Child classes
========================================================================== */

.inner {
  composes: layout  layout--large  from o-layout;
}

.cell {
  composes: layout__item  from o-layout;
  composes: width-1/2  width-1/3-at-desktop  from u-widths;
}

.buttonWrapper {
  composes: orange  from c-background-color;
}

.button {
  composes: button  from o-button;
  composes: button  from c-button;
}

</style>
