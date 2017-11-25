import uiDonut from '~/components/ui-donut.vue'
import uiMiniMenu from '~/components/ui-mini-menu.vue'
export default {
  props: {
    donutValue: {
      type: Number,
      required: true
    },
    donutOutOf: {
      type: Number,
      default: 100
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
