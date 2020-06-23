<template>
  <div class="container bg-white">
    <div class="row">
      <div class="col">
        <div class="card border-0">
          <h5 class="profiled text-muted text-left text-capitalize py-2">detail profile</h5>
          <img class="card-img-top" src="../../assets/cust1.jpeg" alt="Card image cap">
          <div class="card-body">
            <label for="" class="text-muted px-2"><i class="fas fa-user text-muted text-left mr-1"></i>Nom:<input type="text" class="mx-2" style="width: 100px" v-model="clientinto.nom"></label><br>
            <label for="" class="text-muted px-2"><i class="fas fa-user text-muted text-left mr-1"></i>Prenom:<input type="text" class="mx-2" style="width: 100px" v-model="clientinto.prenom"></label><br>
            <label for="" class="text-muted px-2"><i class="fas fa-at text-muted text-left mt-1 mr-1"></i>Email:<input type="text"  class="mx-1" style="width: 170px" v-model="clientinto.email"></label><br>
            <label for="" class="text-muted px-2"><i class="fas fa-building text-muted text-left mt-1 mr-1"></i>Société:<input type="text"  class="mx-1" style="width: 100px"  v-model="clientinto.raison_social" disabled></label><br>
            <button class="btn btn-secondary text-left" @click="modifier">Modifier</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      clientinto: {
        raison_social: '',
        nom: '',
        prenom: '',
        email: ''
      },
      id: this.$store.getters.getUserId
    }
  },
  created () {
    axios.get('http://localhost:8080//api/contacts/' + this.id).then(res => {
      const dataImported = res.data
      console.log(dataImported)
      this.clientinto.nom = dataImported.nom
      this.clientinto.prenom = dataImported.prenom
      this.clientinto.email = dataImported.email
      this.clientinto.raison_social = dataImported.entreprise.raisonSociale
    }).catch(err => console.log(err))
  },
  methods: {
    modifier () {
      const clientModifier = {
        nom: this.clientinto.nom,
        prenom: this.clientinto.prenom,
        email: this.clientinto.email
      }
      console.log(clientModifier)
      axios.put(' http://localhost:8080/api/contacts/' + this.id, clientModifier, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
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
