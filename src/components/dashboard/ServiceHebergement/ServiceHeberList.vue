<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-serH">
          <div class="card-header text-info font-weight-bold">
            Services Hebergement
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Type</th>
                  <th>Fournisseur</th>
                  <th>Projet</th>
                  <th>Prix</th>
                  <th>Durée</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>serveur email</td>
                  <td>Amazon cloud</td>
                  <td>GO SPORT SITE</td>
                  <td>500$</td>
                  <td>1 ans</td>
                  <td>
                    <a href="/edit-service-internet"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>serveur email</td>
                  <td>Amazon cloud</td>
                  <td>GO SPORT SITE</td>
                  <td>500$</td>
                  <td>1 ans</td>
                  <td>
                    <a href="/edit-service-internet"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>serveur email</td>
                  <td>Amazon cloud</td>
                  <td>GO SPORT SITE</td>
                  <td>500$</td>
                  <td>1 ans</td>
                  <td>
                    <a href="/"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>serveur email</td>
                  <td>Amazon cloud</td>
                  <td>GO SPORT SITE</td>
                  <td>500$</td>
                  <td>1 ans</td>
                  <td>
                    <a href="/"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>serveur email</td>
                  <td>Amazon cloud</td>
                  <td>GO SPORT SITE</td>
                  <td>500$</td>
                  <td>1 ans</td>
                  <td>
                    <a href="/"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/new-service-internet"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-display-all-serH{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
