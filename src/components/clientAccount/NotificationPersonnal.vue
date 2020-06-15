<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <div class="col">
        <div class="card border-0">
          <div class="card-header bg-white ">
          <h5 class="profiled text-muted text-left text-capitalize py-2">Notification</h5>
          </div>
          <div class="card-body">
              <Notification></Notification>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './NotificationModel'
export default {
  components: {
    Notification
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
