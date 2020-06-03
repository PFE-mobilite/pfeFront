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
                    <th>Date-recrutement</th>
                    <th>Diplome</th>
                    <th>Poste</th>
                    <th>Service</th>
                    <th>Valeur_HJ</th>
                    <th>Photo</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="employe in employes" :key="employe">
                    <td>{{employe.nom}}</td>
                    <td>{{employe.prenom}}</td>
                    <td>{{employe.email}}</td>
                    <td>{{employe.datederecrutement}}</td>
                    <td>{{employe.diplome}}</td>
                    <td>{{employe.poste}}</td>
                    <td>{{employe.service}}</td>
                    <td>20$/heure</td>
                    <td>{{employe.id}}</td>
                    <td>
                      <router-link v-bind:to="'/editemploye/' + employe.id" ><a href=""><i class="fas fa-edit text-success mr-2"></i></a></router-link>
                      <a href="" @click="deleting(employe.id)"><i class="fas fa-trash-alt text-danger"></i></a>
                    </td>
                  </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/newemploye"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      employes: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/employes').then(response => {
      const dataImported = response.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const employee = dataImported[key]
        console.log(employee.date_recrutement)
        this.employes.push(employee)
      }
      console.log('niggaaaaa')
      console.log(this.employes)
    }
    ).catch(error => console.log(error))
  },
  methods: {
    deleting (id) {
      axios.delete('http://localhost:8080/api/employes/' + id).then(res => {
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
