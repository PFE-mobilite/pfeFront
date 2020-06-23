<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-client-into">
          <div class="card-body pt-0 pb-2  text-muted border-bottom">
            <img src="../../assets/cust3.jpeg" class="text-center rounded-circle avatar1 mb-2"/>
            <h6 class="text-white pt-2">{{employecard.nom}} {{employecard.prenom}}</h6>
            <h6 class="text-white pb-2">{{employecard.service}}</h6>
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
      employecard: {
        nom: '',
        prenom: '',
        email: '',
        poste: '',
        service: '',
        diplome: '',
        date_recrutement: ''
      },
      id: this.$store.getters.getUserId
    }
  },
  created () {
    axios.get('http://localhost:8080/api/employes/' + this.id).then(res => {
      const dataImported = res.data
      this.employecard.nom = dataImported.nom
      this.employecard.prenom = dataImported.prenom
      this.employecard.email = dataImported.email
      this.employecard.poste = dataImported.poste
      this.employecard.service = dataImported.service
      this.employecard.diplome = dataImported.diplome
      this.employecard.date_recrutement = dataImported.datederecrutement.substring(0, 10)
    }).catch(err => console.log(err))
  }
}
</script>

<style scoped>
  .card-client-into{
    background: transparent;
    border: transparent;
  }
  .avatar1 {
    width:  50px;
    height: 50px;
  }
  .border-bottom{
    color: #9a9a9a9a;
  }
</style>
