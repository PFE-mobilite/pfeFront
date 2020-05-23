<template>
  <div class="container py-0 my-0">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-matCommande">
          <div class="card-header text-muted text-capitalize font-weight-bold">
            Dernières commandes
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
                    <a href="/employe-edit-mat"><i class="fas fa-edit text-success mr-2"></i></a>
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
                    <a href="/employe-edit-mat"><i class="fas fa-edit text-success mr-2"></i></a>
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
                    <a href="/employe-edit-mat"><i class="fas fa-edit text-success mr-2"></i></a>
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
                    <a href="/employe-edit-mat"><i class="fas fa-edit text-success mr-2"></i></a>
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
                    <a href="/employe-edit-mat"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/employe-new-mat"><button type="button" class="btn btn-color  text-white align-content-end ">Ajouter</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<style scoped>
  .card-display-all-matCommande{
    background: white;
  }
  .btn-color{
    background-color: #2f4050;
  }
</style>
