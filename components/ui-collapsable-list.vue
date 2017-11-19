<template>
<div :class="$style.root">

  <p :class="$style.trigger">
    {{ trigger }}
  </p>

  <ul :class="$style.list">
    <li
      v-for="item in items"
      :class="$style.item"
      :key="item">
      {{ item }}
    </li>
  </ul>

</div>
</template>


<script>
export default {
  props: {
    trigger: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>


<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-text "sass-loader!~/assets/styles/objects/objects.text.scss";
@value o-list-bare "sass-loader!~/assets/styles/objects/objects.list-bare.scss";

@value c-text-style "sass-loader!~/assets/styles/cosmetics/cosmetics.text-style.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";



/* Root class
========================================================================== */

.root {
  composes: margin-bottom-sm  from u-spacings;
}



/* Child classes
========================================================================== */
.trigger {
  composes: text  from o-text;
  composes: bold  from c-text-style;
}

.list {
  composes: list-bare  from o-list-bare;
}

.item {
  composes: text  from o-text;
}

</style>
