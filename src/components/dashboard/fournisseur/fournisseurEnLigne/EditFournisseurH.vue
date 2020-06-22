<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="fournisseurLigne.libelle" v-bind:action="action"></Alerting>
        <div class="card card-add-fournisseurL">
          <div class="card-header text-white">
            Edit Fournisseur Service En Ligne
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5">
                  <label for="">libelle</label>
                  <input type="text" class="form-control" placeholder="libelle" v-model="fournisseurLigne.libelle">
                </div>
                <div class="row mx-5">
                  <label for="">Adresse</label>
                  <input type="text" class="form-control" placeholder="Adresse" v-model="fournisseurLigne.adresse">
                </div>
                <div class="row mx-5">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="fournisseurLigne.email">
                </div>
                <div class="row mx-5">
                  <label for="">Pays</label>
                  <input type="text" class="form-control" placeholder="Pays" v-model="fournisseurLigne.pays">
                </div>
                <div class="row mx-5">
                  <label for="">Reçue Facture</label>
                  <input type="text" class="form-control" placeholder="Reçue Facture" v-model="fournisseurLigne.recueFacture">
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
                      <button class="btn btn-outline-info btn-block">Edit avatar</button>
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
      fournisseurLigne: {
        libelle: '',
        email: '',
        adresse: '',
        pays: '',
        recueFacture: ''
      },
      id: this.$route.params.id,
      success: false,
      failed: false,
      action: 'ajouté'
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/fournisseur_service_internets/' + this.id).then(res => {
      console.log(res.data)
      const dataImported = res.data
      this.fournisseurLigne.libelle = dataImported.libelle
      this.fournisseurLigne.email = dataImported.email
      this.fournisseurLigne.adresse = dataImported.adresse
      this.fournisseurLigne.pays = dataImported.pays
      this.fournisseurLigne.recueFacture = dataImported.recueFacture
    }).catch(error => console.log(error))
  },
  methods: {
    edit () {
      const fournisseurM = {
        libelle: this.fournisseurLigne.libelle,
        email: this.fournisseurLigne.email,
        adresse: this.fournisseurLigne.adresse,
        pays: this.fournisseurLigne.pays,
        recueFacture: this.fournisseurLigne.recueFacture
      }
      console.log(fournisseurM)
      axios.put('http://localhost:8080/api/fournisseur_service_internets/' + this.id, fournisseurM, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
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
  .card-add-fournisseurL{
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
  .card-photo-c{
    margin-top: 1px;
    background-color: transparent;
  }
  .bg-f{
    background-color: transparent;
  }
</style>
