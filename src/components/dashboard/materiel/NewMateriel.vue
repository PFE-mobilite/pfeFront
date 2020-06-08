<template>
  <div class="container mb-3 mt-3 ">
    <div class="row">
      <div class="col">
        <div class="card card-add-mat">
          <div class="card-header text-white">
            Ajouter Materiel
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-4">
                  <div class="col-md-6 pr-md-1">
                    <label for="">Type</label>
                    <input type="text" class="form-control" placeholder="Type" v-model="materiel.typeMateriel">
                  </div>
                  <div class="col-md-6 px-md-1">
                    <label for="">Marque</label>
                    <input type="text" class="form-control" placeholder="Marque" v-model="materiel.marque">
                  </div>
                </div>
                <div class="row mx-4">
                    <div class="col-md-6 pr-md-1">
                      <label for="">Reference</label>
                      <input type="text" class="form-control" placeholder="Reference" v-model="materiel.reference">
                    </div>
                    <div class="col-md-6 px-md-1">
                      <label for="">Prix_achat</label>
                      <input type="number" class="form-control" placeholder="Prix_achat" v-model="materiel.prixAchat">
                  </div>
                </div>
                <div class="row mx-4">
                  <div class="col-md-6 pr-md-1">
                    <label for="">Projet associé</label>
                    <select class="form-control" v-model="selectedProjet">
                      <option v-for="(projetx,index) in projets" :key="projetx + index">{{projetx.libelle}}</option>
                    </select>
                  </div>
                  <div class="col-md-6 px-md-1">
                    <label for="">Fournisseur</label>
                    <select class="form-control" v-model="selectedFournisseur">
                      <option v-for="(fournisseur,index) in fournisseurs" :key="fournisseur + index">{{fournisseur.libelle}}</option>
                    </select>
                  </div>
                </div>
                <div class="row mx-4">
                  <div class="col-md-7 pr-md-1">
                    <label for="">Description</label>
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="materiel.description"></textarea>
                  </div>
                </div>
                <div class="row mx-4 mt-3">
                  <div class="col-1">
                    <button type="button" class="btn btn-outline-info px-4" @click="onSubmitM">Ajouter</button>
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
export default {
  data () {
    return {
      materiel: {
        typeMateriel: '',
        marque: '',
        reference: '',
        prixAchat: 0,
        description: '',
        fournisseurOrigine: '',
        projetAssocié: ''
      },
      selectedFournisseur: '',
      selectedProjet: '',
      projets: [],
      fournisseurs: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/projets').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const projet = dataImported[key]
        this.projets.push(projet)
      }
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/fournisseurs').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const fournisseur = dataImported[key]
        this.fournisseurs.push(fournisseur)
      }
    }).catch(error => console.log(error))
  },
  methods: {
    selectedProjetId (selectedProjet) {
      for (const projet1 of this.projets) {
        if (projet1.libelle === selectedProjet) {
          this.selectedProjet = projet1.id
          return projet1.id
        }
      }
      return null
    },
    selectedFournisseurtId (selectedFournisseur) {
      for (const fournisseur1 of this.fournisseurs) {
        if (fournisseur1.libelle === selectedFournisseur) {
          this.selectedFournisseur = fournisseur1.id
          return fournisseur1.id
        }
      }
      return null
    },
    onSubmitM () {
      const projet = this.selectedProjetId(this.selectedProjet)
      const fournisseur = this.selectedFournisseurtId(this.selectedFournisseur)
      const prix = parseFloat(this.materiel.prixAchat)
      const newMateriel = {
        typeMateriel: this.materiel.typeMateriel,
        marque: this.materiel.marque,
        reference: this.materiel.reference,
        prixAchat: prix,
        description: this.materiel.description,
        fournisseur,
        projet
      }
      console.log(newMateriel)
      axios.post('http://localhost:8080/api/materiels', newMateriel, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
    }
  }
}
</script>

<style scoped>
  .card-add-mat{
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
    color: white;
  }
  label{
    color: white;
  }
  select{
    background: transparent;
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
