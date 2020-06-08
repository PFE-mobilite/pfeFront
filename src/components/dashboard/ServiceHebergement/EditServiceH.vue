<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col mx-5">
        <div class="card card-edit-serH">
          <div class="card-header text-white">
            Edit Service
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Type</label>
                <input type="text" class="form-control" placeholder="Type" v-model="service_hebergement.type">
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Durée</label>
                <input type="number" class="form-control" placeholder="Durée" v-model="service_hebergement.durée">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Date debut</label>
                <input type="date" class="form-control" placeholder="Date debut" v-model="service_hebergement.date_debut" >
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date fin</label>
                <input type="date" class="form-control" placeholder="Date fin" v-model="service_hebergement.date_fin">
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 pr-md-1">
                <label for="">Prix</label>
                <input type="number" class="form-control" placeholder="Prix" v-model="service_hebergement.prix">
              </div>
              <div class="col-md-3 pr-md-1">
                <label for="">Projet</label>
                <select class="form-control" v-model="selectedProjet">
                  <option v-for="(projetx,index) in projets" :key="projetx + index">{{projetx.libelle}}</option>
                </select>
              </div>
              <div class="col-md-4 pr-md-1">
                <label for="">Fournisseur</label>
                <select class="form-control" v-model="selectedFournisseur">
                  <option v-for="(fournisseur,index) in fournisseursLignes" :key="fournisseur + index">{{fournisseur.libelle}}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mt-4">
                <button type="button" class="btn btn-outline-info btn-block mt-2" @click="edit">Save</button>
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
      service_hebergement: {
        type: '',
        durée: '',
        prix: '',
        date_debut: '',
        date_fin: '',
        fournisseurServiceInternet: '',
        projet: ''
      },
      selectedFournisseur: '',
      selectedProjet: '',
      projets: [],
      fournisseursLignes: [],
      id: this.$route.params.id
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/service_hebergements/' + this.id).then(res => {
      const dataImported = res.data
      console.log(dataImported.typeService)
      this.service_hebergement.type = dataImported.typeService
      this.service_hebergement.durée = dataImported.duree
      this.service_hebergement.prix = dataImported.prix
      this.service_hebergement.date_debut = dataImported.dateDebut.substring(0, 10)
      this.service_hebergement.date_fin = dataImported.dateFin.substring(0, 10)
      this.service_hebergement.fournisseurServiceInternet = dataImported.fsi
      this.service_hebergement.projet = dataImported.projet
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/fournisseur_service_internets').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const fournisseur = dataImported[key]
        this.fournisseursLignes.push(fournisseur)
      }
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/projets').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const projet = dataImported[key]
        this.projets.push(projet)
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
      for (const fournisseur1 of this.fournisseursLignes) {
        if (fournisseur1.libelle === selectedFournisseur) {
          this.selectedFournisseur = fournisseur1.id
          return fournisseur1.id
        }
      }
      return null
    },
    edit () {
      const projet = this.selectedProjetId(this.selectedProjet)
      const fournisseur = this.selectedFournisseurtId(this.selectedFournisseur)
      const serviceEdit = {
        typeService: this.service_hebergement.type,
        duree: parseInt(this.service_hebergement.durée),
        prix: parseInt(this.service_hebergement.prix),
        dateDebut: this.service_hebergement.date_debut,
        dateFin: this.service_hebergement.date_fin,
        fsi: fournisseur,
        projet
      }
      console.log(serviceEdit)
      axios.put('http://localhost:8080/api/service_hebergements/' + this.id, serviceEdit, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
    }
  }
}
</script>

<style scoped>

  .card-edit-serH{
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
  select{
    background: transparent;
    color: white;
  }
</style>
