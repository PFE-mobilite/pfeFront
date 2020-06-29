<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col px-5">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="service_hebergement.type" v-bind:action="action"></Alerting>
        <div class="card card-edit-serH">
          <div class="card-header text-white">
            Ajouter Service Hebergement
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Type</label>
                <input type="text" class="form-control" placeholder="Type" v-model="service_hebergement.type"
                       @blur="$v.service_hebergement.type.$touch()"
                       :class="{inputInvalide: $v.service_hebergement.type.$error}">
                <p v-if="$v.service_hebergement.type.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Durée en Mois</label>
                <input type="text" class="form-control" placeholder="Durée" v-model="service_hebergement.duree"
                       @blur="$v.service_hebergement.duree.$touch()"
                       :class="{inputInvalide: $v.service_hebergement.duree.$error}">
                <p v-if="!$v.service_hebergement.duree.numeric" class="text-danger">Ce champs doit  etre un chiffre positif</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Date debut</label>
                <input type="date" class="form-control" placeholder="Date debut" v-model="service_hebergement.date_debut"
                       @blur="$v.service_hebergement.date_debut.$touch()"
                       :class="{inputInvalide: $v.service_hebergement.date_debut.$error}">
                <p v-if="$v.service_hebergement.date_debut.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date fin</label>
                <input type="date" class="form-control" placeholder="Date fin" v-model="service_hebergement.date_fin"
                       @blur="$v.service_hebergement.date_fin.$touch()"
                       :class="{inputInvalide: $v.service_hebergement.date_fin.$error}">
                <p v-if="$v.service_hebergement.date_fin.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 pr-md-1">
                <label for="">Prix</label>
                <input type="text" class="form-control" placeholder="Prix" v-model="service_hebergement.prix"
                       @blur="$v.service_hebergement.prix.$touch()"
                       :class="{inputInvalide: $v.service_hebergement.prix.$error}">
                <p v-if="!$v.service_hebergement.prix.numeric" class="text-danger">Ce champs doit  etre un chiffre positif</p>
              </div>
              <div class="col-md-3 pr-md-1">
                <label for="">Projet</label>
                <select class="form-control" v-model="selectedProjet">
                  <option v-for="(projetx,index) in projets" :key="projetx + index">{{projetx.libelle ? projetx.libelle : 'non-associée'}}</option>
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
                <button type="button" class="btn btn-outline-info btn-block mt-2" @click="ajouter">Ajouter</button>
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
import Alerting from '../../Alertshowing/Alerting'
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      service_hebergement: {
        type: '',
        duree: '',
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
      id: this.$route.params.id,
      success: false,
      failed: false,
      action: 'ajouté'
    }
  },
  created () {
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
    ajouter () {
      const projet = this.selectedProjetId(this.selectedProjet)
      const fournisseur = this.selectedFournisseurtId(this.selectedFournisseur)
      const serviceHebergementAjouter = {
        typeService: this.service_hebergement.type,
        duree: parseInt(this.service_hebergement.duree),
        prix: parseInt(this.service_hebergement.prix),
        dateDebut: this.service_hebergement.date_debut,
        dateFin: this.service_hebergement.date_fin,
        fsi: fournisseur,
        projet
      }
      console.log(serviceHebergementAjouter)
      axios.post('http://localhost:8080/api/service_hebergements', serviceHebergementAjouter, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
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
    service_hebergement: {
      type: {
        required
      },
      prix: {
        required,
        numeric
      },
      date_debut: {
        required
      },
      date_fin: {
        required
      },
      duree: {
        required,
        numeric
      }
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
  .inputInvalide{
    border-color: red;
  }
  .inputInvalide:focus{
    border-color: red;
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
