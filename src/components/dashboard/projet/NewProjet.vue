<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col mx-5">
        <div class="card card-projet">
          <div class="card-header text-white">
            Ajouter Projet
          </div>
          <div class="card-body mx-5">
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">libelle</label>
                <input type="text" class="form-control" placeholder="libelle" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Type Projet</label>
                <input type="text" class="form-control" placeholder="type projet" >
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Client</label>
                <input type="text" class="form-control" placeholder="libelle" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Pays</label>
                <input type="text" class="form-control" placeholder="Pays" >
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Devise</label>
                <input type="text" class="form-control" placeholder="libelle" >
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">Cout Estimé</label>
                <input type="text" class="form-control" placeholder="Cout Estime" >
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Date debut</label>
                <input type="date" class="form-control" placeholder="Date debut" >
              </div>
              <div class="col-md-6 px-md-1">
                <label for="">Date fin</label>
                <input type="date" class="form-control" placeholder="Date fin">
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 pr-md-1"></div>
              <div class="col-md-4 pr-md-1"></div>
              <div class="col-md-5">
                <label for="">Cout en cours</label>
                <input type="text" class="form-control" placeholder="1000$" disabled >
              </div>
            </div>
            <div class="row d-flex flex-row-reverse">
              <div class="col-md-4 mt-4">
                <button type="button" class="btn btn-outline-info btn-block mt-2">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mx-5">
      <div class="col-5 mx-5 mb-5">
        <div class="card card-list-employe">
          <div class="card-header text-capitalize font-weight-bold text-info">
            Employe sur Projet
          </div>
          <div class="card-body">
              <div class="row align-items-center">
                <table class="table table-striped text-center ">
                  <thead>
                  <tr class="text-muted">
                    <th>Employe</th>
                    <th>Technologie</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <td>employe</td>
                  <td>Symfony</td>
                  <td>
                    <a href=""><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 mx-4 mb-5">
        <div class="card card-list-materiels">
          <div class="card-header text-capitalize font-weight-bold text-info">
            Services et Materiels
          </div>
          <div class="card-body mx-1">
            <h5 class="text-capitalize text-muted">Services Hebergement:</h5>
            <div class="row align-items-center">
              <table class="table table-striped text-center ">
                <thead>
                <tr class="text-muted">
                  <th>Service</th>
                  <th>Fournisseur</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <td>employe</td>
                <td>Symfony</td>
                <td>
                  <a href=""><i class="fas fa-edit text-success mr-2"></i></a>
                  <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                </td>
                </tbody>
              </table>
            </div>
            <h5 class="text-capitalize text-muted">materiels:</h5>
            <div class="row align-items-center">
              <table class="table table-striped text-center ">
                <thead>
                <tr class="text-muted">
                  <th>Materiel</th>
                  <th>Fournisseur</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>employe</td>
                  <td>Symfony</td>
                  <td>
                    <a href=""><i class="fas fa-edit text-success mr-2"></i></a>
                    <a href=""><i class="fas fa-trash-alt text-danger"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>employe</td>
                  <td>Symfony</td>
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

  .card-projet{
    margin-top: 50px;
    background: #2f4050;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }

  .card-list-employe{
    margin-top: 50px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  .card-list-materiels{
    margin-top: 50px;
    background: white;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
  input{
    background: transparent;
    color: white;
  }
  input:focus{
    background: transparent;
    color: white;
  }
  textarea{
    background: transparent;
  }
  label{
    color: white;
  }
  select{
    background: transparent;
  }
</style>
