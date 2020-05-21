<template>
  <div class="row mx-0">
    <div class="col-2 px-0">
      <SidebarEmploye></SidebarEmploye>
    </div>
    <div class="col px-0">
      <TopNavbarEmploye></TopNavbarEmploye>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNavbarEmploye from '../components/employeAccount/EmployeTopNavbar'
import SidebarEmploye from '../components/employeAccount/EmployeSidebar'
export default {
  components: {
    TopNavbarEmploye,
    SidebarEmploye
  }
}
</script>

<style scoped>
  body, html {
    background-color: #eeeeee;
  }
</style>
