<template>
  <div class="text-white">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
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
