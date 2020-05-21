<template>
  <div class=" col-xl-2 col-lg-2 col-md-3 sidebar-1 fixed-top">
    <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Mobelite</a>
    <ul class="navbar-nav flex-column mt-4">
      <li class="nav-item"><PersonnalCard></PersonnalCard></li>
      <router-link to="/profile-client"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-user text-light fa-lg mr-3"></i>Profile</a></li></router-link>
      <router-link to="projets-client"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-toolbox  text-light fa-lg mr-3"></i>Projets</a></li></router-link>
      <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-wrench text-light fa-lg mr-3"></i>Settings</a></li>
      <li class="nav-item">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </li>
    </ul>
  </div>
</template>

<script>
import PersonnalCard from './PersonnalCard'
export default {
  components: {
    PersonnalCard
  }
}
</script>

<style scoped>
.sidebar-1{
  background-color: #2f4050;
}
</style>
