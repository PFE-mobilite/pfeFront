<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-edit">
          <div class="card-header text-white">
            Ajouter Client
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-3 ml-5 align-items-center">
                <div class="row ">
                  <div class="card card-photo-c border-0">
                    <div class="card-body">
                      <b-avatar variant="info" size="15rem"></b-avatar>
                    </div>
                    <div class="card-footer border-0 bg-f">
                      <button class="btn btn-outline-info btn-block">Edit photo</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col ml-5 align-items-center mr-5">
                <div class="row">
                  <label for="">Nom</label>
                  <input type="text" class="form-control" placeholder="Nom" v-model="client.nom">
                </div>
                <div class="row">
                  <label for="">Prenom</label>
                  <input type="text" class="form-control" placeholder="Prenom" v-model="client.prenom">
                </div>
                <div class="row">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="client.email">
                </div>
                <div class="row">
                  <label for="">Raison Sociale</label>
                  <input type="text" class="form-control" placeholder="Raison Sociale" v-model="client.raisonSociale">
                </div>
                <div class="row d-flex flex-row-reverse">
                  <button type="button" class="btn btn-outline-info mt-3 px-4" @click="onSubmitC">Ajouter</button>
                </div>
              </div>
            </div>
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
      client: {
        nom: '',
        prenom: '',
        email: '',
        raisonSociale: ''
      },
      id_entreprise: ''
    }
  },
  methods: {
    onSubmitC () {
      const formData = {
        raisonSociale: this.client.raisonSociale
      }
      console.log(formData)
      axios.post('http://localhost:8080/api/entreprises', formData, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        this.id_entreprise = response.data.id
        const newContact = {
          entreprise: this.id_entreprise,
          nom: this.client.nom,
          prenom: this.client.prenom,
          email: this.client.email,
          password: 'hiiiii'
        }
        console.log('contact a ajouter')
        console.log(newContact)
        axios.post('http://localhost:8080/api/contacts', newContact, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
          this.id_entreprise = response.data.id
        }).catch((error) => console.log(error))
        console.log('+++++++++++Success+++++++')
      }).catch((error) => console.log(error))
      console.log('+++++++++++Success+++++++')
    }
  }
}
</script>

<style scoped>
  .card-edit{
    margin-top: 50px;
    background: #2f4050;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  input{
    background: transparent;
    color: white;
  }
  input:focus{
    background: transparent;
    color: white;
  }
  textarea{
    background: transparent;
  }
  label{
    color: white;
  }
  .bg-f{
    background-color: transparent;
  }
  .card-photo-c{
    margin-top: 1px;
    background-color: transparent;
  }
</style>
