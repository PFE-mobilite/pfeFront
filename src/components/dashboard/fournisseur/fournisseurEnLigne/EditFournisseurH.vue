<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-add-fournisseurL">
          <div class="card-header text-white">
            Edit Fournisseur Service En Ligne
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col ml-5 align-items-center mx-5">
                <div class="row mx-5">
                  <label for="">libelle</label>
                  <input type="text" class="form-control" placeholder="libelle">
                </div>
                <div class="row mx-5">
                  <label for="">Adresse</label>
                  <input type="text" class="form-control" placeholder="Adresse">
                </div>
                <div class="row mx-5">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email">
                </div>
                <div class="row mx-5">
                  <label for="">Pays</label>
                  <input type="text" class="form-control" placeholder="Pays">
                </div>
                <div class="row mx-5">
                  <label for="">Reçue Facture</label>
                  <input type="text" class="form-control" placeholder="Reçue Facture">
                </div>
                <div class="row mx-5 mt-3">
                  <button type="button" class="btn btn-outline-info px-4">Ajouter</button>
                </div>
              </div>
              <div class="col-3 ml-5 align-items-center">
                <div class="row">
                  <div class="card card-photo-c border-0">
                    <div class="card-body">
                      <b-avatar variant="info" size="10rem"></b-avatar>
                    </div>
                    <div class="card-footer border-0 bg-f">
                      <button class="btn btn-outline-info btn-block">Edit avatar</button>
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

<style scoped>
  .card-add-fournisseurL{
    margin-top: 50px;
    background: #2f4050;
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
  .bg-f{
    background-color: transparent;
  }
</style>
