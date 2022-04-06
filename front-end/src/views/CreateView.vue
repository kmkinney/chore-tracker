<template>
  <div class="create">
    <h2 class="subtitle">Create Chore Chart</h2>
    <div class="form">
      <h3>Chart Name:</h3>
      <input v-model="name" placeholder="Chart Name" />
      <h3>People:</h3>
      <div v-for="(person, index) in people" :key="`person-${index}`">
        <p>{{ person.name }}</p>
        <button class="rm-btn" @click.prevent="removePerson(index)">X</button>
      </div>
      <div>
        <input
          @keyup.enter="addPerson"
          v-model="personName"
          placeholder="Person Name"
        />
        <button class="add-btn" @click.prevent="addPerson">Add</button>
      </div>

      <h3>Chores:</h3>
      <div v-for="(chore, index) in chores" :key="`chore-${index}`">
        <p>{{ chore.name }}</p>
        <button class="rm-btn" @click.prevent="removeChore(index)">X</button>
      </div>
      <div>
        <input
          @keyup.enter="addChore"
          v-model="choreName"
          placeholder="Chore Name"
        />
        <button class="add-btn" @click.prevent="addChore">Add</button>
      </div>

      <button class="create-btn" type="submit" @click.prevent="createChart()">
        Create Chart
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CreateView",
  components: {},
  data() {
    return {
      name: "",
      personName: "",
      choreName: "",
      chores: [],
      people: [],
    };
  },
  methods: {
    addPerson() {
      if (this.personName !== "") {
        this.people.push({ name: this.personName });
        this.personName = "";
      }
    },
    addChore() {
      if (this.choreName !== "") {
        this.chores.push({ name: this.choreName });
        this.choreName = "";
      }
    },
    removeChore(index) {
        this.chores.splice(index, 1)
    },
    removePerson(index) {
        this.people.splice(index,1)
    }
  },
};
</script>

<style scoped>
.create {
  background-color: var(--white);
  color: var(--blue);
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form p {
    display: inline;
}

.title {
  font-size: 4rem;
}

.subtitle {
  font-size: 2rem;
  color: var(--green);
}

.add-btn {
  background-color: var(--blue);
  color: var(--white);
  border: none;
  border-radius: 5px;
  margin: 0px 10px;
  padding: 5px 10px;
  cursor: pointer;
}

.rm-btn {
    background-color: var(--red);
    color: var(--white);
    font-weight: bold;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.create-btn {
  display: block;
  background-color: var(--green);
  color: var(--white);
  border: none;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
}

.add-btn:hover,
.rm-btn:hover,
.create-btn:hover {
    opacity: .7;
}
</style>
