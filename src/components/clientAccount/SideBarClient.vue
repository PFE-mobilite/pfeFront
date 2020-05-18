<template>
  <div class=" col-xl-2 col-lg-2 col-md-3 sidebar bg-dark fixed-top">
    <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Mobelite</a>
    <ul class="navbar-nav flex-column mt-4">
      <li class="nav-item"><PersonnalCard></PersonnalCard></li>
      <li class="nav-item"></li>
      <li class="nav-item"></li>
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

</style>
