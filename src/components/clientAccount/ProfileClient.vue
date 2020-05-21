<template>
  <div class="container-fluid">
    <div class="row wrapper bg-white page-heading border-bottom-1">
      <div class="col-10">
        <h1 class="text-muted text-capitalize display-4 py-2">profile</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-5 mx-4"><PersonnalInfoCard></PersonnalInfoCard></div>
      <div class="col-md-6 mt-5 mx-4"><NotificationPersonnal></NotificationPersonnal></div>
      <div class="col-md-2 mx-4"></div>
    </div>
  </div>
</template>

<script>
import PersonnalInfoCard from './PersonnalInfoCard'
import NotificationPersonnal from './NotificationPersonnal'
export default {
  components: {
    PersonnalInfoCard,
    NotificationPersonnal
  },
  created () {
    this.$store.dispatch('initNotification')
  }

}
</script>

<style>
  .page-heading {
    border-top: 1px;
    padding: 0 10px 20px 10px;
  }
</style>
