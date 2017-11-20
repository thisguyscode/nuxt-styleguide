<template>
  <nav :class="$style.root">
    <ol :class="$style.list">
      
      <!-- <li :class="$style.item">
        <span :class="$style.current" v-if="isLast(index)">Home</span>
        <ui-icon :class="$style.homeIcon" name="home"/>
        <nuxt-link :class="$style.homeLink" to="/">Home</nuxt-link>
      </li> -->

      <li :class="$style.item" v-for="(item, index) in computedList" :key="item.id">
        <ui-icon :class="$style.homeIcon" v-if="isFirst(index)" name="home"/>
        <span :class="$style.current" v-if="isLast(index)">{{ showName(item) }}</span>
        <nuxt-link :class="$style.link" v-else :to="item.path">{{ showName(item) }}</nuxt-link>
        <ui-icon :class="$style.seperatorIcon" v-if="!isLast(index)" name="chevron-right"/>
      </li>

    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    separator: String
  },
  mounted () {
    console.log(this.computedList)
  },
  computed: {
    computedList: function () {
      var list = this.list
      list.pop()
      return list
    }
  },
  methods: {
    isLast: function (index) {
      var list = this.computedList
      return index === list.length - 1
    },
    isFirst: function (index) {
      return index === 0
    },
    showName: function (item) {
      var path = item.path
      var start = path.lastIndexOf('/') + 1
      var end = path.length
      var name = path.substr(start, end)
      return name
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-list-inline "sass-loader!~/assets/styles/objects/objects.list-inline.scss";
@value o-text "sass-loader!~/assets/styles/objects/objects.text.scss";

@value c-text-style "sass-loader!~/assets/styles/cosmetics/cosmetics.text-style.scss";
@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";
@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";




/* Root class
========================================================================== */
.root {
  composes: box  from o-box;
}





/* Layout
========================================================================== */
  .list {
    composes: list-inline  from o-list-inline;
  }

    .item {
      composes: list-inline__item list-inline--xs  from o-list-inline;
    }
      
 

    


/* Text / Icons
========================================================================== */
      
      .homeLink,
      .current,
      .link {
        composes: text  from o-text;
        composes: bold  from c-text-style;
        text-decoration: none;
      }

      .current,
      .link {
        composes: margin-right-xs  from u-spacings;
      }

      .seperatorIcon {
        height: .6em;
      }

      .homeIcon {
        composes: margin-right-xs from u-spacings;
        height: .8em;
      }

</style>
