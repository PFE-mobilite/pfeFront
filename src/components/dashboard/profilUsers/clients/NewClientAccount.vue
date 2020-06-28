<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="client.nom" v-bind:action="action"></Alerting>
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
                  <label for="">Raison Sociale</label>
                  <input type="text" class="form-control" placeholder="Raison Sociale" v-model="client.raisonSociale"
                         @blur="$v.client.raisonSociale.$touch()"
                         :class="{inputInvalide: $v.client.raisonSociale.$error}">
                  <p v-if="$v.client.raisonSociale.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Nom</label>
                  <input type="text" class="form-control" placeholder="Nom" v-model="client.nom"
                         @blur="$v.client.nom.$touch()"
                         :class="{inputInvalide: $v.client.nom.$error}">
                  <p v-if="$v.client.nom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Prenom</label>
                  <input type="text" class="form-control" placeholder="Prenom" v-model="client.prenom"
                         @blur="$v.client.prenom.$touch()"
                         :class="{inputInvalide: $v.client.prenom.$error}">
                  <p v-if="$v.client.prenom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="client.email"
                         @blur="$v.client.email.$touch()"
                         :class="{inputInvalide: $v.client.email.$error}">
                  <p v-if="!$v.client.email.email" class="text-danger">Format email erroné</p>
                </div>
                <div class="row" v-if="!randomizedPassword">
                  <label for="">Mot de passe</label>
                  <input type="text" class="form-control" placeholder="mot de passe" v-model="client.password">
                </div>
                <div class="row">
                  <label class="mt-1">
                    <input type="radio" name="options" id="option2" autocomplete="off" :checked="randomizedPassword" @click="randomizedPassword = !randomizedPassword"> Générer mot de passe
                  </label>
                </div>
                <div class="row d-flex flex-row-reverse">
                  <button type="button" class="btn btn-outline-info mt-3 px-4" :disabled="$v.$invalid" @click="onSubmitC">Ajouter</button>
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
      client: {
        nom: '',
        prenom: '',
        email: '',
        raisonSociale: '',
        password: ''
      },
      id_entreprise: '',
      success: false,
      failed: false,
      action: 'ajouté',
      randomizedPassword: false
    }
  },
  methods: {
    randomizPassword () {
      if (this.randomizedPassword) {
        var generator = require('generate-password')
        var password1 = generator.generate({
          length: 10,
          numbers: true
        })
        this.password = password1
        return this.password
      } else {
        return this.password
      }
    },
    onSubmitC () {
      const formData = {
        raisonSociale: this.client.raisonSociale
      }
      console.log(formData)
      axios.post('http://localhost:8080/api/entreprises', formData, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        this.id_entreprise = response.data.id
        const password = this.randomizPassword()
        const newContact = {
          entreprise: this.id_entreprise,
          nom: this.client.nom,
          prenom: this.client.prenom,
          email: this.client.email,
          password
        }
        console.log('contact a ajouter')
        console.log(newContact)
        axios.post('http://localhost:8080/api/contacts', newContact, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
          this.success = true
          this.id_entreprise = response.data.id
        }).catch((error) => {
          this.failed = true
          console.log(error)
        })
        console.log('+++++++++++Success+++++++')
      }).catch((error) => console.log(error))
      console.log('+++++++++++Success+++++++')
    }
  },
  components: {
    Alerting
  },
  validations: {
    client: {
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
      raisonSociale: {
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
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  input{
    background: transparent;
    color: white;
  }
  .inputInvalide{
    border-color: red;
  }
  .inputInvalide:focus{
    border-color: red;
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
