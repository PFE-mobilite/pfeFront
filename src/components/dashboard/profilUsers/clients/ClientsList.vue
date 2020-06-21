<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all">
          <div class="card-header text-info font-weight-bold">
            Clients
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class=" table table-striped table-hover text-center">
                <thead>
                <tr class="text-muted">
                  <th>Raison Social</th>
                  <th>Nom Representant</th>
                  <th>Prenom Representant</th>
                  <th>Email</th>
                  <th>Projet</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(client,index) in clients" :key="client + index ">
                  <td>{{client.entreprise.raisonSociale}}</td>
                  <td>{{client.nom}}</td>
                  <td>{{client.prenom}}</td>
                  <td>{{client.email}}</td>
                  <td>{{client.projet[0] ? client.projet[0].libelle : "null"}}</td>
                  <td>
                    <a :href="'/admin/edit-client/' + client.id"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href="" @click="deleting(client.id)"><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/admin/newclient"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      clients: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/contacts').then(response => {
      const dataImported = response.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const client = dataImported[key]
        this.clients.push(client)
      }
    }).catch(error => console.log(error))
  },
  methods: {
    deleting (id) {
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
      axios.delete('http://localhost:8080/api/contacts/' + id).then(res => {
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
