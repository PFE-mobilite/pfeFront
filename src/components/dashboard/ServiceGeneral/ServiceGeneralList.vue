<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-serG">
          <div class="card-header text-info font-weight-bold">
            Services Généraux
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Libelle</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(serviceG,index) in servicesGeneraux " :key="serviceG + index">
                  <td>{{serviceG.libelle}}</td>
                  <td>{{serviceG.description}}</td>
                  <td>{{serviceG.type}}</td>
                  <td>
                    <a :href="'/edit-service-general/' + serviceG.id"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href="" @click="onDelete(serviceG.id)"><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/add-service-general"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      servicesGeneraux: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/services_generauxes').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const serviceG = dataImported[key]
        this.servicesGeneraux.push(serviceG)
      }
      console.log('success and verified')
      console.log(this.servicesGeneraux)
    }).catch(error => console.log(error))
  },
  methods: {
    onDelete (id) {
      axios.delete('http://localhost:8080/api/services_generauxes/' + id).then(res => {
        console.log('in deleting')
        console.log(res)
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
  .card-display-all-serG{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
