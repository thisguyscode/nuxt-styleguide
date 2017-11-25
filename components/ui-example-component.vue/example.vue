<template>
  <ui-example-component :donutValue="donutValue" heading="This heading">
    Itaque qui voluptates quia. Veniam quidem ducimus expedita animi quae. Et dolorem neque laboriosam illo consequatur quaerat quia quos. Aut dolor nesciunt saepe voluptatem vitae.
  </ui-example-component>
</template>

<script>
export default {
  computed: {
    donutValue: function () {
      return 90 * 10
    }
  }
}
</script>
