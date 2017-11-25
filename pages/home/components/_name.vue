<template>
  <section>
    <h1 :class="$style.heading">{{ $route.params.name }}</h1>

    <ui-card :class="$style.componentWrapper">
      <component :is="componentName + '-example'"></component>
    </ui-card>

    <nav :class="$style.nav">
      <form :class="$style.navList">
        <fieldset :class="$style.navItem" v-for="(obj, index) in codeArray" :key="index">
          <input :class="$style.radio" type="radio" :id="index" :value="index" v-model="selected" name="selectedCode">
          <label :class="$style.label" :for="index">{{ obj.name }}</label>
        </fieldset>
      </form>
    </nav>

    <ui-code-block :code="selectedCode.code" :languages="[selectedCode.language]" rounded="bottom"/>

  </section>
</template>

<script>
import filesystem from '~/data/filesystem/main.json'
require('~/plugins/all-components.js')

export default {
  data: () => {
    return {
      selected: 0,
      filesystem: filesystem
    }
  },
  computed: {
    componentName: function () {
      var name = this.currentObject.name
      var dotStart = name.lastIndexOf('.')
      var full = name.substr(0, dotStart)
      return full
    },
    currentObject: function () {
      var self = this
      var rootFolders = this.filesystem.children
      var compFolder = rootFolders.find(function (child) {
        return child.name === 'components'
      })
      var currentObject = compFolder.children.find(function (child) {
        return child.name === self.$route.params.name
      })
      return currentObject
    },
    codeArray: function () {
      var array = []
      var srcDir = this.currentObject.children
      for (var file in srcDir) {
        var current = srcDir[file].name
        var extensionStart = current.lastIndexOf('.')
        var codeObject = {
          code: require(`!raw-loader!~/components/${this.$route.params.name}/${current}`),
          name: current.substr(0, extensionStart)
        }
        if (current.endsWith('.html')) {
          codeObject.language = 'xml'
        } else if (current.endsWith('.vue')) {
          codeObject.language = 'xml'
        } else if (current.endsWith('.js')) {
          codeObject.language = 'js'
        } else if (current.endsWith('.scss')) {
          codeObject.language = 'scss'
        } else if (current.endsWith('.css')) {
          codeObject.language = 'css'
        }
        // if (current !== 'index.vue') {
        array.push(codeObject)
        // }
      }
      return array
    },
    selectedCode: function () {
      var selected = this.selected
      return this.codeArray[selected]
    }
  }
}
</script>

<style lang="scss" module>

/* Dependencies
========================================================================== */
@value o-text "sass-loader!~/assets/styles/objects/objects.text.scss";
@value o-heading "sass-loader!~/assets/styles/objects/objects.heading.scss";
@value o-box "sass-loader!~/assets/styles/objects/objects.box.scss";
@value o-list-inline "sass-loader!~/assets/styles/objects/objects.list-inline.scss";

@value c-button "sass-loader!~/assets/styles/cosmetics/cosmetics.button.scss";
@value c-border "sass-loader!~/assets/styles/cosmetics/cosmetics.border.scss";
@value c-shadow "sass-loader!~/assets/styles/cosmetics/cosmetics.shadow.scss";
@value c-background-color "sass-loader!~/assets/styles/cosmetics/cosmetics.background-color.scss";
@value c-text-color "sass-loader!~/assets/styles/cosmetics/cosmetics.text-color.scss";
@value c-text-style "sass-loader!~/assets/styles/cosmetics/cosmetics.text-style.scss";

@value u-spacings "sass-loader!~/assets/styles/utilities/utilities.spacings.scss";





/* Heading
========================================================================== */
.heading {
  composes: heading heading--alpha  from o-heading;
  composes: margin-bottom-md  from u-spacings;
}


.nav {
  composes: neutral-00  from c-background-color;
  composes: bottom heavy  from c-border;
}

.navList {
  composes: list-inline list-inline--flush  from o-list-inline;
}

.navItem {
  composes: list-inline__item  from o-list-inline;
}




.componentWrapper {
  composes: margin-bottom-md  from u-spacings;
}


.radio {
  display: none;
}
.radio:checked {
  ~ .label {
    color: white !important;
  }
}
.label {
  composes: text text--sm  from o-text;
  composes: neutral-70  from c-text-color;
  composes: hover-orange  from c-background-color;
  composes: bold  from c-text-style;
  composes: padding-sm  from u-spacings;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
}

</style>
