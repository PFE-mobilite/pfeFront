<template>
 <div class="container-fluid">
   <div class="row">
     <div class="card card-userprofil">
       <div class="card-body text-center mt-4">
         <div class="card-body text-center mt-4">
           <div class="row">
             <div class="col-md-12 pr-md-1">
               <b-avatar variant="info" size="6rem"></b-avatar>
             </div>
           </div>
           <div class="row">
             <div class="col-md-12 pr-md-1">
               <h6 class="display-6 text-center text-white mt-3">{{employe.nom}} {{employe.prenom}}</h6>
               <p class="text-white">
                 {{employe.email}}
               </p>
               <br>
               <br>
               <br>
               <br>
               <h4 class="display-6 text-center text-white">{{employe.poste}}</h4>
             </div>
           </div>
         </div>
       </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-12 pr-md-1 text-center">
            <i class="fab fa-facebook fa-2x text-info mr-3"></i>
            <i class="fab fa-linkedin fa-2x text-info mr-3"></i>
            <i class="fab fa-twitter fa-2x text-info mr-2"></i>
            </div>
          </div>
        </div>
     </div>
   </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      employe: 'employe'
    })
  }
}

</script>

<style>
  .card-userprofil{
    margin-top: 50px;
    width: 100vh;
    height: 70vh;
    background: transparent;
    -webkit-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 29px 5px 0px rgba(0,0,0,0.75);
  }
</style>
