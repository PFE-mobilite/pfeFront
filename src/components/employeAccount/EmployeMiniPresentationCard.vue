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
export default {
  data () {
    return {
      employecard: {
        nom: 'skander',
        prenom: 'kais',
        email: 'kaisska@gmail.com',
        poste: 'batal',
        service: 'webservice',
        diplome: 'licence',
        date_recrutement: '12/05/2020',
        valeur_HJ: '20$'
      }
    }
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
