import uiDonut from '~/components/ui-donut.vue'
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
    uiDonut
  }
}
