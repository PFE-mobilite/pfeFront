<template>
  <div>
    <div class="alert alert-success mt-5"  v-if="success" role="alert">
       <strong>{{msg}}</strong> est {{action}} avec succès
    </div>
    <div class="alert alert-danger mt-5"  v-if="failed" role="alert">
       votre <strong>{{msg}}</strong> a échoué
    </div>
  </div>
</template>

<script>
export default {
  props: ['success', 'failed', 'msg', 'action']
}
</script>
