<template>
  <div class="create">
      <h1 class="title">Chore Tracker</h1>
      <h2 class="subtitle">Kevin Kinney</h2>
      <div class="form">
          <h3>Chart Name:</h3>
          <input v-model="name" placeholder="Name"/>
          <h3>People:</h3>
          <div v-for="person in people" :key="person.name">
              <p>{{person.name}}</p>
          </div>
          <input v-model="personName" placeholder="Person Name">
          <button @click.prevent="addPerson">Add</button>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CreateView',
  components: {
  },
  data() {
      return {
          name: "",
          personName: "",
          chores: [],
          people: [],
      }
  }
}
</script>

<style scoped>
.create {
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
