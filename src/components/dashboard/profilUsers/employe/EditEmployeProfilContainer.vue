<template>
  <div id="">
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col"><EditProfil></EditProfil></div>
         <div class="col-3"><UserCard></UserCard></div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from './EmployeProfilminiCard.vue'
import EditProfil from './EditEmployeProfilCard'
export default {
  components: {
    UserCard,
    EditProfil
  },
  created () {
    this.$store.dispatch('initEmploye')
  }
}
</script>

<style scoped>
</style>
