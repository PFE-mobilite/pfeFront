<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
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
                <label for="">Valeur H/J</label>
                <input type="number" class="form-control" placeholder="Valeur H/J" v-model="employe.valeur_HJ">
              </div>
              <div class="col-md-4 mt-4">
                  <button type="button" class="btn btn-outline-info btn-block mt-2" @click="edit()">Save</button>
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
        date_recrutement: '',
        valeur_HJ: ''
      },
      id: this.$route.params.id
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/employes/' + this.id).then(res => {
      console.log(res.data)
      const employeImported = res.data
      this.employe.nom = employeImported.nom
      this.employe.prenom = employeImported.prenom
      this.employe.email = employeImported.email
      this.employe.poste = employeImported.poste
      this.employe.service = employeImported.service
      this.employe.diplome = employeImported.diplome
      this.employe.date_recrutement = employeImported.date_recrutement
    }).catch(error => console.log(error))
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
        date_recrutement: this.employe.date_recrutement,
        valeur_HJ: this.employe.valeur_HJ
      }
      console.log(employemodifier)
      axios.put('http://localhost:8080/api/employes/' + this.id, employemodifier, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
      return this.modifierEmployeProfil(employemodifier)
    }
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
  }
  textarea{
    background: transparent;
  }
  label{
    color: white;
  }
</style>
