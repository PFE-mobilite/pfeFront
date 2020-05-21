<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control searching mr-sm-2 text-white" type="search" placeholder="Search for something" aria-label="Search">
        </form>
      </div>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item mt-2"><span class="m-r-sm text-white">Bienvenue sur le compte Employe Mobelite</span></li>
        <li class="nav-item icon-parent"><a href="#" class="nav-link"><i class="fa fa-envelope text-white"></i> </a> </li>
        <li class="nav-item icon-parent"><a href="#" class="nav-link "><i class="fas fa-bell text-white"></i> </a> </li>
        <li class="nav-item ml-md-auto "><a href="#"  class="nav-link text-white" data-toggle="modal" data-target="#sign-out"><i class="fas fa-sign-out-alt text-white"></i>logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  nav{
    background-color: #2f4050;
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
  .icon-parent{
    position: relative;

  }
  .fa{
    background-color: white;
  }
</style>
