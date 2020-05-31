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
                  <input type="text" class="form-control" placeholder="Raison Sociale" v-model="client.raison_social">
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
        RaisonSociale: ''
      }
    }
  },
  methods: {
    onSubmitC () {
      const formData = {
        nom: this.employe.nom,
        prenom: this.employe.prenom,
        email: this.employe.email,
        password: 'blibli'
      }
      console.log(formData)
      axios.post('http://localhost:8080/api/?', formData, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
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
