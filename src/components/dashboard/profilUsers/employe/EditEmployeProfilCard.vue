<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="employe.nom" v-bind:action="action"></Alerting>
        <div class="card card-edit">
          <div class="card-header text-white">
            Edit Profile
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Nom</label>
                <input type="text" class="form-control" placeholder="Nom" v-model="employe.nom">
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Prenom</label>
                <input type="text" class="form-control" placeholder="Prenom" v-model="employe.prenom">
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 pr-md-1">
                <label for="">Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="employe.email">
              </div>
              <div class="col-md-3 pr-md-1">
                <label for="">Poste</label>
                <input type="text" class="form-control" placeholder="Poste" v-model="employe.poste">
              </div>
              <div class="col-md-4 pr-md-1">
                <label for="">Servie</label>
                <input type="text" class="form-control" placeholder="Service" v-model="employe.service">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Diplome</label>
                <input type="text" class="form-control" placeholder="Diplome" v-model="employe.diplome">
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date de recrutement</label>
                <input type="date" class="form-control" placeholder="Date de recrutement" v-model="employe.date_recrutement">
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
              </div>
              <div class="col-md-4 mt-4">
                  <button type="button" class="btn btn-outline-info btn-block mt-2" @click="edit()">Modifier</button>
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
import Alerting from '../../../Alertshowing/Alerting'
import { mapActions } from 'vuex'
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
      id: this.$route.params.id,
      success: false,
      failed: false,
      action: 'modifié'
    }
  },
  created () {
    axios.get('http://localhost:8080/api/employes/' + this.id).then(res => {
      console.log(res.data)
      const employeImported = res.data
      this.employe.nom = employeImported.nom
      this.employe.prenom = employeImported.prenom
      this.employe.email = employeImported.email
      this.employe.poste = employeImported.poste
      this.employe.service = employeImported.service
      this.employe.diplome = employeImported.diplome
      this.employe.date_recrutement = employeImported.datederecrutement.substring(0, 10)
      this.modifierEmployeProfil(this.employe)
    }).catch(error => console.log(error))
  },
  updated () {
    const employemodifier = {
      nom: this.employe.nom,
      prenom: this.employe.prenom,
      email: this.employe.email,
      poste: this.employe.poste
    }
    this.modifierEmployeProfil(employemodifier)
  },
  methods: {
    ...mapActions({
      modifierEmployeProfil: 'editEmploye'
    }),
    edit () {
      const employemodifier = {
        nom: this.employe.nom,
        prenom: this.employe.prenom,
        email: this.employe.email,
        poste: this.employe.poste,
        service: this.employe.service,
        diplome: this.employe.diplome,
        datederecrutement: this.employe.date_recrutement
      }
      console.log(employemodifier)
      axios.put('http://localhost:8080/api/employes/' + this.id, employemodifier, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        console.log(response)
        this.success = true
      }).catch((error) => {
        console.log(error)
        this.failed = true
      })
      console.log('++++++++Success++++++++++')
      return this.modifierEmployeProfil(employemodifier)
    }
  },
  components: {
    Alerting
  }
}
</script>

<style scoped>
  .card-edit{
    margin-top: 50px;
    background-color: #2f4050;
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
</style>
