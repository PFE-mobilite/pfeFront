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
                <input type="text" class="form-control" placeholder="Nom" v-model="employe.nom"
                       @blur="$v.employe.nom.$touch()"
                       :class="{inputInvalide: $v.employe.nom.$error}">
                <p v-if="$v.employe.nom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Prenom</label>
                <input type="text" class="form-control" placeholder="Prenom" v-model="employe.prenom"
                       @blur="$v.employe.prenom.$touch()"
                       :class="{inputInvalide: $v.employe.prenom.$error}">
                <p v-if="$v.employe.prenom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 pr-md-1">
                <label for="">Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="employe.email"
                       @input="$v.employe.email.$touch()"
                       :class="{inputInvalide: $v.employe.email.$error}">
                <p v-if="!$v.employe.email.email" class="text-danger">Format email erroné</p>
              </div>
              <div class="col-md-3 pr-md-1">
                <label for="">Poste</label>
                <input type="text" class="form-control" placeholder="Poste" v-model="employe.poste"
                       @blur="$v.employe.poste.$touch()"
                       :class="{inputInvalide: $v.employe.poste.$error}">
                <p v-if="$v.employe.poste.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
              <div class="col-md-4 pr-md-1">
                <label for="">Servie</label>
                <input type="text" class="form-control" placeholder="Service" v-model="employe.service"
                       @blur="$v.employe.service.$touch()"
                       :class="{inputInvalide: $v.employe.service.$error}">
                <p v-if="$v.employe.service.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Diplome</label>
                <input type="text" class="form-control" placeholder="Diplome" v-model="employe.diplome"
                       @blur="$v.employe.diplome.$touch()"
                       :class="{inputInvalide: $v.employe.diplome.$error}">
                <p v-if="$v.employe.diplome.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date de recrutement</label>
                <input type="date" class="form-control" placeholder="Date de recrutement" v-model="employe.date_recrutement"
                       @blur="$v.employe.date_recrutement.$touch()"
                       :class="{inputInvalide: $v.employe.date_recrutement.$error}">
                <p v-if="$v.employe.date_recrutement.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
              </div>
              <div class="col-md-4 mt-4">
                  <button type="button" :disabled="$v.$invalid" class="btn btn-outline-info btn-block mt-2" @click="edit()">Modifier</button>
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
import { required, email } from 'vuelidate/lib/validators'
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
  },
  validations: {
    employe: {
      nom: {
        required
      },
      prenom: {
        required
      },
      email: {
        required,
        email
      },
      poste: {
        required
      },
      service: {
        required
      },
      date_recrutement: {
        required
      },
      diplome: {
        required
      }
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
    color: white;
  }
  input:focus{
    background: transparent;
    color: white;
  }
  .inputInvalide{
    border-color: red;
  }
  .inputInvalide:focus{
    border-color: red;
  }
  textarea{
    background: transparent;
  }
  label{
    color: white;
  }
</style>
