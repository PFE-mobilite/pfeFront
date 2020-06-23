<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="fournisseur.libelle" v-bind:action="action"></Alerting>
        <div class="card card-edit-fournisseur">
          <div class="card-header text-white">
            Edit Fournisseur
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5">
                  <label for="">libelle</label>
                  <input type="text" class="form-control" placeholder="libelle" v-model="fournisseur.libelle">
                </div>
                <div class="row mx-5">
                  <label for="">Email</label>
                  <input type="text" class="form-control" placeholder="Email" v-model="fournisseur.email">
                </div>
                <div class="row mx-4">
                  <div class="col-md-8 ml-2">
                    <label for="">Description</label>
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="fournisseur.description"></textarea>
                  </div>
                </div>
                <div class="row mx-5 mt-3">
                  <button type="button" class="btn btn-outline-info px-4" @click="edit">Modifier</button>
                </div>
              </div>
              <div class="col-3 ml-5 align-items-center">
                <div class="row">
                  <div class="card card-photo-c border-0">
                    <div class="card-body">
                      <b-avatar variant="info" size="10rem"></b-avatar>
                    </div>
                    <div class="card-footer border-0 bg-f">
                      <button class="btn btn-outline-info btn-block">Edit photo</button>
                    </div>
                  </div>
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
export default {
  data () {
    return {
      fournisseur: {
        libelle: '',
        email: '',
        description: '',
        logo: ''
      },
      id: this.$route.params.id,
      success: false,
      failed: false,
      action: 'Modifié'
    }
  },
  created () {
    axios.get('http://localhost:8080/api/fournisseurs/' + this.id).then(res => {
      console.log(res.data)
      const dataImported = res.data
      this.fournisseur.libelle = dataImported.libelle
      this.fournisseur.email = dataImported.email
      this.fournisseur.description = dataImported.description
    }).catch(error => console.log(error))
  },
  methods: {
    edit () {
      const fournisseurM = {
        libelle: this.fournisseur.libelle,
        email: this.fournisseur.email,
        description: this.fournisseur.description,
        logo: ''
      }
      console.log(fournisseurM)
      axios.put('http://localhost:8080/api/fournisseurs/' + this.id, fournisseurM, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
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
  }
}
</script>

<style scoped>
  .card-edit-fournisseur{
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
  textarea{
    color: white;
  }
  .card-photo-c{
    margin-top: 1px;
    background-color: transparent;
  }
  .bg-f{
    background-color: transparent;
  }
</style>
