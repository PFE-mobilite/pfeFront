<template>
  <div class="container bg-white">
    <div class="row">
      <div class="col">
        <div class="card border-0">
          <h5 class="profiled text-muted text-left text-capitalize py-2">detail profile</h5>
          <img class="card-img-top" src="../../assets/cust3.jpeg" alt="Card image cap">
          <div class="card-body">
            <i class="fas fa-user text-muted text-left mr-1"></i><input type="text" v-model="clientinto.nom"><br>
            <i class="fas fa-at text-muted text-left mt-1 mr-1"></i><input type="text" v-model="clientinto.email"><br>
            <i class="fas fa-building text-muted text-left mt-1 mr-1"></i><input type="text" v-model="clientinto.raison_social">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clientinto: {
        id: 1,
        raison_social: 'Samsung',
        nom: 'kais',
        prenom: 'skander',
        email: 'kaisska@gmail.com'
      }
    }
  }
}
</script>

<style scoped>
  input{
    background-color: transparent;
    border: transparent;
    font-size: 1.25rem;
    color: #6c757d;
  }
  input:focus{
    background-color: transparent;
    border: transparent;
    font-size: 1.25rem;
    color: #6c757d;
    user-focus: 0;
  }
</style>
