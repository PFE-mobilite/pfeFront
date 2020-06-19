<template>
  <div class="col-xl-6 col-12 mb-5">
    <h4 class="text-muted p-3 md-3 mb-3">Depense:</h4>
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
    axios.get('http://127.0.0.1:8000/api/statistique').then(res => {
      const dataImported = res.data
      const depenseMaterielsInterne = dataImported.depenseMaterielsInterne[0]
      const depenseMaterielsExterne = dataImported.depenseMaterielsExtene[0]
      const depenseSH = dataImported.depenseSH[0]
      const depenseLigneSG = dataImported.depenseLigneSg[0]
      this.depenseInterne = depenseMaterielsInterne['1'] + depenseLigneSG['1']
      this.depenseExterne = depenseMaterielsExterne['1'] + depenseSH['1']
    }).catch(err => console.log(err))
  }
}
</script>

<style>
</style>
