<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-edit">
          <div class="card-header text-white">
            Ajouter Client
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-3 ml-5 align-items-center">
                <div class="row ">
                  <div class="card card-photo-c border-0">
                    <div class="card-body">
                      <b-avatar variant="info" size="15rem"></b-avatar>
                    </div>
                    <div class="card-footer border-0 bg-f">
                      <button class="btn btn-outline-info btn-block">Edit photo</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col ml-5 align-items-center mr-5">
                <div class="row">
                  <label for="">Nom</label>
                  <input type="text" class="form-control" placeholder="Nom">
                </div>
                <div class="row">
                  <label for="">Prenom</label>
                  <input type="text" class="form-control" placeholder="Prenom">
                </div>
                <div class="row">
                  <label for="">Email</label>
                  <input type="email" class="form-control" placeholder="Email">
                </div>
                <div class="row">
                  <label for="">Raison Sociale</label>
                  <input type="text" class="form-control" placeholder="Raison Sociale">
                </div>
                <div class="row d-flex flex-row-reverse">
                  <button type="button" class="btn btn-outline-info mt-3 px-4">Ajouter</button>
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
  .card-edit{
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
  .bg-f{
    background-color: transparent;
  }
  .card-photo-c{
    margin-top: 1px;
    background-color: transparent;
  }
</style>
