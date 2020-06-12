<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-fourni">
          <div class="card-header text-info font-weight-bold">
            Fournisseur Materiel
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Libellé</th>
                  <th>Email</th>
                  <th>Description</th>
                  <th>Logo</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(fourisseur,index) in fournisseursM " :key="fourisseur + index">
                  <td>{{fourisseur.libelle}}</td>
                  <td>{{fourisseur.email}}</td>
                  <td>{{fourisseur.description}}</td>
                  <td>{{fourisseur.logo}}</td>
                  <td>
                    <router-link :to="'/admin/edit-fournisseur-mat/' + fourisseur.id"><i class="fas fa-edit text-success mr-2"></i></router-link>
                    <a href="" @click="onDelete(fourisseur.id)"><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/admin/new-fournisseur-mat"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      fournisseursM: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/fournisseurs').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const fournisseur = dataImported[key]
        this.fournisseursM.push(fournisseur)
      }
      console.log('success and verified')
      console.log(this.fournisseursM)
    }).catch(error => console.log(error))
  },
  methods: {
    onDelete (id) {
      axios.delete('http://localhost:8080/api/fournisseurs/' + id).then(res => {
        console.log('in deleting')
        console.log(res)
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
  .card-display-all-fourni{
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
