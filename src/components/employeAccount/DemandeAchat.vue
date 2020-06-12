<template>
  <div class="container-fluid">
    <div class="row wrapper bg-white page-heading border-bottom-1">
      <div class="col-10">
        <h1 class="text-muted text-capitalize display-4 py-2">Nouveau commande</h1>
        <ol class="breadcrumb bg-white">
         <li class="breadcrumb-item "><router-link to="/employeAccount/employe-achat-materiel-list"><a href="" class="text-muted">Materiel</a></router-link></li>
          <li class="breadcrumb-item "><router-link to="/employeAccount/employe-achat-ser-list"><a href="" class="text-muted">Service Hebergement</a></router-link></li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10 mt-5"><router-view></router-view></div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>
