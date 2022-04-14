<template>
  <div class="chart">
    <nav-header />
    <button class="add-chore" @click.prevent="openAddChore">Add Chore</button>
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
      :key="person._id"
    >
      <span class="person-name">
        {{ person.name }}
      </span>
      <div
        class="chart-grid-box"
        v-for="day in daysOfWeekLower"
        :key="day"
        :style="{ gridArea: day }"
      >
        <a
          class="chore"
          :class="{done: chore.done}"
          v-for="chore in getChores(person._id, day)"
          :key="chore._id"
          @click.prevent="openModal(chore)"
        >
          {{ chore.name }}
        </a>
      </div>
    </div>
    <chore-modal
      :chore="selectedChore"
      @update="getChoreList"
    />
    <add-chore-modal :people="chart.people" @update="getChoreList"/>
  </div>
</template>

<script>
import ChoreModal from "../components/ChoreModal.vue";
import axios from "axios";
import NavHeader from "@/components/NavHeader.vue";
import AddChoreModal from "@/components/AddChoreModal.vue";

export default {
  name: "ChoreChart",
  components: {
    ChoreModal,
    NavHeader,
    AddChoreModal,
  },
  data() {
    return {
      id: this.$route.params.id,
      chart: {},
      choreList: {},
      loading: false,
      selectedChore: {},
    };
  },
  async created() {
    await this.getChart();
    await this.getChoreList();
  },
  methods: {
    async getChoreById(id) {
      try {
        const resp = await axios.get(`/api/chores/${id}`);
        const chore = resp.data;
        return chore;
      } catch (err) {
        console.log(err);
      }
    },
    openModal(chore) {
      console.log(chore);
      this.selectedChore = chore
      let choreModal = document.querySelector(`#view-chore`);
      choreModal.showModal();
    },
    openAddChore() {
      let addModal = document.querySelector("#add-chore");
      addModal.showModal();
    },
    async getChart() {
      try {
          this.loading=true
        const resp = await axios.get(`/api/charts/${this.id}`);
        const chart = await resp.data;
        this.chart = chart;
        this.people = chart.people;
        console.log("CHART",chart);
      } catch (err) {
        console.log(err);
      }
    },
    async getChoreList() {
      try {
          this.loading = true
          let newList = {}
        for (let person of this.chart.people) {
          let id = person._id;
          let days = {};
          for (let day of this.daysOfWeekLower) {
            days[day] = [];
          }
          const resp = await axios.get(`/api/chores/person/${id}`);
          let chores = resp.data;
          for (let chore of chores) {
            let day = chore.day;
            days[day].push(chore);
          }
          newList[id] = days;
        }
        console.log("LIST", this.choreList);
        this.choreList = newList
        this.loading = false
      } catch (err) {
        console.log(err);
      }
    },
    getChores(person, day) {
        console.log(person, day)
        let list = this.choreList[person]
        console.log(person in this.choreList)
        if(!list){
            return []
        }
        return list[day]
    }
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
    daysOfWeekLower() {
      return [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
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

.done {
    text-decoration: line-through;
}

.add-chore {
    background: var(--yellow);
    padding: 20px;
    margin-bottom: 20px;
    border:none;
    border-radius: 7px;
    font-size: 1rem;
}
</style>