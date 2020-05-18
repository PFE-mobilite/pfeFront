<template>
    <div class="row mx-0">
      <div class="col-2 px-0">
        <SidebarClient></SidebarClient>
      </div>
      <div class="col px-0">
        <TopNavbarClient></TopNavbarClient>
      </div>
    </div>
</template>

<script>
import TopNavbarClient from '../components/clientAccount/TopNavbarClient'
import SidebarClient from '../components/clientAccount/SideBarClient'
export default {
  components: {
    TopNavbarClient,
    SidebarClient
  }
}
</script>

<style scoped>
  body, html {
    background-color: #eeeeee;
  }
</style>
