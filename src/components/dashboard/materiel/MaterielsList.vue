<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-mat">
          <div class="card-header text-info font-weight-bold">
            Materiels
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Type</th>
                  <th>marque</th>
                  <th>Reference</th>
                  <th>Desciption</th>
                  <th>Prix_achat</th>
                  <th>Fournisseur</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for ='materielx in materiels' :key="materielx">
                  <td>{{materielx.typeMateriel}}</td>
                  <td>{{materielx.marque}}</td>
                  <td>{{materielx.reference}}</td>
                  <td>{{materielx.description}}</td>
                  <td>{{materielx.prixAchat}}</td>
                  <td>{{materielx.fournisseur}}</td>
                  <td>
                    <a href="/editmateriel"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/newmateriel"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      materiels: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/materiels').then(response => {
      const dataImported = response.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const materiel = dataImported[key]
        console.log(materiel.fournisseur)
        this.materiels.push(materiel)
      }
      console.log('niggaaaaa')
      console.log(this.materiels)
    }
    ).catch(error => console.log(error))
  }
}
</script>

<style scoped>
  .card-display-all-mat{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
