<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-2"></div>
      <div class="col">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="serviceGen.libelle" v-bind:action="action"></Alerting>
        <div class="card card-add-service-g">
          <div class="card-header text-white">
            Ajouter Service General
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5">
                  <label for="">libelle</label>
                  <input type="text" class="form-control" placeholder="libelle" v-model="serviceGen.libelle"
                         @blur="$v.serviceGen.libelle.$touch()"
                         :class="{inputInvalide: $v.serviceGen.libelle.$error}">
                  <p v-if="$v.serviceGen.libelle.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row mx-5">
                  <label for="">Type</label>
                  <input type="text" class="form-control" placeholder="Type" v-model="serviceGen.type"
                         @blur="$v.serviceGen.type.$touch()"
                         :class="{inputInvalide: $v.serviceGen.type.$error}">
                  <p v-if="$v.serviceGen.type.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                </div>
                <div class="row mx-4">
                  <div class="col-md-8 ml-2">
                    <label for="">Description</label>
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="serviceGen.description"
                              @blur="$v.serviceGen.description.$touch()"
                              :class="{inputInvalide: $v.serviceGen.description.$error}">
                      <p v-if="$vserviceGen.description.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
                    </textarea>
                  </div>
                </div>
                <div class="row mx-5 mt-3">
                  <button type="button" class="btn btn-outline-info px-4" :disabled="$v.$invalid" @click="onSubmitSG">Ajouter</button>
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
import Alerting from '../../Alertshowing/Alerting'
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      serviceGen: {
        libelle: '',
        type: '',
        description: ''
      },
      success: false,
      failed: false,
      action: 'ajouté'
    }
  },
  methods: {
    onSubmitSG () {
      const formDataSG = {
        libelle: this.serviceGen.libelle,
        type: this.serviceGen.type,
        description: this.serviceGen.description
      }
      console.log(formDataSG)
      axios.post('http://localhost:8080/api/services_generauxes', formDataSG, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        console.log(response)
        this.success = true
      }).catch((error) => {
        this.failed = true
        console.log(error)
      })
      console.log('++++++++Success++++++++++')
    }
  },
  components: {
    Alerting
  },
  validations: {
    serviceGen: {
      libelle: {
        required
      },
      type: {
        required
      },
      description: {
        required
      }
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
  .inputInvalide{
    border-color: red;
  }
  .inputInvalide:focus{
    border-color: red;
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
