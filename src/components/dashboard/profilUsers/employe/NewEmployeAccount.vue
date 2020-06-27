<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="employe.nom" v-bind:action="action"></Alerting>
        <div class="card card-edit">
          <div class="card-header text-white">
            Ajouter Employe
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-3 ml-5 align-items-center">
                <div class="row">
                  <div class="card card-photo border-0">
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
                  <input type="text" class="form-control" placeholder="Nom" v-model="employe.nom"
                         @blur="$v.employe.nom.$touch()"
                         :class="{inputInvalide: $v.employe.nom.$error}">
                  <p v-if="$v.employe.nom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Prenom</label>
                  <input type="text" class="form-control" placeholder="Prenom" v-model="employe.prenom"
                         @blur="$v.employe.prenom.$touch()"
                         :class="{inputInvalide: $v.employe.prenom.$error}">
                  <p v-if="$v.employe.prenom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="employe.email"
                         @blur="$v.employe.email.$touch()"
                         :class="{inputInvalide: $v.employe.email.$error}">
                  <p v-if="!$v.employe.email.email" class="text-danger">Format email erroné</p>
                </div>
                <div class="row">
                  <label for="">Poste</label>
                  <input type="text" class="form-control" placeholder="Poste" v-model="employe.poste"
                         @blur="$v.employe.poste.$touch()"
                         :class="{inputInvalide: $v.employe.poste.$error}">
                  <p v-if="$v.employe.poste.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Service</label>
                  <input type="text" class="form-control" placeholder="Service" v-model="employe.service"
                         @blur="$v.employe.service.$touch()"
                         :class="{inputInvalide: $v.employe.service.$error}">
                  <p v-if="$v.employe.service.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Date de recurtememnt</label>
                  <input type="date" class="form-control" placeholder="date de recrutement" v-model="employe.date_recrutement"
                         @blur="$v.employe.date_recrutement.$touch()"
                         :class="{inputInvalide: $v.employe.date_recrutement.$error}">
                  <p v-if="$v.employe.date_recrutement.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Diplome</label>
                  <select name="" id="" class="form-control" v-model="employe.diplome">
                    <option value="diplôme licence">diplôme licence</option>
                    <option value="diplôme d'ingénieur">diplôme d'ingénieur</option>
                    <option value="diplôme master">diplôme master</option>
                    <option value="diplôme doctorat">diplôme doctorat</option>
                  </select>
                </div>
                <div class="row d-flex flex-row-reverse mt-3">
                  <button type="button" class="btn btn-outline-info" :disabled="$v.$invalid" @click="onSubmit">Ajouter</button>
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
import Alerting from '../../../Alertshowing/Alerting'
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
        date_recrutement: '',
        diplome: ''
      },
      success: false,
      failed: false,
      action: 'ajouté'
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        nom: this.employe.nom,
        prenom: this.employe.prenom,
        email: this.employe.email,
        poste: this.employe.poste,
        service: this.employe.service,
        datederecrutement: this.employe.date_recrutement,
        diplome: this.employe.diplome,
        password: 'blibli',
        photo: 'blabla'
      }
      console.log(formData)
      axios.post('http://localhost:8080/api/employes', formData, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        console.log(response)
        this.success = true
      }).catch((error) => {
        console.log(error)
        this.failed = true
      })
      console.log('++++++++Success++++++++++')
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
    background: #2f4050;
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
  label{
    color: white;
  }
  .b-edit{
    margin-top: 25px;
    margin-left: 55px;
  }
  .card-photo{
    margin-top: 30px;
    background-color: transparent;
  }
  .bg-f{
    background-color: transparent;
  }
  select{
    background: transparent;
    color: white;
  }
</style>
