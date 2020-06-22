<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="card card-edit">
          <div class="card-header text-white">
            Ajouter Employe
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col ml-5 align-items-center mr-5">
                <div class="row">
                  <label for="">Nom</label>
                  <input type="text" class="form-control" placeholder="Nom" v-model="admin.nom">
                </div>
                <div class="row">
                  <label for="">Prenom</label>
                  <input type="text" class="form-control" placeholder="Prenom" v-model="admin.prenom">
                </div>
                <div class="row">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="admin.email">
                </div>
                <div class="row d-flex flex-row-reverse mt-3">
                  <button type="button" class="btn btn-outline-info" @click="onSubmit">Modifier</button>
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
