<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <div class="col-12">
        <div class="card border-0">
          <h5 class="profiled text-muted text-left text-capitalize py-2">Statistique profile</h5>
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-md-6 col-sm-12 p-2">
                  <div class="card card-common">
                    <div class="card-header">
                      <div class="row">
                        <div class="col">
                          <div class="text-left text-capitalize font-weight-bold text-secondary text-info">Nombre Projets</div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body card-bd">
                      <div class="d-flex justify-content-between">
                        <div>
                          <h3 class="text-secondary">{{this.nbrProjects}}</h3>
                          <small class="text-secondary">Total</small>
                          <small class="text-primary text-left flex-row-reverse ml-2">20%<i class="fas fa-level-up-alt text-primary"></i></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12 p-2">
                  <div class="card card-common">
                    <div class="card-header">
                      <div class="row">
                        <div class="col">
                          <div class="text-left text-capitalize font-weight-bold text-success">Cout Total </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body card-bd">
                      <div class="d-flex justify-content-between">
                        <div>
                          <h3 class="text-secondary">{{this.coutEstiméTotal}} TND</h3>
                          <small class="text-secondary">Total </small>
                          <small class="text-success text-left flex-row-reverse ml-2">40%<i class="fas fa-level-up-alt text-success"></i></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row px-5">
        <div class="col-6 px-5">
          <pie-chart :donut="true" :colors="['#ea11f1','#12abe7']" :data="[['nombre Materiels totals',this.nbrMateriels],['nombre ServiceHebergement',this.nbrSH]]"></pie-chart>
        </div>
        <div class="col-6 px-5">
          <pie-chart suffix="TND" :donut="true" :colors="['#ea11f1','#4cf603']" :data="[['Cout Materiels totals',this.coutMateriels],['Cout ServiceHebergement',this.coutSH]]"></pie-chart>
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
      id: this.$store.getters.getUserId,
      coutEstiméTotal: 0,
      coutMateriels: 0,
      coutSH: 0,
      nbrMateriels: 0,
      nbrProjects: 0,
      nbrSH: 0
    }
  },
  created () {
    axios.get(' http://127.0.0.1:8000/api/statistiquePC/' + this.id).then(res => {
      const dataImported = res.data
      console.log('stats')
      console.log(dataImported)
      this.coutEstiméTotal = dataImported.coutEstiméTotal
      this.coutMateriels = dataImported.coutMateriels
      this.coutSH = dataImported.coutSH
      this.nbrSH = dataImported.nbrSH
      this.nbrMateriels = dataImported.nbrMateriels
      this.nbrProjects = dataImported.nbrProjects
    }).catch(err => console.log(err))
  }
}
</script>

<style scoped>
  input{
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: 1.25rem;
    color: #6c757d;
    box-shadow: none;
  }
  input:focus{
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: 1.25rem;
  }
  label{
    font-size: 1.25rem;
    color: #6c757d;
  }
</style>
