<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-mat">
          <div class="card-header text-info font-weight-bold">
            Materiels
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Type</th>
                  <th>marque</th>
                  <th>Reference</th>
                  <th>Desciption</th>
                  <th>Prix_achat</th>
                  <th>Fournisseur</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Souris</td>
                  <td>Havic</td>
                  <td>n22 model 1</td>
                  <td>souris laser noir</td>
                  <td>20$</td>
                  <td>Mytek</td>
                  <td>
                    <a href="/editclient"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Souris</td>
                  <td>Havic</td>
                  <td>n22 model 1</td>
                  <td>souris laser noir</td>
                  <td>20$</td>
                  <td>Mytek</td>
                  <td>
                    <a href="/editclient"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Souris</td>
                  <td>Havic</td>
                  <td>n22 model 1</td>
                  <td>souris laser noir</td>
                  <td>20$</td>
                  <td>Mytek</td>
                  <td>
                    <a href="/editclient"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Souris</td>
                  <td>Havic</td>
                  <td>n22 model 1</td>
                  <td>souris laser noir</td>
                  <td>20$</td>
                  <td>Mytek</td>
                  <td>
                    <a href="/editclient"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>Souris</td>
                  <td>Havic</td>
                  <td>n22 model 1</td>
                  <td>souris laser noir</td>
                  <td>20$</td>
                  <td>Mytek</td>
                  <td>
                    <a href="/editclient"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/newmateriel"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-display-all-mat{
    margin-top: 50px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
