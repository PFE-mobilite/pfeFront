<template>
  <div class="container">
    <div class="row mx-5">
      <div class="col mx-5">
        <div class="card card-add-fournisseurL">
          <div class="card-header text-white">
            Ajouter Fournisseur Service En Ligne
          </div>
          <div class="card-body">
            <div class="row mx-5">
              <div class="col ml-5 align-items-center">
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
                  <button type="button" class="btn btn-outline-info px-4" @click="onSubmitFL">Ajouter</button>
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
      fournisseurLigne: {
        libelle: '',
        email: '',
        adresse: '',
        pays: '',
        recueFacture: ''
      }
    }
  },
  methods: {
    onSubmitFL () {
      const formData = {
        libelle: this.fournisseurLigne.libelle,
        adresse: this.fournisseurLigne.adresse,
        email: this.fournisseurLigne.email,
        pays: this.fournisseurLigne.pays,
        recueFacture: this.fournisseurLigne.recueFacture
      }
      console.log(formData)
      axios.post('http://localhost:8080/api/fournisseur_service_internets', formData, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
    }
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
