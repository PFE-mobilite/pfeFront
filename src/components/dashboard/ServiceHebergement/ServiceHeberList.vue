<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-serH">
          <div class="card-header text-info font-weight-bold">
            Services Hebergement
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Type</th>
                  <th>Fournisseur</th>
                  <th>Projet</th>
                  <th>Prix</th>
                  <th>Durée</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(service,index) in servicesHebergement " :key="service + index">
                  <td>{{service.typeService}}</td>
                  <td>{{service.fsi? service.fsi.libelle : "non-associé"}}</td>
                  <td>{{service.projet? service.projet.libelle : "non-associé"}}</td>
                  <td>{{service.prix}}$</td>
                  <td>{{service.duree}} mois</td>
                  <td>
                    <a :href="'/admin/edit-service-internet/'+ service.id" ><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href="" @click="onDelete(service.id)"><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/admin/new-service-internet"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      servicesHebergement: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/service_hebergements').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const serviceHeber = dataImported[key]
        this.servicesHebergement.push(serviceHeber)
      }
      console.log('success and verified')
      console.log(this.servicesHebergement)
    }).catch(error => console.log(error))
  },
  methods: {
    onDelete (id) {
      axios.delete('http://localhost:8080/api/service_hebergements/' + id).then(res => {
        console.log('in deleting')
        console.log(res)
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
  .card-display-all-serH{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
