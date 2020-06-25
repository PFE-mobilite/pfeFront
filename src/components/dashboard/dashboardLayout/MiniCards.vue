<template>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl col-lg- col-md">
            <div class="row">
              <h3 class="display-5 text-info mx-4 my-2">Global statics</h3>
            </div>
            <div class="row">
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                      <div class="text-left text-capitalize font-weight-bold text-secondary text-info">Nombre Projets</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">{{nombreProjet}}</h3>
                        <small class="text-secondary">Total</small>
                        <small class="text-primary text-left flex-row-reverse ml-2">20%<i class="fas fa-level-up-alt text-primary"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                        <div class="text-left text-capitalize font-weight-bold text-danger">Nombre Clients</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">{{nombreClient}}</h3>
                        <small class="text-secondary">Total </small>
                        <small class="text-danger text-left flex-row-reverse ml-2">40%<i class="fas fa-level-up-alt text-danger"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                        <div class="text-left text-capitalize font-weight-bold text-warning">Dépense Matérielle</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">{{depenseMateriels}} TND</h3>
                        <small class="text-secondary text-capitalize">total dépense</small>
                        <small class="text-warning text-left flex-row-reverse ml-2">20%<i class="fa fa-bolt text-warning"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common mr-2">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                        <div class="text-left text-capitalize font-weight-bold text-success">Dépense S.hébergement</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">{{depenseServiceHerbergement}} TND</h3>
                        <small class="text-secondary text-capitalize">total dépense</small>
                        <small class="text-info text-left flex-row-reverse ml-2">60%<i class="fas fa-level-down-alt text-success"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      nombreProjet: 0,
      nombreClient: 0,
      depenseMateriels: 0,
      depenseServiceHerbergement: 0
    }
  },
  created () {
    axios.get('http://localhost:8080/api/statistique').then(res => {
      const dataImported = res.data
      console.log(dataImported)
      this.nombreProjet = dataImported.nbrProjet
      this.nombreClient = dataImported.nbrClient
      this.depenseMateriels = dataImported.depenseMateriels
      this.depenseServiceHerbergement = dataImported.depenseSH
    }).catch(err => console.log(err))
  }
}
</script>

<style>
  .card-common{
    box-shadow: 1px 2px 5px #999999;
    transition: all .2s;
  }
  .card-common:hover{
    box-shadow: 1px 2px 5px #999999;
    transform: translateY(-1px);
  }
</style>
