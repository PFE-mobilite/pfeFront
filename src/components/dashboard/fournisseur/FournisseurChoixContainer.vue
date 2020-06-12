<template>
  <div class="container-fluid choix-fournisseur">
    <div class="row wrapper bg-white page-heading border-bottom-1">
      <div class="col-10">
        <h1 class="text-muted text-capitalize display-4 py-2">Fournisseur</h1>
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item "><router-link to="/admin/fournisseur-mat-list"><a href="" class="text-muted">Materiel</a></router-link></li>
          <li class="breadcrumb-item "><router-link to="/admin/fournisseur-ligne-list"><a href="" class="text-muted">Service Hebergement</a></router-link></li>
        </ol>
      </div>
    </div>
    <div class="row py-0">
     <div class="col py-0 mb-3 px-5"><router-view></router-view></div>
    </div>
  </div>
</template>

<style>
  .choix-fournisseur{
    margin-top: 50px;
  }
</style>
