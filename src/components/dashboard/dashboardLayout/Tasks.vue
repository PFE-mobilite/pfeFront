<template>
  <div class="col-xl-6 col-12">
    <h4 class="text-muted p-3 md-3 mb-3">Statistique:</h4>
    <pie-chart suffix="TND" :donut="true" :colors="['#4cf603', '#ea11f1','#12abe7']" :data="[['Depense Materiels',depenseMateriels['1']],['Depense ServiceHebergement',depenseServiceHerbergement['1']],['depense Generaux',depenseLigneSG['1']]]"></pie-chart>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      nombreProjet: 0,
      nombreClient: 0,
      depenseMateriels: 0,
      depenseServiceHerbergement: 0,
      depenseLigneSG: 0
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/statistique').then(res => {
      const dataImported = res.data
      console.log(dataImported)
      this.nombreProjet = dataImported.nbrProjet
      this.nombreClient = dataImported.nbrClient
      this.depenseMateriels = dataImported.depenseMateriels[0]
      this.depenseServiceHerbergement = dataImported.depenseSH[0]
      this.depenseLigneSG = dataImported.depenseLigneSg[0]
    }).catch(err => console.log(err))
  }
}
</script>

<style>
</style>
