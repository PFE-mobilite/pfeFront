<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-add-mat-emp">
          <div class="card-header text-white">
            Modifier Commande Materiel
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5 mb-1">
                  <label for="">Type</label>
                  <input type="text" class="form-control" placeholder="Type" v-model="materiel.typeMateriel">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Marque</label>
                  <input type="text" class="form-control" placeholder="Marque" v-model="materiel.marque">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Reference</label>
                  <input type="text" class="form-control" placeholder="Reference" v-model="materiel.reference">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Prix_achat</label>
                  <input type="number" class="form-control" placeholder="Prix_achat" v-model="materiel.prixAchat">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Fournisseur</label>
                  <select class="form-control" v-model="selectedFournisseur">
                    <option v-for="(fournisseur,index) in fournisseurs" :key="fournisseur + index">{{fournisseur.libelle}}</option>
                  </select>
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Projet associé</label>
                  <select class="form-control" v-model="selectedProjet">
                    <option v-for="(projetx,index) in projets" :key="projetx + index">{{projetx.libelle}}</option>
                  </select>
                </div>
                <div class="row mx-4 mb-1">
                  <div class="col-md-8 ml-2">
                    <label for="">Description</label>
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="materiel.description"></textarea>
                  </div>
                </div>
                <div class="row mx-5 mt-3 mb-1">
                  <button type="button" class="btn btn-outline-info px-4" @click="onSubmitM">Modifier</button>
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
      id: this.$route.params.id,
      selectedFournisseur: '',
      selectedProjet: '',
      projets: [],
      fournisseurs: []
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/materiels/' + this.id).then(res => {
      const dataImported = res.data
      console.log(dataImported)
      this.materiel.typeMateriel = dataImported.typeMateriel
      this.materiel.marque = dataImported.marque
      this.materiel.reference = dataImported.reference
      this.materiel.prixAchat = dataImported.prixAchat
      this.materiel.description = dataImported.description
      this.selectedFournisseur = dataImported.fournisseur.libelle
      this.selectedProjet = dataImported.projet.libelle
    }).catch(error => console.log(error))
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
      axios.put('http://localhost:8080/api/materiels/' + this.id, newMateriel, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
    }
  }
}
</script>

<style scoped>
  .card-add-mat-emp{
    margin-top: 50px;
    background: #2f4050;
  }
  input{
    background: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid white;
    box-shadow: none;
    color: white;
  }
  input:focus{
    background: transparent;
    box-shadow: none;
    border-bottom: 1px solid #17a2b8;
    color: white;

  }
  textarea{
    background: transparent;
  }
  label{
    color: white;
  }
  select{
    background: transparent;
    color: white;
  }
  textarea{
    background: transparent;
    color: white;
  }

</style>
