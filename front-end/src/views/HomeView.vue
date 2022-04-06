<template>
  <div class="home">
      <h1 class="title">Chore Tracker</h1>
      <h2 class="subtitle">Kevin Kinney</h2>
      <ChoreChart v-show="false"/>
      <CreateView/>
  </div>
</template>

<script>
// @ is an alias to /src
import ChoreChart from "@/components/ChoreChart.vue"
import CreateView from "./CreateView.vue"

export default {
  name: 'HomeView',
  components: {
      ChoreChart,
      CreateView
  }
}
</script>

<style scoped>
.home {
    background-color: var(--white);
    color: var(--blue);
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.title {
    font-size: 4rem;
}

.subtitle {
    font-size: 2rem;
    color: var(--green);
}
</style>
