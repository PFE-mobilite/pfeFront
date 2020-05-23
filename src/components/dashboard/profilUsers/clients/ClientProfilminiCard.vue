<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card card-clientminicard">
        <div class="card-body text-center mt-4">
          <div class="row">
            <div class="col-md-12 pr-md-1">
              <b-avatar variant="info" size="6rem"></b-avatar>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 pr-md-1">
              <h6 class="display-6 text-center text-white mt-3">{{client.nom}} {{client.prenom}}</h6>
              <p class="text-white">
                  {{client.email}}
              </p>
              <br>
              <br>
              <br>
              <br>
              <h4 class="display-6 text-center text-white">{{client.raison_social}}</h4>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-12 pr-md-1 text-center">
              <i class="fab fa-facebook fa-2x text-info mr-3"></i>
              <i class="fab fa-linkedin fa-2x text-info mr-3"></i>
              <i class="fab fa-twitter fa-2x text-info mr-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      client: 'client'
    })
  }
}
</script>
<style>
  .card-clientminicard{
    margin-top: 50px;
    width: 100vh;
    height: 70vh;
    background-color: #2f4050 ;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
