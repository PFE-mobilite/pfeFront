<template>
  <div class="container mb-2">
    <div class="row">
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="materiel.typeMateriel" v-bind:action="action"></Alerting>
        <div class="card card-add-mat-emp">
          <div class="card-header text-white">
            Ajouter nouveau Materiel
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5 mb-1">
                  <label for="">Type</label>
                  <input type="text" class="form-control" placeholder="Type" v-model="materiel.typeMateriel"
                         @blur="$v.materiel.typeMateriel.$touch()"
                         :class="{inputInvalide: $v.materiel.typeMateriel.$error}">
                  <p v-if="$v.materiel.typeMateriel.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Marque</label>
                  <input type="text" class="form-control" placeholder="Marque" v-model="materiel.marque"
                         @blur="$v.materiel.marque.$touch()"
                         :class="{inputInvalide: $v.materiel.marque.$error}">
                  <p v-if="$v.materiel.marque.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Reference</label>
                  <input type="text" class="form-control" placeholder="Reference" v-model="materiel.reference"
                         @blur="$v.materiel.reference.$touch()"
                         :class="{inputInvalide: $v.materiel.reference.$error}">
                  <p v-if="$v.materiel.reference.$error" class="text-danger">Ce champs ne doit pas etre vide</p>
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Prix_achat</label>
                  <input type="text" class="form-control" placeholder="Prix_achat" v-model="materiel.prixAchat"
                         @blur="$v.materiel.prixAchat.$touch()"
                         :class="{inputInvalide: $v.materiel.prixAchat.$error}">
                  <p v-if="!$v.materiel.prixAchat.numeric" class="text-danger">Ce champs doit  etre un chiffre positif</p>
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
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="materiel.description"
                              @blur="$v.materiel.description.$touch()"
                              :class="{textareaInvalid: $v.materiel.description.$error}">
                      <p v-if="$v.materiel.description.$error" class="text-danger">Ce champs ne doit pas  etre vide</p>
                    </textarea>
                  </div>
                </div>
                <div class="row mx-5 mt-3 mb-1">
                  <button type="button" class="btn btn-outline-info px-4" :disabled="$v.$invalid" @click="onSubmitM">Ajouter</button>
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
import { required, numeric } from 'vuelidate/lib/validators'
import Alerting from '../../Alertshowing/Alerting'
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
      fournisseurs: [],
      success: false,
      failed: false,
      action: 'ajouté'
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
      axios.post('http://localhost:8080/api/materiels', newMateriel, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        console.log(response)
        this.success = true
      }).catch((error) => {
        console.log(error)
        this.failed = true
      })
      console.log('++++++++Success++++++++++')
    }
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
  },
  components: {
    Alerting
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
  .inputInvalide{
    background: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid red;
    box-shadow: none;
    color: white;
  }
  .inputInvalide:focus{
    background: transparent;
    box-shadow: none;
    border-bottom: 1px solid red;
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
  .textareaInvalid{
    border-color: red;
  }
  .textareaInvalid:focus{
    border-color: red;
  }
</style>
