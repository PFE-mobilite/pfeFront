<template>
  <div id="dashboard">
    <nav class="navbar navbar-expand-sm navbar-light">
      <button class="navbar-toggler ml-auto mb-2 " type="buttom" data-toggle="collapse" data-target="#mynavbar" @click="collapsed= !collapsed"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse show" id="mynavbar" v-show="collapsed">
        <div class="container-fluid">
          <div class="row ">
            <!--sidebar-->
            <div class=" col-xl-2 col-lg-2 col-md-2   sidebar  fixed-top">
              <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Mobelite</a>
              <ul class="navbar-nav flex-column mt-4">
                <router-link to="/admin"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 current"><i class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li></router-link>
                <router-link to="/admin/employes"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-user text-light fa-lg mr-3"></i>Employes</a></li></router-link>
                <router-link to="/admin/clients"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-user text-light fa-lg mr-3"></i>Clients</a></li></router-link>
                <router-link to="/admin/projets"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-wrench text-light fa-lg mr-3"></i>Projets</a></li></router-link>
                <router-link to="/admin/service-hebergement"><li class="nav-item"><a href="#" class="nav-link text-white p-2 mb-2 sidebar-link"><i class="fas fa-cloud-upload-alt text-light fa-lg mr-3"></i>S.Hébergement</a></li></router-link>
                <router-link to="/admin/materiels"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-toolbox text-light fa-lg mr-3"></i>Materiels</a></li></router-link>
                <router-link to="/admin/fournisseurs"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-people-carry text-light fa-lg mr-3"></i>Fournisseurs</a></li></router-link>
                <router-link to="/admin/services-generaux"><li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-table text-light fa-lg mr-3"></i>S.Généraux</a></li></router-link>
                <router-link to="/admin/my-profil"><li class="nav-item" ><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i class="fas fa-wrench text-light fa-lg mr-3"></i>Paramètres</a></li></router-link>
              </ul>
            </div>
            <!--mysidebar-->
            <!--top-nav-->
            <div class="col-xl-10 col-lg-10  col-md-10 ml-auto topnav-1 fixed-top py-2 top-navbar show">
              <div class="row align-items-center">
                <div class="col-md-4 ">
                  <h4 class="text-light text-uppercase  mb-0">dashboard</h4>
                </div>
                <div class="col-md-5">
                  <form action="">
                    <div class="input-group">
                      <input type="text" class="form-control search-input" placeholder="Search...">
                      <button type="button" class="btn btn-white search-button"><i class="fas fa-search text-secondary"></i></button>
                    </div>
                  </form>
                </div>
                <div class="col-md-3">
                  <ul class="navbar-nav">
                    <li class="nav-item ml-md-auto "><a href="#" class="nav-link" data-toggle="modal" data-target="#sign-out" @click="logout"><i class="fas fa-sign-out-alt text-white fa-lg"></i> </a> </li>
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
        <div class="col-lg-10">
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
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        console.log('logout')
        this.$router.push('/')
      }).catch(error => console.log(error))
    }
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
  .topnav-1{
    background-color: #2f4050;
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
  @media(max-width: 768px){
    .sidebar{
      position: static;
      height: auto;
    }

    .top-navbar{
      position: static;
    }
  }
</style>
