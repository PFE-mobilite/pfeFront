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
export default {
  data () {
    return {
      clientinto: {
        id: 1,
        raison_social: 'Samsung',
        nom: 'kais',
        prenom: 'skander',
        email: 'kaisska@gmail.com'
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
