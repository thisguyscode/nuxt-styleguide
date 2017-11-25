import uiDonut from '~/components/ui-donut.vue'
import uiMiniMenu from '~/components/ui-mini-menu.vue'
export default {
  props: {
    donutValue: {
      required: false,
      default: 'XX'
    },
    heading: {
      type: String,
      required: false
    }
  },
  components: {
    uiDonut,
    uiMiniMenu
  }
}
