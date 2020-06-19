<template>
  <div class="Display card">
    <MiniCards></MiniCards>
    <div class="container-fluid">
      <div class="row">
        <ChartLigne></ChartLigne>
          <EmployeActivity></EmployeActivity>
          <Tasks></Tasks>
      </div>
    </div>
  </div>
</template>

<script>
import MiniCards from './MiniCards'
import Tasks from './Tasks'
import EmployeActivity from './accordiontest'
import ChartLigne from './lineChartVD'
export default {
  components: {
    MiniCards,
    Tasks,
    EmployeActivity,
    ChartLigne
  }
}
</script>

<style>
  .Display{
    margin-top: 50px;
    background-color: #eee;
  }
</style>
