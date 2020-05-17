<template>
  <div class="Display card">
    <MiniCards></MiniCards>
    <div class="container-fluid">
      <div class="row">
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
export default {
  components: {
    MiniCards,
    Tasks,
    EmployeActivity
  }
}
</script>

<style>
  .Display{
    margin-top: 50px;
    background-color: #eee;
  }
</style>
