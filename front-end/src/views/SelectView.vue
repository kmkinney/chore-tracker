<template>
  <div class="select">
      <nav-header/>
      <h2>Chore Charts</h2>
      <div class="chart-links" v-for="chart in charts" :key="chart._id">
          <router-link class="chart-link" :to="{name: 'chart', params: {id: chart._id}}">{{chart.name}}</router-link>
      </div>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import axios from 'axios';

export default {
  name: "SelectView",
  components: {
      NavHeader
  },
  data() {
      return {
          charts: []
      }
  },
  created() {
      this.getCharts()
  },
  methods: {
      async getCharts() {
          try {
              const resp = await axios.get('/api/charts')
              console.log(resp.data)
              this.charts = resp.data
          } catch(err) {
              console.log(err)
          }
      }
  }
};
</script>

<style scoped>
.select {
    color: var(--green);
}
.chart-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}

.chart-link {
    display: block;
    width: 50%;
    color: var(--white);
    background-color: var(--blue);
    padding: 10px 10px;
    margin: 20px 0;
    text-decoration: none;
    border-radius: 7px;
}

.chart-link:hover {
    background-color: var(--green);
}
</style>