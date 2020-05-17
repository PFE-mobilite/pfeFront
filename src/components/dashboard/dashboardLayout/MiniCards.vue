<template>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl col-lg- col-md">
            <div class="row">
              <h3 class="display-5 text-info mx-4 my-2">Global statics</h3>
            </div>
            <div class="row">
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                      <div class="text-left text-capitalize font-weight-bold text-secondary">Ventes</div>
                      </div>
                      <div class="col">
                      <span class="badge badge-primary mt-1 float-right">Mensuelle</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">40 886,200</h3>
                        <small class="text-secondary">Total income</small>
                        <small class="text-primary text-left flex-row-reverse ml-2">80%<i class="fas fa-level-up-alt text-primary"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                        <div class="text-left text-capitalize font-weight-bold text-secondary">Depense</div>
                      </div>
                      <div class="col">
                        <span class="badge badge-danger mt-1 float-right">Mensuelle</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">275,800</h3>
                        <small class="text-secondary">Total Depense</small>
                        <small class="text-danger text-left flex-row-reverse ml-2">20%<i class="fas fa-level-up-alt text-danger"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                        <div class="text-left text-capitalize font-weight-bold text-secondary">projets</div>
                      </div>
                      <div class="col">
                        <span class="badge badge-warning mt-1 text-capitalize float-right">annuel</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">31</h3>
                        <small class="text-secondary text-capitalize">total projet</small>
                        <small class="text-warning text-left flex-row-reverse ml-2">20%<i class="fa fa-bolt text-warning"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-header">
                    <div class="row">
                      <div class="col">
                        <div class="text-left text-capitalize font-weight-bold text-secondary">Activités</div>
                      </div>
                      <div class="col">
                        <span class="badge badge-info mt-1 text-capitalize float-right">Mensuelle</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h3 class="text-secondary">31</h3>
                        <small class="text-secondary text-capitalize">total activité</small>
                        <small class="text-info text-left flex-row-reverse ml-2">60%<i class="fas fa-level-down-alt text-info"></i></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style>
  .card-common{
    box-shadow: 1px 2px 5px #999999;
    transition: all .2s;
  }
  .card-common:hover{
    box-shadow: 1px 2px 5px #999999;
    transform: translateY(-1px);
  }
</style>
