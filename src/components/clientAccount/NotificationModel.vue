<template>
 <div class="container-fluid">
   <div class="row">
     <div class="col-md-4 my-3 text-muted text-left">
       <h5>{{noti.nom_projet}}</h5>
     </div>
     <div class="col-md-7 my-3 text-muted text-left">
       <h6>{{noti.blabli}}</h6>
     </div>
     <div class="col-md-1 my-3 text-muted text-left">
       <a href=""><i class="fa fa-times text-muted"></i></a>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  props: ['noti']
}
</script>
