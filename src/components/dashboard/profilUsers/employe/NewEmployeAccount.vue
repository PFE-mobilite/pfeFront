<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="card card-edit">
          <div class="card-header text-white">
            Ajouter Employe
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-3 ml-5 align-items-center">
                <div class="row">
                  <div class="card card-photo border-0">
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
                  <label for="">Poste</label>
                  <input type="text" class="form-control" placeholder="Poste">
                </div>
                <div class="row">
                  <label for="">Service</label>
                  <input type="text" class="form-control" placeholder="Service">
                </div>
                <div class="row">
                  <label for="">Date de recurtememnt</label>
                  <input type="date" class="form-control" placeholder="date de recrutement">
                </div>
                <div class="row">
                  <label for="">Diplome</label>
                  <input type="text" class="form-control" placeholder="diplome">
                </div>
                <div class="row">
                  <label for="">valeur HJ</label>
                  <input type="number" class="form-control" placeholder="Valeur">
                </div>
                <div class="row d-flex flex-row-reverse mt-3">
                  <button type="button" class="btn btn-outline-info">Ajouter</button>
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
  .b-edit{
    margin-top: 25px;
    margin-left: 55px;
  }
  .card-photo{
    margin-top: 30px;
    background-color: transparent;
  }
  .bg-f{
    background-color: transparent;
  }
</style>
