<template>
  <div class="container mb-3 mt-3 ">
    <div class="row">
      <div class="col">
        <div class="card card-edit-techno">
          <div class="card-header text-white">
            Modifier Technologie
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-4">
                  <div class="col-md-6 pr-md-1">
                    <label for="">Technologie</label>
                    <input type="text" class="form-control" placeholder="Technologie" v-model="technologie.nom">
                  </div>
                  <div class="col-md-6 px-md-1">
                    <label for="">Version</label>
                    <input type="text" class="form-control" placeholder="Version" v-model="technologie.version">
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
                    <label for="">Employe</label>
                    <select class="form-control" v-model="selectedEmploye">
                      <option v-for="(employe,index) in employes" :key="employe + index">{{employe.email}}</option>
                    </select>
                  </div>
                </div>
                <div class="row mx-4 mt-4 d-flex flex-row-reverse">
                  <button type="button" class="btn btn-outline-info px-4" @click="onSubmittech">Save</button>
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
      technologie: {
        nom: '',
        version: ''
      },
      projets: [],
      selectedProjet: '',
      employes: [],
      selectedEmploye: '',
      id: this.$route.params.id
    }
  },
  created () {
    axios.get('http://localhost:8080/api/technologies/' + this.id).then(res => {
      const dataImported = res.data
      this.technologie.nom = dataImported.nom
      this.technologie.version = dataImported.version
      this.selectedProjet = dataImported.projet.libelle
      this.selectedEmploye = dataImported.employe.email
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/projets').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const projet = dataImported[key]
        this.projets.push(projet)
      }
      console.log('les projets')
      console.log(this.projets)
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/employes').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const employe = dataImported[key]
        this.employes.push(employe)
      }
      console.log('les employes')
      console.log(this.employes)
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
    selectedEmployetId (selectedEmploye) {
      for (const employe1 of this.employes) {
        if (employe1.email === selectedEmploye) {
          this.selectedProjet = employe1.id
          return employe1.id
        }
      }
      return null
    },
    onSubmittech () {
      const projet = this.selectedProjetId(this.selectedProjet)
      const employe = this.selectedEmployetId(this.selectedEmploye)
      const newTechnologie = {
        nom: this.technologie.nom,
        version: this.technologie.version,
        projet,
        employe
      }
      console.log(newTechnologie)
      axios.put('http://localhost:8080/api/technologies/' + this.id, newTechnologie, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
    }
  }
}
</script>

<style scoped>
  .card-edit-techno{
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
