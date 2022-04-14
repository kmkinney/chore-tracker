<template>
  <div class="select">
      <nav-header/>
      <div v-for="chart in charts" :key="chart._id">
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
</style>