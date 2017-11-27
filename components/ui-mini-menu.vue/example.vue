<template>
  <ui-card>
    <ui-mini-menu>
      <ui-menu-item label="Menu item" @labelClicked="act('xyz')"/>
      <ui-menu-item label="Another menu item" @labelClicked="act('xyz')"/>
    </ui-mini-menu>
  </ui-card>
</template>

<script>
import uiMenuItem from '~/components/ui-menu-item.vue'
import uiCard from '~/components/ui-card.vue'
export default {
  components: {
    uiMenuItem,
    uiCard
  },
  methods: {
    act: function (value) {
      alert(value)
    }
  }
}
</script>
