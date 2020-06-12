<template>
  <div class="container-fluid bg">
    <div class="row">
      <div class="col pt-5 ">
        <div class="mt-1">
          <registing></registing>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registing from '../components/authentification/signup'
export default {
  components: {
    registing
  }
}
</script>
<style lang="scss" scoped>
  .bg {
    background-image: url("../assets/ks.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh);
    witdh: calc(100vh)
  }
  nav{
    background-color: #0d152c;
  }
</style>
