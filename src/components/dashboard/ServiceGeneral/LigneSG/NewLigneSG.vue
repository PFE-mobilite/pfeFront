<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col mx-5">
        <Alerting v-bind:success="success" v-bind:failed="failed" v-bind:msg="ligneSg.num_auto" v-bind:action="action"></Alerting>
        <div class="card card-add-service-g">
          <div class="card-header text-white">
            Ajouter Ligne Service General
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">numAuto</label>
                <input type="number" class="form-control" placeholder="libelle" v-model.number="ligneSg.num_auto"
                       @blur="$v.ligneSg.num_auto.$touch()"
                       :class="{inputInvalide: $v.ligneSg.num_auto.$error}">
                <p v-if="$v.ligneSg.num_auto.$error" class="text-danger">Ce champs doit etre un chiffre</p>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Date Payement</label>
                <input type="date" class="form-control" placeholder="Date Payement" v-model="ligneSg.date_payement"
                       @blur="$v.ligneSg.date_payement.$touch()"
                       :class="{inputInvalide: $v.ligneSg.date_payement.$error}">
                <p v-if="$v.ligneSg.date_payement.$error" class="text-danger">Ce champs ne doit pas étre vide</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Quantité:</label>
                <input type="number" class="form-control" placeholder="Quantité" v-model.number="ligneSg.quantite"
                       @blur="$v.ligneSg.quantite.$touch()"
                       :class="{inputInvalide: $v.ligneSg.quantite.$error}">
                <p v-if="!$v.ligneSg.quantite.numeric" class="text-danger">Ce champs doit etre un chiffre</p>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Montant Total</label>
                <input type="number" class="form-control" placeholder="Montant Total" v-model.number="ligneSg.montant_total"
                       @blur="$v.ligneSg.montant_total.$touch()"
                       :class="{inputInvalide: $v.ligneSg.montant_total.$error}">
                <p v-if="$v.ligneSg.montant_total.$error" class="text-danger">Ce champs doit etre un chiffre</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Administrateur Responsable</label>
                <select class="form-control" v-model="selectedAdministrateur">
                  <option v-for="(admin,index) in administrateurs" :key="admin + index">{{admin.nom}}</option>
                </select>
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Service Generale associé</label>
                <select class="form-control" v-model="selecedServiceSG">
                  <option v-for="(service,index) in serviceSG" :key="service + index">{{service.libelle}}</option>
                </select>
              </div>
            </div>
            <div class="row d-flex flex-row-reverse">
              <div class="col-md-4 mt-4">
                <button type="button" class="btn btn-outline-info btn-block mt-2" @click="onAdd">Modifier</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Alerting from '../../../Alertshowing/Alerting'
import { required, numeric } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      ligneSg: {
        num_auto: '',
        date_payement: '',
        quantite: '',
        montant_total: ''
      },
      administrateurs: [],
      selectedAdministrateur: '',
      serviceSG: [],
      selecedServiceSG: '',
      success: false,
      failed: false,
      action: 'ajouté'
    }
  },
  created () {
    axios.get('http://localhost:8080/api/administrateurs').then(res => {
      const dataImported = res.data['hydra:member']
      for (const key in dataImported) {
        const admin = dataImported[key]
        this.administrateurs.push(admin)
      }
    }).catch(error => console.log(error))
    axios.get('http://localhost:8080/api/services_generauxes').then(res => {
      const dataImported = res.data['hydra:member']
      for (const key in dataImported) {
        const service = dataImported[key]
        this.serviceSG.push(service)
      }
    }).catch(error => console.log(error))
  },
  methods: {
    selectedAdministrateurId (selectedAdministrateur) {
      for (const admin1 of this.administrateurs) {
        if (admin1.nom === selectedAdministrateur) {
          this.selectedProjet = admin1.id
          return admin1.id
        }
      }
      return null
    },
    selectedServiceSgId (selecedServiceSG) {
      for (const serv1 of this.serviceSG) {
        if (serv1.libelle === selecedServiceSG) {
          this.selecedServiceSG = serv1.id
          return serv1.id
        }
      }
      return null
    },
    onAdd () {
      const Administrateur = this.selectedAdministrateurId(this.selectedAdministrateur)
      const ServicesSG = this.selectedServiceSgId(this.selecedServiceSG)
      const ligneAdded = {
        numAuto: parseInt(this.ligneSg.num_auto),
        datePayement: this.ligneSg.date_payement,
        montantTotal: parseInt(this.ligneSg.montant_total),
        quantite: parseInt(this.ligneSg.quantite),
        Administrateur,
        ServicesSG
      }
      console.log(ligneAdded)
      axios.post('http://localhost:8080/api/ligne_s_gs', ligneAdded, { headers: { 'X-Requested-With': 'XMLHttpRequested' } }).then((response) => {
        console.log(response)
        this.success = true
      }).catch((error) => {
        console.log(error)
        this.failed = true
      })
      console.log('++++++++Success++++++++++')
    }
  },
  components: {
    Alerting
  },
  validations: {
    ligneSg: {
      num_auto: {
        required,
        numeric
      },
      date_payement: {
        required
      },
      quantite: {
        required,
        numeric
      },
      montant_total: {
        numeric,
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
  select {
    background: transparent;
    color: white;
  }
</style>
