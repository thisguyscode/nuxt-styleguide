import uiDirectoryItem from '~/components/ui-directory-item.vue'
export default {
  props: {
    root: {
      type: Object,
      required: false
    }
  },
  components: {
    uiDirectoryItem
  }
}
