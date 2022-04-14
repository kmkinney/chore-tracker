<template>
  <dialog class="add" id="add-chore">
    <h2>Add a chore</h2>
    <p>Select a Person:</p>
    <v-select
      label="name"
      :options="people"
      v-model="selectedPerson"
    ></v-select>
    <p>Chore name:</p>
    <input v-model="choreName" placeholder="Chore Name" />
    <p>Chore Descripttion:</p>
    <input v-model="choreDescription" placeholder="Chore Description" />
    <p>Day of Week</p>
    <v-select :options="days" v-model="choreDay"></v-select>
    <div class="buttons">
      <button class="close-btn" @click="add">Add</button>
      <button class="delete-btn" @click="close">Cancel</button>
    </div>
  </dialog>
</template>

<script>
import axios from 'axios';
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "AddChoreModal",
  data() {
    return {
      selectedPerson: {},
      choreName: "",
      choreDescription: "",
      choreDay: "",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  components: {
    vSelect,
  },
  props: {
    people: Array,
  },
  methods: {
    close() {
      let modal = document.querySelector("#add-chore");
      modal.close();
      this.$emit('update')
    },
    async add() {
        try {
            let pid = this.selectedPerson._id
            const resp = await axios.post(`/api/chores/person/${pid}`, {
                name: this.choreName,
                description: this.choreDescription,
                day: this.choreDay.toLowerCase()
            })
            console.log(resp.data)
            this.close()
        } catch(err) {
            console.log(err)
        }
    }
  },
};
</script>

<style scoped>
.add {
  /* position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0; */
  margin: auto;
  height: fit-content;
  width: fit-content;
  background-color: var(--yellow);
  /* border: 2px solid var(--blue); */
  padding: 50px;
  border-radius: 15px;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.close-btn {
  background-color: var(--green);
  border: none;
  color: var(--white);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn {
  background-color: var(--red);
  border: none;
  color: var(--white);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>