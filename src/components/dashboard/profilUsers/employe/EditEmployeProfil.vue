<template>
  <div id="userprofil">
    <div class="container-fluid">
      <div class="row">
        <div class="col"><EditProfil></EditProfil></div>
         <div class="col-3"><UserCard></UserCard></div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'
import EditProfil from './EditProfil'
export default {
  components: {
    UserCard,
    EditProfil
  }
}
</script>

<style scoped>
  #userprofil{
    height: 100vh;
    background-color: #0d152c;
  }
</style>
