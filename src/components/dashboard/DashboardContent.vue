<template>
  <div class="text-white">
    <div class="container">
      <div class="row">
        <div class="col-5"></div>
        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  body, html {
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url("../../assets/opg.jpg") no-repeat fixed center /cover;
  }
</style>
