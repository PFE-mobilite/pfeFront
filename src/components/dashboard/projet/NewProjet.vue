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
                <input type="text" class="form-control" placeholder="libelle" v-model="projet.libelle"
                       @blur="$v.projet.libelle.$touch()"
                       :class="{inputInvalide: $v.projet.libelle.$error}">
                <p v-if="$v.projet.libelle.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Type Projet</label>
                <input type="text" class="form-control" placeholder="type projet" v-model="projet.typeProjet"
                       @blur="$v.projet.typeProjet.$touch()"
                       :class="{inputInvalide: $v.projet.typeProjet.$error}">
                <p v-if="$v.projet.typeProjet.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
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
                <input type="text" class="form-control" placeholder="Pays" v-model="projet.pays"
                       @blur="$v.projet.pays.$touch()"
                       :class="{inputInvalide: $v.projet.pays.$error}">
                <p v-if="$v.projet.pays.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1" >
                <label for="">Devise</label>
                <input type="text" class="form-control" placeholder="Devise" v-model="projet.devise"
                       @blur="$v.projet.devise.$touch()"
                       :class="{inputInvalide: $v.projet.devise.$error}">
                <p v-if="$v.projet.devise.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Cout Estimé</label>
                <input type="text" class="form-control" placeholder="Cout Estime" v-model.number="projet.coutEstime"
                       @blur="$v.projet.coutEstime.$touch()"
                       :class="{inputInvalide: $v.projet.coutEstime.$error}">
                <p v-if="$v.projet.coutEstime.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                <p v-if="!$v.projet.coutEstime.numeric" class="text-danger">Ce champs doit etre un chiffre</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Date debut</label>
                <input type="date" class="form-control" placeholder="Date debut" v-model="projet.dateDebut"
                       @blur="$v.projet.dateDebut.$touch()"
                       :class="{inputInvalide: $v.projet.dateDebut.$error}">
                <p v-if="$v.projet.dateDebut.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date fin</label>
                <input type="date" class="form-control" placeholder="Date fin" v-model="projet.dateFin"
                       @blur="$v.projet.dateFin.$touch()"
                       :class="{inputInvalide: $v.projet.dateFin.$error}">
                <p v-if="$v.projet.dateFin.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
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
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      projet: {
        libelle: '',
        dateDebut: '',
        dateFin: '',
        cout: '',
        typeProjet: '',
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
    axios.get('http://localhost:8080/api/contacts').then(res => {
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
  },
  validations: {
    projet: {
      libelle: {
        required
      },
      dateDebut: {
        required
      },
      dateFin: {
        required
      },
      cout: {
        required,
        numeric
      },
      typeProjet: {
        required
      },
      devise: {
        required
      },
      pays: {
        required
      },
      coutEstime: {
        required,
        numeric
      }
    }
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
  .inputInvalide{
    border-color: red;
  }
  .inputInvalide:focus{
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
  }
  label{
    color: white;
  }
  select{
    background: transparent;
  }
</style>
