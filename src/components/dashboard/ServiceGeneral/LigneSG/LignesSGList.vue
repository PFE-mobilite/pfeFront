<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-serG">
          <div class="card-header text-info font-weight-bold">
            Lignes Services Généraux
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>NumAuto</th>
                  <th>Date Payement</th>
                  <th>Quantite</th>
                  <th>Montant Total</th>
                  <th>Administrateur</th>
                  <th>Services SG</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(ligne,index) in ligneSGeneraux " :key="ligne + index">
                  <td>{{ligne.numAuto}}</td>
                  <td>{{ligne.datePayement.substring(0, 10)}}</td>
                  <td>{{ligne.quantite}}</td>
                  <td>{{ligne.montantTotal}}</td>
                  <td>{{ligne.Administrateur.email}}</td>
                  <td>{{ligne.ServicesSG.libelle}}</td>
                  <td>
                  <router-link :to="'/edit-ligneSG/' + ligne.id"><a href=""><i class="fas fa-edit text-success mr-2"></i></a></router-link>
                  <a href="" @click="onDelete(ligne.id)"><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/add-ligneSG"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
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
      ligneSGeneraux: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/ligne_s_gs').then(res => {
      const dataImported = res.data['hydra:member']
      console.log(dataImported)
      for (const key in dataImported) {
        const ligneSG = dataImported[key]
        this.ligneSGeneraux.push(ligneSG)
      }
      console.log('success and verified')
      console.log(this.servicesGeneraux)
    }).catch(error => console.log(error))
  },
  methods: {
    onDelete (id) {
      axios.delete('http://localhost:8080/api/ligne_s_gs/' + id).then(res => {
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
