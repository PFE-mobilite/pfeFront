<template>
  <div class="col-xl-6 col-12 mb-5">
    <h4 class="text-muted p-3 md-3 mb-3">Dépenses:</h4>
    <pie-chart suffix="TND" :colors="['#4cf603', '#ea11f1']" :data="[['Depense Interne',depenseInterne],['Depense Externes',depenseExterne]]"></pie-chart>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      depenseInterne: 0,
      depenseExterne: 0
    }
  },
  created () {
    axios.get('http://localhost:8080/api/statistique').then(res => {
      const dataImported = res.data
      console.log('importedstatistuqe')
      console.log(dataImported)
      this.depenseInterne = dataImported.depenseInterne
      this.depenseExterne = dataImported.depenseExterne
    }).catch(err => console.log(err))
  }
}
</script>

<style>
</style>
