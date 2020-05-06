<template>
  <div>
    <the-header />
    <div class="wrapper">
      <nuxt class="container" />
    </div>
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>
