<template>
  <nav :class="$style.root">
    <ol :class="$style.list">

      <li :class="$style.item" v-for="(item, index) in list" :key="item.id">
        <!-- ITEM ICON -->
        <ui-icon :class="$style.itemIcon" v-if="isFirst(index)" name="home"/>
        <ui-icon :class="$style.itemIcon" v-else :name="itemIconName(item)"/>
        <!-- TEXT -->
        <span :class="$style.currentRouteLink" v-if="isLast(index)">{{ showName(item) }}</span>
        <nuxt-link :class="$style.routeLink" v-else :to="item.path">{{ showName(item) }}</nuxt-link>
        <!-- SEPERATOR ICON -->
        <ui-icon :class="$style.seperatorIcon" v-if="!isLast(index)" name="chevron-right"/>
      </li>

    </ol>
  </nav>
</template>

<script>
// import isEmpty from 'lodash/isEmpty'
export default {
  mounted () {
    // console.log(this.list)
  },
  computed: {
    list: function () {
      var list = []
      this.$route.matched.forEach((item) => {
        if (!item.path.endsWith('/')) {
          var obj = Object.create(item)
          var start = obj.path.lastIndexOf('/') + 1
          var end = obj.path.length - 1
          var testString = obj.path.substr(start, end)
          if (testString === ':name') {
            obj.path = '/home/components/' + this.$route.params.name
            obj.type = 'file'
          } else if (testString === ':category') {
            obj.path = '/home/common/' + this.$route.params.category
            obj.type = 'folder'
          } else if (testString === ':file') {
            obj.path = '/home/common/' + this.$route.params.category + '/' + this.$route.params.file
            obj.type = 'file'
          }
          list.push(obj)
        }
      })
      return list
    }
  },
  methods: {
    itemIconName: function (item) {
      if (item.type === 'file') {
        return 'file-o'
      } else if (item.type === 'folder') {
        return 'folder-open-o'
      } else {
        return 'folder-open-o'
      }
    },
    isLast: function (index) {
      var list = this.list
      return index === list.length - 1
    },
    isFirst: function (index) {
      return index === 0
    },
    showName: function (item) {
      var name = ''
      if (item.customName) {
        name = item.customName
      } else {
        var path = item.path
        var start = path.lastIndexOf('/') + 1
        var end = path.length
        name = path.substr(start, end)
      }
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
  composes: box box--sm  from o-box;
}





/* Layout
========================================================================== */
  .list {
    composes: list-inline  from o-list-inline;
  }

    .item {
      composes: list-inline__item list-inline--sm  from o-list-inline;
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
        composes: margin-right-sm  from u-spacings;
      }

      .seperatorIcon {
        height: .6em;
      }

      .itemIcon {
        composes: margin-right-xs from u-spacings;
        vertical-align: text-top;
        height: 1.1em;
      }

</style>
