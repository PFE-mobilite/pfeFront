<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-proj">
          <div class="card-header text-info font-weight-bold">
            Projets
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Libellé</th>
                  <th>Email</th>
                  <th>Description</th>
                  <th>Logo</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/editfournisseur"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/editmateriel"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/editmateriel"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/editmateriel"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/editmateriel"><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/newfournisseur"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-display-all-proj{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
