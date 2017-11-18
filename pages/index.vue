<template>
  <section>
    <p><nuxt-link to='/blank/'>Go to another page</nuxt-link></p>
    <ui-a/>
    <ui-b/>
    <ui-c/>
  </section>
</template>

<script>
import uiA from '~/components/ui-a'
import uiB from '~/components/ui-b'
import uiC from '~/components/ui-c'
export default {
  components: {
    uiA,
    uiB,
    uiC
  }
}
</script>
