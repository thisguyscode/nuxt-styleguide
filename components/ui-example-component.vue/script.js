import uiDonut from '~/components/ui-donut.vue'
export default {
  props: {
    heading: {
      type: String,
      required: false
    }
  },
  components: {
    uiDonut
  },
  computed: {
    donutValue: function () {
      return 123
    }
  }
}
