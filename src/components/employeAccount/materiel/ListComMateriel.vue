<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="card card-display-all-matCommande">
          <div class="card-header text-info text-capitalize font-weight-bold">
            Materiels
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Type</th>
                  <th>marque</th>
                  <th>Desciption</th>
                  <th>Prix_achat</th>
                  <th>Fournisseur</th>
                  <th>Projet</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for ="(materielx,indexx) in materiels" :key="materielx + indexx">
                  <td>{{materielx.typeMateriel}}</td>
                  <td>{{materielx.marque}}</td>
                  <td>{{materielx.description}}</td>
                  <td>{{materielx.prixAchat}}</td>
                  <td>{{materielx.fournisseur ? materielx.fournisseur.libelle  : "null"}}</td>
                  <td>{{materielx.projet ? materielx.projet.libelle  : "non-associée"}}</td>
                  <td>
                    <a :href="'/employeAccount/employe-edit-mat/' + materielx.id "><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/employeAccount/employe-new-mat"><button type="button" class="btn btn-color  text-white align-content-end ">Ajouter</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      materiels: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/materiels').then(response => {
      const dataImported = response.data['hydra:member']
      console.log('test the data imported')
      console.log(dataImported)
      for (const key in dataImported) {
        const materiel = dataImported[key]
        console.log('test the materiel.fournisseur')
        console.log(materiel.fournisseur)
        this.materiels.push(materiel)
      }
    }
    ).catch(error => console.log(error))
  }
}
</script>

<style scoped>
  .card-display-all-matCommande{
    background: white;
  }
  .btn-color{
    background-color: #2f4050;
  }
</style>
