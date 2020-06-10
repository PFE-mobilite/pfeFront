<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all">
          <div class="card-header text-info font-weight-bold">
            Employe
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class=" table table-striped table-hover text-center">
                <thead>
                <tr class="text-muted">
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Email</th>
                  <th>technologie</th>
                  <th>Projet</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(technologie,index) in technologies" :key="technologie + index">
                  <td>{{technologie.employe.nom}}</td>
                  <td>{{technologie.employe.prenom}}</td>
                  <td>{{technologie.employe.email}}</td>
                  <td>{{technologie.nom}}</td>
                  <td>{{technologie.projet.libelle}}</td>
                  <td>
                    <router-link :to="'/edit-technologie/' + technologie.id"><a href=""><i class="fas fa-edit text-success mr-2"></i></a></router-link>
                    <a href="" @click="deleting(technologie.id)"><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/new-technologie"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      technologies: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/technologies').then(response => {
      const dataImported = response.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const tech = dataImported[key]
        console.log(tech)
        this.technologies.push(tech)
      }
      console.log('technos')
      console.log(this.technologies)
    }
    ).catch(error => console.log(error))
  },
  methods: {
    deleting (id) {
      axios.delete('http://localhost:8080/api/technologies/' + id).then(res => {
        console.log('in deleting')
        console.log(res)
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
  .card-display-all{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
