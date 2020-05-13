<template>
  <div id="dashboard">
    <nav class="navbar navbar-expand-md navbar-light">
      <buttom class="navbar-toggler ml-auto mb-2 bg-light" type="buttom" data-toggle="collapse" data-target="#mynavbar" @click="collapsed= !collapsed"><spam class="navbar-toggler-icon"></spam></buttom>
      <div class="collapse navbar-collapse show" id="mynavbar" v-show="collapsed">
        <div class="container-fluid">
          <div class="row ">
            <!--sidebar-->
            <div class=" col-xl-2 col-lg-2 col-md-3 sidebar bg-dark fixed-top">
              <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Dashboard</a>
              <div class="bottom-border pb-3">
                <img src="../assets/admin.jpeg" width="50px" class="rounded-circle">
                <a href="#" class="text-white">Nadia Smith</a>
              </div>
              <ul class="navbar-nav flex-column mt-4">
                <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 current"><i class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                <router-link to="/employes"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-user text-light fa-lg mr-3"></i>Employe</a></li></router-link>
                <router-link to="/clients"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-user text-light fa-lg mr-3"></i>Clients</a></li></router-link>
                <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-shopping-cart text-light fa-lg mr-3"></i>Sales</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-chart-line text-light fa-lg mr-3"></i>Analytics</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-chart-bar text-light fa-lg mr-3"></i>Charts</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-table text-light fa-lg mr-3"></i>Tables</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-wrench text-light fa-lg mr-3"></i>Settings</a></li>
              </ul>
            </div>
            <!--mysidebar-->
            <!--top-nav-->
            <div class="col-xl-10 col-lg-10  col-md-9 ml-auto bg-dark fixed-top py-2 top-navbar show">
              <div class="row align-items-center">
                <div class="col-md-4 ">
                  <h4 class="text-light text-uppercase mb-0">dashboard</h4>
                </div>
                <div class="col-md-5">
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control search-input" placeholder="Search...">
                      <button type="button" class="btn btn-white search-button"><i class="fas fa-search text-danger"></i></button>
                    </div>
                  </form>
                </div>
                <div class="col-md-3">
                  <ul class="navbar-nav">
                    <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i class="fas fa-comments text-muted fa-lg"></i> </a> </li>
                    <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i class="fas fa-bell text-muted fa-lg"></i> </a> </li>
                    <li class="nav-item ml-md-auto "><a href="#" class="nav-link" data-toggle="modal" data-target="#sign-out"><i class="fas fa-sign-out-alt text-danger fa-lg"></i> </a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--end of top nav-->
          </div>
        </div>
      </div>
    </nav>
    <div class="conatiner">
      <div class="row">
        <div class="col"></div>
        <div class="col-lg-10 col-md-9 col-sm-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="scss">
  body, html {
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url("../assets/opg.jpg") no-repeat fixed center /cover;
  }

  .bottom-border{

    border-bottom: 1px groove #eeeeee;

  }

  .sidebar-link{
    transition: all .4s;
  }

  .sidebar-link:hover {
    background-color: #444444;
    border-radius:  5px ;

  }

  .current{
    background-color: #28a745;
    border-radius: 7px;
    box-shadow: 2px 5px 10px #111111;
    transition: all .3s;

  }
  .current:hover{

    background-color: #f44336;
    border-radius: 7px;
    box-shadow: 2px 5px 10px #111111;
    transform: translateY(-3px);

  }
  .search-input {
    background: transparent;
    border: none;
    border-radius:0;
    border-bottom: 2px solid #999999;
    transition: all .4s;
  }
  .search-input:focus{
    background: transparent;
    box-shadow: none;
    border-bottom: 2px solid #dc3545 ;

  }

  .search-button {

    border-radius: 50%;
    padding: 10px 16px  ;
    transition: all .2s;

  }
  .search-button:hover{
    background-color: #eeeeee;
    transform: translateY(-2px);
  }
  .icon-parent{
    position: relative;

  }
  .icon-bullet:after{
    content: "";
    position: absolute;
    top: 7px;
    left: 15px ;
    height: 12px ;
    width: 12px;
    background-color: #f44336 ;
    border-radius: 50%;
  }
</style>
