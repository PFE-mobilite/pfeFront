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
        <div class="row pt-5 px-5 mb-1 d-flex flex-row-reverse">
            <button class="btn btn-secondary mt-5" @click="edit">Modifier</button>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      employe: {
        nom: '',
        prenom: '',
        email: '',
        poste: '',
        service: '',
        diplome: '',
        date_recrutement: ''
      },
      id: this.$store.getters.getUserId
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/employes/' + this.id).then(res => {
      const dataImported = res.data
      this.employe.nom = dataImported.nom
      this.employe.prenom = dataImported.prenom
      this.employe.email = dataImported.email
      this.employe.poste = dataImported.poste
      this.employe.service = dataImported.service
      this.employe.diplome = dataImported.diplome
      this.employe.date_recrutement = dataImported.datederecrutement.substring(0, 10)
    }).catch(err => console.log(err))
  },
  methods: {
    edit () {
      const empModifier = {
        nom: this.employe.nom,
        prenom: this.employe.prenom,
        email: this.employe.email,
        poste: this.employe.poste,
        service: this.employe.service,
        diplome: this.employe.diplome,
        datederecrutement: this.employe.date_recrutement
      }
      console.log(empModifier)
      axios.put('http://localhost:8080/api/employes/' + this.id, empModifier, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        console.log(response)
      }).catch((error) => console.log(error))
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
