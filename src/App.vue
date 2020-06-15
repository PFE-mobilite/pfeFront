<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>
<style>
</style>
