<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-2"></div>
      <div class="col">
        <div class="card card-add-service-g">
          <div class="card-header text-white">
            Edit Service General
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5">
                  <label for="">libelle</label>
                  <input type="text" class="form-control" placeholder="libelle" v-model="serviceGen.libelle">
                </div>
                <div class="row mx-5">
                  <label for="">Type</label>
                  <input type="text" class="form-control" placeholder="Type" v-model="serviceGen.type" >
                </div>
                <div class="row mx-4">
                  <div class="col-md-8 ml-2">
                    <label for="">Description</label>
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="serviceGen.description"></textarea>
                  </div>
                </div>
                <div class="row mx-5 mt-3">
                  <button type="button" class="btn btn-outline-info px-4" @click="edit">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      serviceGen: {
        libelle: '',
        type: '',
        description: ''
      },
      id: this.$route.params.id
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/services_generauxes/' + this.id).then(res => {
      console.log(res.data)
      const dataImported = res.data
      this.serviceGen.libelle = dataImported.libelle
      this.serviceGen.type = dataImported.type
      this.serviceGen.description = dataImported.description
    }).catch(error => console.log(error))
  },
  methods: {
    edit () {
      const serviceGen = {
        libelle: this.serviceGen.libelle,
        type: this.serviceGen.type,
        description: this.serviceGen.description
      }
      console.log(serviceGen)
      axios.put('http://localhost:8080/api/services_generauxes/' + this.id, serviceGen, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => console.log(response)).catch((error) => console.log(error))
      console.log('++++++++Success++++++++++')
    }
  }
}
</script>

<style scoped>
  .card-add-service-g{
    margin-top: 70px;
    background: #2f4050;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  input{
    background: transparent;
    color: white;
  }
  input:focus{
    background: transparent;
    color: white;
  }
  textarea{
    background: transparent;
    color: white;
  }
  label{
    color: white;
  }
  .card-photo-c{
    margin-top: 1px;
    background-color: transparent;
  }
  .bg-f{
    background-color: transparent;
  }
</style>
