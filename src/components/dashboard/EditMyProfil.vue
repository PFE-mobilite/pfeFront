<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="card card-edit">
          <div class="card-header text-white">
            Modifier l'administrateur :
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col ml-5 align-items-center mr-5">
                <div class="row">
                  <label for="">Nom</label>
                  <input type="text"
                         class="form-control"
                         placeholder="Nom"
                         v-model="admin.nom"
                         @input="$v.admin.nom.$touch()"
                         :class="{inputInvalide: $v.admin.nom.$error}">
                  <p v-if="$v.admin.nom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Prenom</label>
                  <input type="text" class="form-control" placeholder="Prenom" v-model="admin.prenom"
                         @input="$v.admin.prenom.$touch()"
                         :class="{inputInvalide: $v.admin.prenom.$error}">
                  <p v-if="$v.admin.prenom.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email"
                         @input="$v.admin.email.$touch()"
                         :class="{inputInvalide: $v.admin.email.$error}"
                         v-model="admin.email">
                  <p v-if="!$v.admin.email.required" class="text-danger">Ce champs ne doit pas étre vide</p>
                  <p v-if="!$v.admin.email.email" class="text-danger">Format email erroné</p>
                </div>
                <div class="row d-flex flex-row-reverse mt-3">
                  <button type="button" class="btn btn-outline-info" :disabled="$v.$invalid" @click="onSubmit">Modifier</button>
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
import { required, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      admin: {
        nom: '',
        prenom: '',
        email: ''
      },
      id: this.$store.getters.getUserId
    }
  },
  created () {
    axios.get('http://localhost:8080/api/administrateurs/' + this.id).then(res => {
      const dataImported = res.data
      console.log(dataImported)
      this.admin.nom = dataImported.nom
      this.admin.prenom = dataImported.prenom
      this.admin.email = dataImported.email
    })
  },
  methods: {
    onSubmit () {
      const formData = {
        nom: this.admin.nom,
        prenom: this.admin.prenom,
        email: this.admin.email
      }
      console.log(formData)
      axios.put('http://localhost:8080/api/administrateurs/' + this.id, formData, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
    }
  },
  validations: {
    admin: {
      nom: {
        required
      },
      prenom: {
        required
      },
      email: {
        required,
        email
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
</style>
