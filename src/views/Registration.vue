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
  nav{
    background-color: #0d152c;
  }
</style>
