<template>
  <div class="contact-us full-screen bg-secondary">
    <nav class="navbar navbar-ct-default" role="navigation-demo">
      <div class="container">
        <div class="collapse navbar-collapse" id="navigation-example-2">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="{path:'/'}">Home</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-->
    </nav>
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row pl-5  ml-5">
            <div class="col-md-8 col-md-offset-2 pl-5  ml-5 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">Oops! It seems that this page does not exist.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-demo">
      <div class="container">
        <nav class="pull-left">
          <ul>
            <li>
              <router-link :to="{path:'/admin'}">Home</router-link>
            </li>
            <li>
              <router-link :to="{path:'/register'}">Register</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
