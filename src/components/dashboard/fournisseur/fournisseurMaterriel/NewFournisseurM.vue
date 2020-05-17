<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-add-fournisseur">
          <div class="card-header text-white">
            Ajouter Fournisseur Materiel
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5">
                  <label for="">libelle</label>
                  <input type="text" class="form-control" placeholder="libelle" v-model="fournisseur.type">
                </div>
                <div class="row mx-5">
                  <label for="">Email</label>
                  <input type="text" class="form-control" placeholder="Email" v-model="fournisseur.email">
                </div>
                <div class="row mx-4">
                  <div class="col-md-8 ml-2">
                    <label for="">Description</label>
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="fournisseur.description"></textarea>
                  </div>
                </div>
                <div class="row mx-5 mt-3">
                  <button type="button" class="btn btn-outline-success px-4">Ajouter</button>
                </div>
              </div>
              <div class="col-3 ml-5 align-items-center">
                <div class="row">
                  <div class="card card-photo-c">
                    <div class="card-body">
                      <b-avatar variant="info" size="10rem"></b-avatar>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-outline-success btn-block">Edit photo</button>
                    </div>
                  </div>
                </div>
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
      fournisseur: {
        libelle: '',
        email: '',
        Description: '',
        logo: ''
      }
    }
  }
}
</script>

<style scoped>
  .card-add-fournisseur{
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
  .card-photo-c{
    margin-top: 1px;
    background-color: transparent;
  }
</style>
