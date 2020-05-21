<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <div class="col">
        <div class="card border-0">
          <div class="card-header bg-white ">
          <h5 class="profiled text-muted text-left text-capitalize py-2">Notification</h5>
          </div>
          <div class="card-body">
              <NotificationModel v-for="notification in notifications" :noti="notification"></NotificationModel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationModel from './NotificationModel'
export default {
  components: {
    NotificationModel
  },
  computed: {
    notifications () {
      return this.$store.getters.notifications
    }
  }
}
</script>

<style scoped>
  input{
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: 1.25rem;
    color: #6c757d;
    box-shadow: none;
  }
  input:focus{
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: 1.25rem;
  }
  label{
    font-size: 1.25rem;
    color: #6c757d;
  }
</style>
