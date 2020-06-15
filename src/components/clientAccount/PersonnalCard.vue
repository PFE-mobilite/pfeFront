<template>
  <div class="container">
    <div class="row">
      <div class="col">
      <div class="card card-client-into">
        <div class="card-body pt-0 pb-2  text-muted border-bottom">
          <img src="../../assets/cust3.jpeg" class="text-center rounded-circle avatar1 mb-2"/>
          <h6 class="text-white pt-2">{{clientinto.nom}} {{clientinto.prenom}}</h6>
         <h6 class="text-white pb-2">@{{clientinto.raison_social}}</h6>
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
      clientinto: {
        raison_social: '',
        nom: '',
        prenom: '',
        email: ''
      }
    }
  },
  created () {
    axios.get(' http://127.0.0.1:8000/api/contacts/5').then(res => {
      const dataImported = res.data
      console.log(dataImported)
      this.clientinto.nom = dataImported.nom
      this.clientinto.prenom = dataImported.prenom
      this.clientinto.email = dataImported.email
      this.clientinto.raison_social = dataImported.entreprise.raisonSociale
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
