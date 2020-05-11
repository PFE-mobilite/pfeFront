<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all">
          <div class="card-header text-white">
            Clients
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class=" table table-dark table-hover text-center">
                <thead>
                <tr class="text-muted">
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Email</th>
                  <th>Date-recrutement</th>
                  <th>Diplome</th>
                  <th>Poste</th>
                  <th>Service</th>
                  <th>Valeur_HJ</th>
                  <th>Photo</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>john</td>
                  <td>doe</td>
                  <td>John_deo@gmail.com</td>
                  <td>12/01/2020</td>
                  <td>Master</td>
                  <td>WEB dev</td>
                  <td>Equipe1</td>
                  <td>20$/heure</td>
                  <td>avatar</td>
                  <td>
                    <a href="/editemploye"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>john</td>
                  <td>doe</td>
                  <td>John_deo@gmail.com</td>
                  <td>12/01/2020</td>
                  <td>Master</td>
                  <td>WEB dev</td>
                  <td>Equipe1</td>
                  <td>20$/heure</td>
                  <td>avatar</td>
                  <td>
                    <a href=""><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>john</td>
                  <td>doe</td>
                  <td>John_deo@gmail.com</td>
                  <td>12/01/2020</td>
                  <td>Master</td>
                  <td>WEB dev</td>
                  <td>Equipe1</td>
                  <td>20$/heure</td>
                  <td>avatar</td>
                  <td>
                    <a href="/userprofil"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>john</td>
                  <td>doe</td>
                  <td>John_deo@gmail.com</td>
                  <td>12/01/2020</td>
                  <td>Master</td>
                  <td>WEB dev</td>
                  <td>Equipe1</td>
                  <td>20$/heure</td>
                  <td>avatar</td>
                  <td>
                    <a href="/userprofil"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>john</td>
                  <td>doe</td>
                  <td>John_deo@gmail.com</td>
                  <td>12/01/2020</td>
                  <td>Master</td>
                  <td>WEB dev</td>
                  <td>Equipe1</td>
                  <td>20$/heure</td>
                  <td>avatar</td>
                  <td>
                    <a href=""><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-display-all{
    margin-top: 50px;
    background: #0d152c;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
