<template>
  <div class="container">
    <div class="row">
      <div class="col mx-5">
        <div class="card card-edit-serH">
          <div class="card-header text-white">
            Edit Service
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Type</label>
                <input type="text" class="form-control" placeholder="Type" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Durée</label>
                <input type="number" class="form-control" placeholder="Durée" >
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Date debut</label>
                <input type="date" class="form-control" placeholder="Date debut" >
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date fin</label>
                <input type="date" class="form-control" placeholder="Date fin">
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 pr-md-1">
                <label for="">Prix</label>
                <input type="number" class="form-control" placeholder="Prix" >
              </div>
              <div class="col-md-3 pr-md-1">
                <label for="">Projet</label>
                <select class="form-control">
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                </select>
              </div>
              <div class="col-md-4 pr-md-1">
                <label for="">Fournisseur</label>
                <select class="form-control">
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                  <option>Default select</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mt-4">
                <button type="button" class="btn btn-outline-success btn-block mt-2">Save</button>
              </div>
            </div>
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
      service_hebergement: {
        type: '',
        durée: '',
        prix: '',
        date_debut: '',
        date_fin: '',
        fournisseurServiceInternet: '',
        projet: ''
      }
    }
  }
}
</script>

<style scoped>

  .card-edit-serH{
    margin-top: 50px;
    background: #0d152c;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  input{
    background: transparent;
  }
  textarea{
    background: transparent;
  }
  label{
    color: white;
  }
  select{
    background: transparent;
  }
</style>
