<template>
  <ui-card>
    <ui-mini-menu>
      <ui-menu-item label="X"></ui-menu-item>
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
  }
}
</script>
