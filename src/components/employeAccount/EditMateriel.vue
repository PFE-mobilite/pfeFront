<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-add-mat-emp">
          <div class="card-header text-white">
            Modifier Commande Materiel
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5 mb-1">
                  <label for="">Type</label>
                  <input type="text" class="form-control" placeholder="Type" v-model="materiel.type">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Marque</label>
                  <input type="text" class="form-control" placeholder="Marque" v-model="materiel.marque">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Reference</label>
                  <input type="text" class="form-control" placeholder="Reference" v-model="materiel.reference">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Prix</label>
                  <input type="number" class="form-control" placeholder="Prix" v-model="materiel.prix">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Prix_achat</label>
                  <input type="number" class="form-control" placeholder="Prix_achat" v-model="materiel.prix_achat">
                </div>
                <div class="row mx-5 mb-1">
                  <label for="">Fournisseur</label>
                  <input type="text" class="form-control" placeholder="Fournisseur" v-model="materiel.fournisseur">
                </div>
                <div class="row mx-4 mb-1">
                  <div class="col-md-8 ml-2">
                    <label for="">Description</label>
                    <textarea rows="4" cols="10" class="form-control" placeholder="description" v-model="materiel.description"></textarea>
                  </div>
                </div>
                <div class="row mx-5 mt-3 mb-1">
                  <button type="button" class="btn btn-outline-info px-4">Modifier</button>
                </div>
              </div>
              <div class="col-3 ml-5 align-items-center">
                <div class="row">
                  <div class="card card-photo-c border-0">
                    <div class="card-body">
                      <b-avatar variant="info" size="10rem"></b-avatar>
                    </div>
                    <div class="card-footer border-0 bg-coloring">
                      <button class="btn btn-outline-info btn-block">modifier photo</button>
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
      materiel: {
        type: '',
        marque: '',
        reference: '',
        prix: '',
        prix_achat: '',
        fournisseur: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>
  .card-add-mat-emp{
    margin-top: 50px;
    background: #2f4050;
  }
  input{
    background: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid white;
    box-shadow: none;
  }
  input:focus{
    background: transparent;
    box-shadow: none;
    border-bottom: 1px solid #17a2b8;

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
  .bg-coloring{
    background-color: transparent;
  }
</style>
