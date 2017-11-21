<template>
  <nav :class="$style.root">
    <ol :class="$style.list">
      
      <!-- <li :class="$style.item">
        <span :class="$style.current" v-if="isLast(index)">Home</span>
        <ui-icon :class="$style.homeIcon" name="home"/>
        <nuxt-link :class="$style.homeLink" to="/">Home</nuxt-link>
      </li> -->

      <li :class="$style.item" v-for="(item, index) in list" :key="item.id">
        <!-- HOME ICON -->
        <ui-icon :class="$style.homeIcon" v-if="isFirst(index)" name="home"/>
        <ui-icon :class="$style.homeIcon" v-else name="home"/>
        <!-- TEXT -->
        <span :class="$style.currentRouteLink" v-if="isLast(index)">{{ showName(item) }}</span>
        <nuxt-link :class="$style.routeLink" v-else :to="item.path">{{ showName(item) }}</nuxt-link>
        <!-- ICON -->
        <ui-icon :class="$style.seperatorIcon" v-if="!isLast(index)" name="chevron-right"/>
      </li>

    </ol>
  </nav>
</template>

<script>
export default {
  mounted () {
    // console.log(this.list)
  },
  computed: {
    list: function () {
      var list = []
      this.$route.matched.forEach((item) => {
        if (!item.path.endsWith('/')) {
          list.push(item)
        }
      })
      return list
    }
  },
  methods: {
    isLast: function (index) {
      var list = this.list
      return index === list.length - 1
    },
    isFirst: function (index) {
      return index === 0
    },
    showName: function (item) {
      if (item.name) {
        return item.name
      } else {
        var path = item.path
        var start = path.lastIndexOf('/') + 1
        var end = path.length
        var name = path.substr(start, end)
        return name
      }
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
      

      .currentRouteLink {
        composes: bold  from c-text-style;
        text-decoration: none;
      }

      .homeLink,
      .currentRouteLink,
      .routeLink {
        composes: text  from o-text;
      }

      .currentRouteLink,
      .routeLink {
        composes: margin-right-xs  from u-spacings;
      }

      .seperatorIcon {
        height: .6em;
      }

      .homeIcon {
        composes: margin-right-xs from u-spacings;
        vertical-align: text-top;
        height: 1.1em;
      }

</style>
