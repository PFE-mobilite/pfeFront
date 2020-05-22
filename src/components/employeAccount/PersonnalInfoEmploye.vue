<template>
  <div class="container-fluid bg-light mb-5">
    <div class="row">
      <div class="col-6 pr-2">
        <h5 class="profiled text-muted text-left text-capitalize py-2">detail profile</h5>
        <img class="card-img-top" src="../../assets/cust3.jpeg" alt="Card image cap">
        <div class="row my-3">
          <div class="col-3 mx-0 mt-3">
            <label for="" class="text-muted">Nom:</label>
          </div>
          <div class="col px-0 ml-2 mt-1">
            <input type="text" class="form-control" placeholder="Nom"  v-model="employe.nom">
          </div>
        </div>
        <div class="row my-3">
          <div class="col-3 mx-0 mt-3">
            <label for="" class="text-muted">Prenom:</label>
          </div>
          <div class="col px-0 ml-1 mt-1">
            <input type="text" class="form-control" placeholder="Prenom"  v-model="employe.prenom">
          </div>
        </div>
        <div class="row my-3">
          <div class="col-3 mx-0 mt-3">
            <label for="" class="text-muted">Email:</label>
          </div>
          <div class="col px-0 ml-1 mt-1">
            <input type="text" class="form-control" placeholder="Email"  style="width: 250px" v-model="employe.email">
          </div>
        </div>
      </div>
      <div class="col-6 mt-3 px-3">
        <div class="row my-3">
          <div class="col-3 mx-0 mt-3">
            <label for="" class="text-muted">Poste:</label>
          </div>
          <div class="col px-0 ml-1 mt-1">
            <input type="text" class="form-control" placeholder="Poste"  v-model="employe.poste">
          </div>
        </div>
        <div class="row my-3">
          <div class="col-3 mx-0 mt-3">
            <label for="" class="text-muted">Service:</label>
          </div>
          <div class="col px-0 ml-1 mt-1">
            <input type="text" class="form-control" placeholder="service"  v-model="employe.service">
          </div>
        </div>
        <div class="row my-3">
          <div class="col-3 mx-0 mt-3">
            <label for="" class="text-muted ">Diplome:</label>
          </div>
          <div class="col px-0 ml-1 mt-1">
            <input type="text" class="form-control" placeholder="diplome"  v-model="employe.diplome">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col mx-0 mt-4">
            <label for="" class="text-muted text-capitalize">Date de recrutement:</label>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col mx-0">
            <input type="date" class="form-control" placeholder="date_recrutement" style="width: 250px" v-model="employe.date_recrutement">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col mx-0 mt-1">
            <label for="" class="text-muted text-capitalize">Valeur H/J:</label>
          </div>
        </div>
        <div class="row">
          <div class="col mx-0 mt-1">
            <input type="number" class="form-control" placeholder="valeur_HJ" style="width: 250px" v-model="employe.valeur_HJ">
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  data () {
    return {
      employe: {
        nom: 'skander',
        prenom: 'kais',
        email: 'kaisska@gmail.com',
        poste: 'batal',
        service: 'webservice',
        diplome: 'LICENCE',
        date_recrutement: '12/05/2020',
        valeur_HJ: '20$'
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
    border-bottom: 1px solid #999999;
    font-size: 1.5rem;
    color: #6c757d;
    box-shadow: none;
    width: 200px;
  }
  input:focus{
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: 1.5rem;
  }
  input:focus{
    background: transparent;
    box-shadow: none;
    border-bottom: 2px solid #2f4050 ;
  }

  label{
    font-size: 1.25rem;
    color: #6c757d;
  }
</style>
