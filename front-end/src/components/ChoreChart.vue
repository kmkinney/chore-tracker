<template>
  <div class="chart">
    <div class="chart-grid-row header-row">
      <div class="chart-grid-box" style="grid-area: name">
        <span class="header">Name</span>
      </div>
      <div
        class="chart-grid-box"
        v-for="(day, index) in daysOfWeek"
        :key="`day-${index}`"
        :style="{ gridArea: day.toLowerCase() }"
      >
        <span class="header">{{ day.at(0) }}</span>
      </div>
    </div>
    <div
      class="chart-grid-row person-row"
      v-for="person in chart.people"
      :key="person.id"
    >
      <span class="person-name">
        {{ person.name }}
      </span>
      <div
        class="chart-grid-box"
        v-for="day in person.days"
        :key="day.name"
        :style="{ gridArea: day.name }"
      >
        <a
          class="chore"
          v-for="chore in day.chores"
          :key="`${day.name}-${chore.id}`"
          @click.prevent="openModal(chore)"
        >
          {{ getChoreById(chore.id).name }}
        </a>
      </div>
    </div>
    <ChoreModal
      v-show="isModalOpen"
      @close="closeModal"
      :name="clickedName"
      :description="clickedDescription"
      :complete="clickedComplete"
    />
  </div>
</template>

<script>
import { choreChart } from "@/sampleData";
import ChoreModal from "./ChoreModal.vue";

export default {
  name: "ChoreChart",
  components: {
    ChoreModal,
  },
  data() {
    return {
      chart: choreChart,
      isModalOpen: false,
      clickedName: "",
      clickedDescription: "",
      clickedComplete: false,
    };
  },
  created() {},
  methods: {
    getChoreById(id) {
      return choreChart.chores.filter((chore) => chore.id === id)[0];
    },
    openModal(chore) {
      let choreData = this.getChoreById(chore.id);
      this.clickedName = choreData.name;
      this.clickedDescription = choreData.description;
      this.clickedComplete = chore.done;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
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
  /* background-color: var(--yellow); */
}

.chart-grid-row {
  /* min-width: 500px; */
  /* overflow-y: hidden; */
  display: grid;
  grid-template-areas: "name sunday monday tuesday wednesday thursday friday saturday";
  grid-template-columns: repeat(8, 1fr);
}

.chart-grid-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header-row {
  background-color: var(--blue);
  color: var(--yellow);
  padding: 5px 0;
}

.header {
  font-size: 1.5rem;
  font-weight: bold;
}

.person-row {
  padding: 0;
}

.person-name {
  font-size: 1.2rem;
  background-color: var(--green);
  color: var(--white);
  padding: 15px 0;
}

.chore {
  margin: 3px 0;
  cursor: pointer;
  background-color: var(--yellow);
  padding: 4px 10px;
  border-radius: 5px;
}
</style>