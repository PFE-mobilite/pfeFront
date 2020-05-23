<template>
  <div>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col"><EditProfil></EditProfil></div>
        <div class="col-3"><ClientProfilminiCard></ClientProfilminiCard></div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientProfilminiCard from '../clients/ClientProfilminiCard'
import EditProfil from '../clients/EditProfilCard'
export default {
  components: {
    ClientProfilminiCard,
    EditProfil
  },
  created () {
    this.$store.dispatch('initCLient')
  }
}
</script>

<style scoped>
</style>
