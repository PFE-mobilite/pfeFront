<template>
  <div id="dashboard">
    <nav class="navbar navbar-expand-md navbar-light">
      <button class="navbar-toggler ml-auto mb-2 bg-light" type="buttom" data-toggle="collapse" data-target="#mynavbar" @click="collapsed= !collapsed"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse show" id="mynavbar" v-show="collapsed">
        <div class="container-fluid">
          <div class="row ">
            <!--sidebar-->
            <div class=" col-xl-2 col-lg-2 col-md-3 sidebar  fixed-top">
              <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Mobelite</a>
              <ul class="navbar-nav flex-column mt-4">
                <EmployeMiniPresentationCard></EmployeMiniPresentationCard>
                <router-link to="/clientAccount/profile-client"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-user text-light fa-lg mr-3"></i>Profile</a></li></router-link>
                <router-link to="/clientAccount/projets-client"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-toolbox  text-light fa-lg mr-3"></i>Commande</a></li></router-link>
              </ul>
            </div>
            <!--mysidebar-->
            <!--top-nav-->
            <div class="col-xl-10 col-lg-10  col-md-9 ml-auto topnav  bg-white fixed-top py-2 top-navbar show">
              <div class="row align-items-center">
                <div class="col-md-4 ">
                  <form action="">
                    <div class="input-group">
                      <input class="form-control searching mt-1 text-muted" type="text" placeholder="Search for something" aria-label="Search">
                      <button type="button" class="btn btn-white search-button"><i class="fas fa-search text-muted"></i></button>
                    </div>
                  </form>
                </div>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item mt-2"><span class="m-r-sm text-muted">Bienvenue sur le compte Employe Mobelite</span></li>
                  <li class="nav-item"><a href="#" class="nav-link text-muted px-4" data-toggle="modal" data-target="#sign-out"><i class="fas fa-sign-out-alt text-muted"></i>logout</a></li>
                </ul>
              </div>
            </div>
            <!--end of top nav-->
          </div>
        </div>
      </div>
    </nav>
    <div class="conatiner">
      <div class="row">
        <div class="col-lg-2  col-md-2"></div>
        <div class="col-lg-10 col-md-10 col-sm-12 mt-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeMiniPresentationCard from '../components/employeAccount/EmployeMiniPresentationCard'
export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    EmployeMiniPresentationCard
  }
}
</script>

<style lang="scss">
  body, html {
    background-color: #eeeeee;
  }

  .bottom-border{

    border-bottom: 1px groove #eeeeee;

  }
  .sidebar{
    background-color: #2f4050;
    height: calc(100vh);
  }
  .topnav{
    background-color: white;
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

    background-color: #1172B8;
    border-radius: 7px;
    box-shadow: 2px 5px 10px #111111;
    transform: translateY(-3px);

  }
  .searching {
    background: transparent;
    border: none;
    border-radius:0;
  }
  .searching:focus{
    background: transparent;
    box-shadow: none;
  }
  .search-input {
    background: transparent;
    border: none;
    color: white;
    border-radius:0;
    border-bottom: 2px solid #999999;
    transition: all .4s;
  }
  .search-input:focus{
    background: transparent;
    box-shadow: none;
    color: white;
    border-bottom: 2px solid white ;

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
