<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 px-5">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="projet.libelle" v-bind:action="action"></Alerting>
        <div class="card card-projet">
          <div class="card-header text-white">
            Edit Projet
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
                <select class="form-control" v-model="projet.contact">
                  <option v-for="(client,index) in clients" :key="client + index">{{client.id}}-{{client.entreprise.raisonSociale ? client.entreprise.raisonSociale : 'null' }}: {{client.email ? client.email : 'null'}}</option>
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
              <div class="col-md-6 pr-md-1">
                <label for="">Devise</label>
                <input type="text" class="form-control" placeholder="libelle" v-model="projet.devise"
                       @blur="$v.projet.devise.$touch()"
                       :class="{inputInvalide: $v.projet.devise.$error}">
                <p v-if="$v.projet.devise.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Cout Estimé</label>
                <input type="text" class="form-control" placeholder="Cout Estime" v-model="projet.coutEstime" @blur="$v.projet.coutEstime.$touch()"
                       :class="{inputInvalide: $v.projet.coutEstime.$error}">
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
            <div class="row">
              <div class="col-md-3 pr-md-1"></div>
              <div class="col-md-4 pr-md-1"></div>
              <div class="col-md-5">
                <label for="">Cout en cours</label>
                <input type="text" class="form-control text-dark" placeholder="250$" disabled v-model="projet.cout">
              </div>
            </div>
            <div class="row d-flex flex-row-reverse">
              <div class="col-md-4 mt-4">
                <button type="button" class="btn btn-outline-info btn-block mt-2" @click="edit">Modifier</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-5">
      <div class="col-lg-6 col-md-12 col-sm-12 px-1 mb-5">
        <div class="card card-list-employe">
          <div class="card-header text-capitalize font-weight-bold text-info">
            Employe sur Projet
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center ">
                <thead>
                <tr class="text-muted">
                  <th>Employe</th>
                  <th>technologie</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(emptec,index) in technos" :key="emptec + index">
                  <td>{{emptec.employe.email ? emptec.employe.email : 'null' }}</td>
                  <td>{{emptec.nom}}</td>
                  <td>
                    <a href=""><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12  px-2 mb-5">
        <div class="card card-list-materiels">
          <div class="card-header text-capitalize font-weight-bold text-info">
            Services et Materiels
          </div>
          <div class="card-body">
            <h5 class="text-capitalize text-muted">Services Hebergement:</h5>
            <div class="row align-items-center">
              <table class="table table-striped text-center ">
                <thead>
                <tr class="text-muted">
                  <th>Service</th>
                  <th>Prix</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(servh,index) in this.projet.serviceH" :key="servh + index">
                  <td>{{servh.typeService}}</td>
                  <td>{{servh.prix}}$</td>
                  <td>
                    <a :href="'/admin/edit-service-internet/' + servh.id"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <h5 class="text-capitalize text-muted">materiels:</h5>
            <div class="row align-items-center">
              <table class="table table-striped text-center ">
                <thead>
                <tr class="text-muted">
                  <th>Materiel</th>
                  <th>Prix</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(mat,index) in this.projet.materiel" :key="mat + index">
                  <td>{{mat.typeMateriel}}</td>
                  <td>{{mat.prixAchat}}$</td>
                  <td>
                    <a :href="'/admin/edit-materiel/' + mat.id"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
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
        coutEstime: '',
        serviceH: [],
        materiel: [],
        employe: [],
        technologie: [],
        contact: ''
      },
      id: this.$route.params.id,
      technos: [],
      selectedClient: '',
      clients: [],
      success: false,
      failed: false,
      action: 'modifié'
    }
  },
  created () {
    axios.get('http://localhost:8080/api/projets/' + this.id).then(res => {
      const dataImported = res.data
      this.projet.id = dataImported.id
      this.projet.libelle = dataImported.libelle
      this.projet.dateDebut = dataImported.dateDebut.substring(0, 10)
      this.projet.dateFin = dataImported.dateFin.substring(0, 10)
      this.projet.cout = dataImported.cout
      this.projet.typeProjet = dataImported.typeProjet
      this.projet.devise = dataImported.devise
      this.projet.coutEstime = dataImported.coutEstime
      this.projet.pays = dataImported.pays
      this.projet.contact = dataImported.contact
      this.projet.serviceH = dataImported.serviceH
      this.projet.materiel = dataImported.materiel
      this.projet.employe = dataImported.employe
      this.projet.technologie = dataImported.technologie
      this.selectedClient = this.projet.contact.email
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/technologies/').then(res => {
      const dataImported = res.data['hydra:member']
      for (const key in dataImported) {
        const techno = dataImported[key]
        if (techno.projet.id === this.projet.id) {
          this.technos.push(techno)
        }
      }
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/contacts').then(res => {
      const dataImportedClient = res.data['hydra:member']
      for (const key in dataImportedClient) {
        const clientImported = dataImportedClient[key]
        this.clients.push(clientImported)
      }
      console.log('tableau des clients pour les choix')
      console.log(this.clients)
    }).catch(error => console.log(error))
  },
  methods: {
    contactExtraction () {
      if (this.projet.contact === null) {
        return null
      } else {
        return parseInt(this.projet.contact.substring(0, 2))
      }
    },
    edit () {
      const contact = this.contactExtraction()
      const projetmodifier = {
        libelle: this.projet.libelle,
        dateDebut: this.projet.dateDebut,
        dateFin: this.projet.dateFin,
        cout: this.projet.cout,
        typeProjet: this.projet.typeProjet,
        devise: this.projet.devise,
        coutEstime: parseInt(this.projet.coutEstime),
        pays: this.projet.pays,
        contact
      }
      console.log(projetmodifier)
      axios.put('http://localhost:8080/api/projets/' + this.id, projetmodifier, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        console.log(response)
        this.success = true
      }).catch((error) => {
        console.log(error)
        this.failed = true
      })
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
    color: white;
  }
</style>
