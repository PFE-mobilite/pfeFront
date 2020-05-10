<template>
  <div id="dashboard">
    <TopNavbar></TopNavbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNavbar from '../components/dashboard/TopNavbar'
export default {
  components: {
    TopNavbar
  }
}
</script>

<style lang="scss">
  body, html {
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url("../assets/opg.jpg") no-repeat fixed center /cover;
  }
</style>
