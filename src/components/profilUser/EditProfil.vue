<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card card-edit">
          <div class="card-header text-white">
            Edit Profile
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-5 pr-md-1">
                <label for="">Company</label>
                <input type="text" class="form-control" placeholder="Company">
              </div>
              <div class="col-md-3 pr-md-1">
                <label for="">Username</label>
                <input type="text" class="form-control" placeholder="Username">
              </div>
              <div class="col-md-4 pr-md-1">
                <label for="">Email</label>
                <input type="Email" class="form-control" placeholder="Email">
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 pr-md-1">
                <label for="">Firstname</label>
                <input type="text" class="form-control" placeholder="Firstname">
              </div>
              <div class="col-md-6 pl-md-1">
                <label for="">LastName</label>
                <input type="text" class="form-control" placeholder="LastName">
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label for="">Adresse</label>
                <input type="text" class="form-control" placeholder="Adresse">
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 pr-md-1">
                <label for="">City</label>
                <input type="text" class="form-control" placeholder="City">
              </div>
              <div class="col-md-4 px-md-1">
                <label for="">Country</label>
                <input type="text" class="form-control" placeholder="Country">
              </div>
              <div class="col-md-4 pl-md-1">
                <label for="">Postal Code</label>
                <input type="text" class="form-control" placeholder="Postal Code">
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <label for="">About me</label>
                <textarea rows="4" cols="80" placeholder="Here can be your description" class="form-control"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-9 mt-2 px-3">
                <button type="button" class="btn btn-outline-success btn-lg btn-block">Save</button>
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
    background: transparent;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
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
</style>
