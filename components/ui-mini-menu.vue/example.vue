<template>
  <ui-mini-menu>
    <li @click="act">
      <ui-icon name="eye"/>
      <span>Text</span>
    </li>
  </ui-mini-menu>
</template>

<script>
export default {
  computed: {
    menuList: function () {
      var array = []
      for (var i = 0; i < this.menuItems.length; i++) {
        var current = this.menuItems[i]
        current.action = this.act()
        array.push(current)
      }
      return array
    }
  },
  methods: {
    act: function () {
      console.log('abc')
    }
  }
}
</script>
