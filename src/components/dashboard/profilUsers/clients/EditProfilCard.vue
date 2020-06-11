<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card card-edit-client">
          <div class="card-header text-white">
            Edit Profile
          </div>
          <div class="card-body mx-5">
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Raison Sociale</label>
                <select class="form-control" v-model="selectedRaisionSocial">
                  <option v-for="(entreprise,index) in entreprises" :key="entreprise + index">{{entreprise.raisonSociale}}</option>
                </select>
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Nom Representant</label>
                <input type="text" class="form-control" placeholder="Nom Representant" v-model="client.nom">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Prenom Representant</label>
                <input type="text" class="form-control" placeholder="Prenom Representant" v-model="client.prenom">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Adresse Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="client.email">
              </div>
            </div>
            <div class="row mx-3">
              <div class="col-md-12">
                <label for="">Projet</label>
                <select class="form-control" v-model="selectedProjet">
                  <option v-for="(projet,index) in projets" :key="projet + index">{{projet.libelle}}</option>
                </select>
              </div>
            </div>
            <div class="row mx-3 d-flex flex-row-reverse">
              <div class="col-lg-3 col-md-9 mt-2 px-3">
                <button type="button" class="btn btn-outline-info  btn-lg btn-block" @click="save()">Save</button>
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      client: {
        raison_social: '',
        nom: '',
        prenom: '',
        email: ''
      },
      id: this.$route.params.id,
      selectedRaisionSocial: '',
      entreprises: [],
      projets: [],
      selectedProjet: ''
    }
  },
  created () {
    axios.get('http://localhost:8080/api/contacts/' + this.id).then(res => {
      const dataImported = res.data
      this.client.nom = dataImported.nom
      this.client.prenom = dataImported.prenom
      this.client.email = dataImported.email
      this.selectedRaisionSocial = dataImported.entreprise.raisonSociale
      this.client.raison_social = this.selectedRaisionSocial
      this.modifierprofil(this.client)
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/entreprises').then(res => {
      const dataImported = res.data['hydra:member']
      for (const key in dataImported) {
        const entreprise = dataImported[key]
        this.entreprises.push(entreprise)
      }
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/projets').then(res => {
      const dataImported = res.data['hydra:member']
      for (const key in dataImported) {
        const projet = dataImported[key]
        this.projets.push(projet)
      }
      console.log('les projets')
      console.log(this.projets)
    }).catch(error => console.log(error))
  },
  updated () {
    const clientEnModification = {
      nom: this.client.nom,
      prenom: this.client.prenom,
      email: this.client.email,
      raison_social: this.selectedRaisionSocial
    }
    this.modifierprofil(clientEnModification)
  },
  methods: {
    ...mapActions({
      modifierprofil: 'editclient'
    }),
    selectedEntrepriseId (selectedRaisionSocial) {
      for (const entreprise1 of this.entreprises) {
        if (entreprise1.raisonSociale === selectedRaisionSocial) {
          return entreprise1.id
        }
      }
      return null
    },
    selectedProjetId (selectedProjet) {
      console.log('in selected id methode {')
      for (const projet1 of this.projets) {
        console.log('projet1.libelle in for loop')
        console.log(projet1.libelle)
        console.log('selectedprojet')
        console.log(selectedProjet)
        if (projet1.libelle === selectedProjet) {
          console.log('projet1 libelle')
          console.log(projet1.libelle)
          this.selectedProjet = projet1.id
          return projet1.id
        }
      }
      return null
    },
    save () {
      const entreprise = this.selectedEntrepriseId(this.selectedRaisionSocial)
      const projet = this.selectedProjetId(this.selectedProjet)
      console.log('le projet id')
      console.log(projet)
      const clientModifier = {
        nom: this.client.nom,
        prenom: this.client.prenom,
        email: this.client.email,
        entreprise,
        projet
      }
      console.log(clientModifier)
      axios.put('http://localhost:8080/api/entreprises/' + this.id, clientModifier, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>
  .card-edit-client{
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
