<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card card-display-all-fourniH">
          <div class="card-header text-info font-weight-bold">
            Fournisseur Service Internet
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <table class="table table-striped text-center">
                <thead>
                <tr class="text-muted">
                  <th>Libellé</th>
                  <th>Adresse</th>
                  <th>Email</th>
                  <th>Pays</th>
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
                    <a href="/edit-fournisseur-ligne"><i class="fas fa-eye text-info mr-2"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/"><i class="fas fa-eye text-info mr-2"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/"><i class="fas fa-eye text-info mr-2"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/"><i class="fas fa-eye text-info mr-2"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>mytek</td>
                  <td>mytek@gmail.com</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>logo</td>
                  <td>
                    <a href="/"><i class="fas fa-eye text-info mr-2"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer d-flex flex-row-reverse">
            <router-link to="/add-fournisseur-ligne"><button type="button" class="btn btn-info align-content-end ">Ajouter</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-display-all-fourniH{
    margin-top: 70px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
