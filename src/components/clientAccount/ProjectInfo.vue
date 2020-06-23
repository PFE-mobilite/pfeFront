<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 px-5">
        <div class="card card-projet">
          <div class="card-header text-white">
             Projet
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">libelle</label>
                <input type="text" class="form-control bg-mod" placeholder="libelle" disabled v-model="projet.libelle" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Type Projet</label>
                <input type="text" class="form-control bg-mod" placeholder="type projet" disabled v-model="projet.typeProjet">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Pays</label>
                <input type="text" class="form-control bg-mod" placeholder="Pays" disabled v-model="projet.pays">
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Devise</label>
                <input type="text" class="form-control bg-mod" placeholder="libelle" disabled v-model="projet.devise">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Cout Estimé</label>
                <input type="text" class="form-control bg-mod" placeholder="Cout Estime" disabled v-model="projet.coutEstime" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Cout en cours</label>
                <input type="text" class="form-control bg-mod" placeholder="250$" disabled v-model="projet.cout">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Date debut</label>
                <input type="date" class="form-control bg-mod" placeholder="Date debut" disabled v-model="projet.dateDebut">
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date fin</label>
                <input type="date" class="form-control bg-mod" placeholder="Date fin" disabled v-model="projet.dateFin">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-5">
      <div class="col-lg-12 col-md-12  px-2 mb-5">
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
                </tr>
                </thead>
                <tbody>
                <tr v-for="(servh,index) in this.projet.serviceH" :key="servh + index">
                  <td>{{servh.typeService}}</td>
                  <td>{{servh.prix}}$</td>
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
                </tr>
                </thead>
                <tbody>
                <tr v-for="(mat,index) in this.projet.materiel" :key="mat + index">
                  <td>{{mat.typeMateriel}}</td>
                  <td>{{mat.prixAchat}}$</td>
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
      technos: [],
      selectedClient: '',
      clients: []
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
      this.selectedClient = this.projet.contact.email
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
    color: white;
  }
  .bg-mod{
    background: transparent;
  }
</style>
