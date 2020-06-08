<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col mx-5">
        <div class="card card-projet">
          <div class="card-header text-white">
            Edit Projet
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">libelle</label>
                <input type="text" class="form-control" placeholder="libelle" v-model="projet.libelle" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Type Projet</label>
                <input type="text" class="form-control" placeholder="type projet" v-model="projet.typeProjet">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Client</label>
                <input type="email" class="form-control" placeholder="libelle" v-model="projet.contact.email">
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
                <input type="text" class="form-control" placeholder="Cout Estime" v-model="projet.coutEstime" >
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
                <button type="button" class="btn btn-outline-info btn-block mt-2">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mx-4">
      <div class="col-5 mx-5 mb-5">
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
      <div class="col-5 mx-4 mb-5">
        <div class="card card-list-materiels">
          <div class="card-header text-capitalize font-weight-bold text-info">
            Services et Materiels
          </div>
          <div class="card-body mx-1">
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
                    <a :href="'/edit-service-internet/' + servh.id"><i class="fas fa-edit text-success mr-2"></i></a>
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
                    <a :href="'/edit-materiel/' + mat.id"><i class="fas fa-edit text-success mr-2"></i></a>
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
export default {
  data () {
    return {
      projet: {
        id: '',
        libelle: '',
        dateDebut: '',
        dateFin: '',
        cout: '',
        typeProjet: '',
        maintenance: '',
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
      technos: []
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/projets/' + this.id).then(res => {
      const dataImported = res.data
      this.projet.id = dataImported.id
      this.projet.libelle = dataImported.libelle
      this.projet.dateDebut = dataImported.dateDebut.substring(0, 10)
      this.projet.dateFin = dataImported.dateFin.substring(0, 10)
      this.projet.cout = dataImported.cout
      this.projet.typeProjet = dataImported.typeProjet
      this.projet.devise = dataImported.devise
      this.projet.coutEstime = dataImported.coutEstime
      this.projet.maintenance = dataImported.maintenance
      this.projet.pays = dataImported.pays
      this.projet.contact = dataImported.contact
      this.projet.serviceH = dataImported.serviceH
      this.projet.materiel = dataImported.materiel
      this.projet.employe = dataImported.employe
      this.projet.technologie = dataImported.technologie
      console.log(this.projet)
    }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/technologies/').then(res => {
      const dataImported = res.data['hydra:member']
      for (const key in dataImported) {
        const techno = dataImported[key]
        if (techno.projet.id === this.projet.id) {
          this.technos.push(techno)
        }
      }
    }).catch(error => console.log(error))
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
