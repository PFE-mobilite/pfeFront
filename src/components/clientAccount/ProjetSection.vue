<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-proj">
          <div class="card-header text-info font-weight-bold">
            Mes Projets
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Libellé</th>
                  <th>TypeProjet</th>
                  <th>DateDebut</th>
                  <th>CoutEstime</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(project,index) in projets " :key="project + index">
                  <td>{{project.libelle}}</td>
                  <td>{{project.typeProjet}}</td>
                  <td>{{project.dateDebut.substring(0, 10)}}</td>
                  <td>{{project.coutEstime}}$</td>
                  <td>
                    <a :href="'/clientAccount/projet-info/' +  parseInt(project['@id'].substring(13,14))"><i class="fas fa-eye text-info mr-2"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
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
      projets: [],
      id: this.$store.getters.getUserId
    }
  },
  created () {
    axios.get('http://localhost:8080/api/contacts/' + this.id).then(res => {
      const dataImported = res.data.projet
      console.log(dataImported)
      for (const key in dataImported) {
        const projet = dataImported[key]
        this.projets.push(projet)
      }
      console.log('success and verified')
      console.log(this.projets)
    }).catch(error => console.log(error))
  }
}
</script>

<style scoped>
  .card-display-all-proj{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
