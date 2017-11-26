<template>
  <section>
    
    <ui-page-heading icon="file-o">{{ $route.params.name }}</ui-page-heading>

    <section :class="$style.componentSection">
      <ui-card :class="$style.componentWrapper" contrast="heavy">
        <div :class="$style.componentInner">
          <component :is="componentName + '-example'"></component>
        </div>
      </ui-card>
    </section>

    <section :class="$style.codeSection">
      <ui-code-set :class="$style.codeSet" :codeSet="codeArray"/>
    </section>

  </section>
</template>

<script>
require('~/plugins/all-components.js')

export default {
  computed: {
    filesystem: function () {
      return this.$store.state.filesystem
    },
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
      for (var i = 0; i < srcDir.length; i++) {
        var current = srcDir[i]
        var extensionStart = current.name.lastIndexOf('.')
        var codeObject = {
          code: require(`!raw-loader!~/components/${this.$route.params.name}/${current.name}`),
          name: current.name.substr(0, extensionStart)
        }
        if (current.name.endsWith('.html')) {
          codeObject.language = 'xml'
        } else if (current.name.endsWith('.vue')) {
          codeObject.language = 'xml'
        } else if (current.name.endsWith('.js')) {
          codeObject.language = 'js'
        } else if (current.name.endsWith('.scss')) {
          codeObject.language = 'scss'
        } else if (current.name.endsWith('.css')) {
          codeObject.language = 'css'
        }
        // if (current.name !== 'index.vue') {
        array.push(codeObject)
        // }
      }
      return array
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
@value o-liner "sass-loader!~/assets/styles/objects/objects.liner.scss";
@value o-page-section "sass-loader!~/assets/styles/objects/objects.page-section.scss";

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
  composes: heading heading--beta  from o-heading;
  composes: margin-bottom-md  from u-spacings;
}

.headingIcon {
  composes: margin-right-sm  from u-spacings;
  height: .8em;
}

.subheading {
  composes: heading heading--gamma  from o-heading;
  // composes: margin-bottom-md  from u-spacings;
}


.nav {
  composes: neutral-10  from c-background-color;
  composes: bottom heavy  from c-border;
  composes: padding-right-xl  from u-spacings;
  position: relative;
}

.navList {
  composes: list-inline list-inline--flush  from o-list-inline;
}

.navItem {
  composes: list-inline__item  from o-list-inline;
}




.componentSection {
  composes: page-section padded-x  from o-page-section;
}


.codeSection {
  composes: page-section padded-x  from o-page-section;
  composes: marging-bottom-lg  from u-spacings;
}



.componentWrapper {
  composes: margin-bottom-md  from u-spacings;
}

.componentInner {
  position: relative;
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
  // text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
}




.codeToggle {
  composes: text text--sm  from o-text;
  composes: bold  from c-text-style;
  composes: padding-sm  from u-spacings;
  composes: liner liner--break-left  from o-liner;
  display: block;
  cursor: pointer;
  text-transform: uppercase;
}

.codeToggleText {
  composes: margin-right-xs  from u-spacings;
}

.codeToggleIcon {
  position: relative;
  height: 1em;
  vertical-align: text-top;
}


.codeSet {
  composes: margin-bottom-md  from u-spacings;
}

</style>
