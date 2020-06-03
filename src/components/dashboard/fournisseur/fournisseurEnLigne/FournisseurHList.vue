<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-fourniH">
          <div class="card-header text-info font-weight-bold">
            Fournisseur Service Internet
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Libellé</th>
                  <th>Adresse</th>
                  <th>Email</th>
                  <th>Pays</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(fournisseurl,index) in fournisseursL " :key="fournisseurl + index">
                  <td>{{fournisseurl.libelle}}</td>
                  <td>{{fournisseurl.adresse}}</td>
                  <td>{{fournisseurl.email}}</td>
                  <td>{{fournisseurl.pays}}</td>
                  <td>
                    <a :href="'/edit-fournisseur-ligne/' + fournisseurl.id"><i class="fas fa-eye text-info mr-2"></i></a>
                    <a href="" @click="onDelete( fournisseurl.id) "><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/add-fournisseur-ligne"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      fournisseursL: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/fournisseur_service_internets').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const fournisseur = dataImported[key]
        this.fournisseursL.push(fournisseur)
      }
      console.log('success and verified')
      console.log(this.fournisseursL)
    }).catch(error => console.log(error))
  },
  methods: {
    onDelete (id) {
      axios.delete('http://localhost:8080/api/fournisseur_service_internets/' + id).then(res => {
        console.log('in deleting')
        console.log(res)
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
  .card-display-all-fourniH{
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
