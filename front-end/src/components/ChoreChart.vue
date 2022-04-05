<template>
  <div class="chart">
      <table>
          <th>Chore</th>
          <th v-for="day in daysOfWeek" :key="day">{{day}}</th>
        <div class="chores" v-for="chore in chores" :key="chore.id">
            <tr>{{chore.name}}</tr>
        </div>  
      </table>
      <div class="chores" v-for="chore in chores" :key="chore.id">
          <h2>{{chore.name}}</h2>
          <p>{{chore.description}}</p>

      </div>
  </div>
</template>

<script>
export default {
  name: "ChoreChart",
  data() {
    return {
      chores: [
        {
          id: 1,
          name: "Dishes",
          description: "Wash the dishes",
          done: false,
        },
      ],
      people: [],
    };
  },
  created() {},
  methods: {},
  computed: {
    daysOfWeek() {
      return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    },
  },
};
</script>

<style scoped>
.chart {
  display: grid;
}
</style>