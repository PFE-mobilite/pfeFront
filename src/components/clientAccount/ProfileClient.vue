<template>
  <div class="container-fluid">
    <div class="row wrapper bg-white page-heading border-bottom-1">
      <div class="col-10">
        <h1 class="text-muted text-capitalize display-4 py-2">profile</h1>
      </div>
    </div>
    <div class="row py-4">
      <div class="col-lg-4 col-md-12  col-sm-12  py-1 mx-4"><PersonnalInfoCard></PersonnalInfoCard></div>
      <div class="col-lg-7 col-md-12 col-sm-12 py-1  mx-1"><PersonnalData></PersonnalData></div>
      <div class="col-md mx-1"></div>
    </div>
  </div>
</template>

<script>
import PersonnalInfoCard from './PersonnalInfoCard'
import PersonnalData from './PersonnalData'
export default {
  components: {
    PersonnalInfoCard,
    PersonnalData
  }
}
</script>

<style scoped>
  .page-heading {
    border-top: 1px;
    padding: 0 10px 20px 10px;
  }
</style>
