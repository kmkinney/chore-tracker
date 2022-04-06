<template>
  <div class="select"></div>
</template>

<script>
import choreChart from "../sampleData";
export default {
  name: "SelectView",
  data() {
      return {
          charts: [
              choreChart
          ]
      }
  },
};
</script>

<style scoped>
.select {
    border: 1px solid black;
}
</style>