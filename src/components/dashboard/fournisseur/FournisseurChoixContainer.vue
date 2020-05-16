<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <div class="card card-choix">
          <div class="card-header text-info font-weight-bold">
           Choix Fournisseur
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-5">
                <ChoixMateriel></ChoixMateriel>
              </div>
              <div class="col-5">
                <ChoixServiceEnLigne></ChoixServiceEnLigne>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import ChoixMateriel from './ChoixMateriel'
import ChoixServiceEnLigne from './ChoixServiceEnLigne'
export default {
  components: {
    ChoixMateriel,
    ChoixServiceEnLigne
  }
}
</script>

<style>
  .card-choix{
    margin-top: 50px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
