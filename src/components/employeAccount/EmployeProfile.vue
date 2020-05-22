<template>
  <div class="container-fluid">
    <div class="row wrapper bg-white page-heading border-bottom-1">
      <div class="col-10">
        <h1 class="text-muted text-capitalize display-4 py-2">profile</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1 mt-5 mx-4"></div>
      <div class="col-md-8 mt-5 mx-4"><PersonnalInfoEmp></PersonnalInfoEmp></div>
      <div class="col-md-3 mx-4"></div>
    </div>
  </div>
</template>

<script>
import PersonnalInfoEmp from './PersonnalInfoEmploye'
export default {
  components: {
    PersonnalInfoEmp
  }
}
</script>

<style scoped>
  .page-heading {
    border-top: 1px;
    padding: 0 10px 20px 10px;
  }
</style>
