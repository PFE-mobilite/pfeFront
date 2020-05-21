<template>
  <div class="container bg-white">
    <div class="row">
      <div class="col">
        <div class="card border-0">
          <h5 class="profiled text-muted text-left text-capitalize py-2">detail profile</h5>
          <img class="card-img-top" src="../../assets/cust3.jpeg" alt="Card image cap">
          <div class="card-body">
            <label for="" class="text-muted px-2"><i class="fas fa-user text-muted text-left mr-1"></i>Nom:<input type="text" class="mx-2" style="width: 100px" v-model="clientinto.nom"></label><br>
            <label for="" class="text-muted px-2"><i class="fas fa-user text-muted text-left mr-1"></i>Prenom:<input type="text" class="mx-2" style="width: 100px" v-model="clientinto.prenom"></label><br>
            <label for="" class="text-muted px-2"><i class="fas fa-at text-muted text-left mt-1 mr-1"></i>Email:<input type="text"  class="mx-1" style="width: 170px" v-model="clientinto.email"></label><br>
            <label for="" class="text-muted px-2"><i class="fas fa-building text-muted text-left mt-1 mr-1"></i>Société:<input type="text"  class="mx-1" style="width: 100px"  v-model="clientinto.raison_social"></label>
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
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: 1.25rem;
    color: #6c757d;
    box-shadow: none;
  }
  input:focus{
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: 1.25rem;
  }
  label{
    font-size: 1.25rem;
    color: #6c757d;
  }
</style>
