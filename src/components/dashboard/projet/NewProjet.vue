<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col mx-5">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="projet.libelle" v-bind:action="action"></Alerting>
        <div class="card card-projet">
          <div class="card-header text-white">
            Ajouter Projet
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">libelle</label>
                <input type="text" class="form-control" placeholder="libelle" v-model="projet.libelle" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Type Projet</label>
                <input type="text" class="form-control" placeholder="type projet" v-model="projet.typeProjet" >
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Client</label>
                <select class="form-control" v-model="selectedClient">
                  <option v-for="(client,index) in clients" :key="client + index">{{client.entreprise.raisonSociale}}: {{client.email}}</option>
                </select>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Pays</label>
                <input type="text" class="form-control" placeholder="Pays" v-model="projet.pays">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Devise</label>
                <input type="text" class="form-control" placeholder="libelle" v-model="projet.devise">
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Cout Estimé</label>
                <input type="text" class="form-control" placeholder="Cout Estime" v-model="projet.coutEstime">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Date debut</label>
                <input type="date" class="form-control" placeholder="Date debut" v-model="projet.dateDebut">
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date fin</label>
                <input type="date" class="form-control" placeholder="Date fin" v-model="projet.dateFin">
              </div>
            </div>
            <div class="row d-flex flex-row-reverse">
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
export default {
  data () {
    return {
      projet: {
        libelle: '',
        dateDebut: '',
        dateFin: '',
        cout: '',
        typeProjet: '',
        maintenance: 0,
        devise: '',
        pays: '',
        coutEstime: ''
      },
      selectedClient: '',
      clients: [],
      success: false,
      failed: false,
      action: 'ajouté'
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/contacts').then(res => {
      const dataImportedClient = res.data['hydra:member']
      for (const key in dataImportedClient) {
        const clientImported = dataImportedClient[key]
        this.clients.push(clientImported)
      }
    }).catch(error => console.log(error))
  },
  methods: {
    ajouter () {
      const Newprojet = {
        libelle: this.projet.libelle,
        dateDebut: this.projet.dateDebut,
        dateFin: this.projet.dateFin,
        cout: 0,
        typeProjet: this.projet.typeProjet,
        devise: this.projet.devise,
        coutEstime: parseFloat(this.projet.coutEstime),
        contact: null,
        pays: this.projet.pays
      }
      console.log(Newprojet)
      axios.post('http://localhost:8080/api/projets', Newprojet, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
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

  .card-projet{
    margin-top: 50px;
    background: #2f4050;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }

  .card-list-employe{
    margin-top: 50px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  .card-list-materiels{
    margin-top: 50px;
    background: white;
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
  }
</style>
