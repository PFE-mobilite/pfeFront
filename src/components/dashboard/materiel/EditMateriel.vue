<template>
  <div class="container mb-3 mt-3 ">
    <div class="row">
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="materiel.typeMateriel" v-bind:action="action"></Alerting>
        <div class="card card-add-mat">
          <div class="card-header text-white">
            Modifier Materiel
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-4">
                  <div class="col-md-6 pr-md-1">
                    <label for="">Type</label>
                    <input type="text" class="form-control" placeholder="Type" v-model="materiel.typeMateriel"
                           @blur="$v.materiel.typeMateriel.$touch()"
                           :class="{inputInvalide: $v.materiel.typeMateriel.$error}">
                    <p v-if="$v.materiel.typeMateriel.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
                  </div>
                  <div class="col-md-6 px-md-1">
                    <label for="">Marque</label>
                    <input type="text" class="form-control" placeholder="Marque" v-model="materiel.marque"
                           @blur="$v.materiel.marque.$touch()"
                           :class="{inputInvalide: $v.materiel.marque.$error}">
                    <p v-if="$v.materiel.marque.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
                  </div>
                </div>
                <div class="row mx-4">
                  <div class="col-md-6 pr-md-1">
                    <label for="">Reference</label>
                    <input type="text" class="form-control" placeholder="Reference" v-model="materiel.reference"
                           @blur="$v.materiel.reference.$touch()"
                           :class="{inputInvalide: $v.materiel.reference.$error}">
                    <p v-if="$v.materiel.reference.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
                  </div>
                  <div class="col-md-6 px-md-1">
                    <label for="">Prix_achat</label>
                    <input type="number" class="form-control" placeholder="Prix_achat" v-model="materiel.prixAchat"
                           @blur="$v.materiel.prixAchat.$touch()"
                           :class="{inputInvalide: $v.materiel.prixAchat.$error}">
                    <p v-if="!$v.materiel.prixAchat.numeric" class="text-danger">Ce champs doit  etre un chiffre</p>
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
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="materiel.description"
                              @blur="$v.materiel.description.$touch()"
                              :class="{textareaInvalid: $v.materiel.description.$error}">
                      <p v-if="$v.materiel.description.$error" class="text-danger">Ce champs ne doit pas  etre vide</p>
                    </textarea>
                  </div>
                </div>
                <div class="row mx-4 mt-3">
                  <div class="col-1">
                    <button type="button" class="btn btn-outline-info px-4" @click="onSubmitM">Modifier</button>
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
import Alerting from '../../Alertshowing/Alerting'
import { required, numeric } from 'vuelidate/lib/validators'
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
      fournisseurs: [],
      success: false,
      failed: false,
      action: 'modifié'
    }
  },
  created () {
    axios.get('http://localhost:8080/api/materiels/' + this.id).then(res => {
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
      axios.put('http://localhost:8080/api/materiels/' + this.id, newMateriel, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
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
    materiel: {
      typeMateriel: {
        required
      },
      marque: {
        required
      },
      reference: {
        required
      },
      prixAchat: {
        required,
        numeric
      },
      description: {
        required
      }
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
  .inputInvalide{
    border-color: red;
  }
  .inputInvalide:focus{
    border-color: red;
  }
  .textareaInvalid{
    border-color: red;
  }
  .textareaInvalid:focus{
    border-color: red;
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
