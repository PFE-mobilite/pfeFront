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
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <i class="fas fa-shopping-cart fa-3x text-warning"></i>
                      <div class="text-right text-secondary">
                        <h5>Sales</h5>
                        <h3>$135,000</h3>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-secondary">
                    <i class="fas fa-sync mr-3"></i>
                    <span>Update Now</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <i class="fas fa-money-bill-alt fa-3x text-success"></i>
                      <div class="text-right text-secondary">
                        <h5>Expenses</h5>
                        <h3>$39,000</h3>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-secondary">
                    <i class="fas fa-sync mr-3"></i>
                    <span>Update Now</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <i class="fas fa-users fa-3x text-info"></i>
                      <div class="text-right text-secondary">
                        <h5>User</h5>
                        <h3>15,000</h3>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-secondary">
                    <i class="fas fa-sync mr-3"></i>
                    <span>Update Now</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 p-2">
                <div class="card card-common">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <i class="fas fa-chart-line fa-3x text-danger"></i>
                      <div class="text-right text-secondary">
                        <h5>Visiters</h5>
                        <h3>45,000</h3>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-secondary">
                    <i class="fas fa-sync mr-3"></i>
                    <span>Update Now</span>
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
