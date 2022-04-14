<template>
  <nav class="nav">
    <ul class="nav-links">
      <li><router-link class="link" :to="{path:'/create'}">Create Chart</router-link></li>
      <li><router-link class="link" :to="{path:'/select'}">Select Chart</router-link></li>
    </ul>
    <h1 class="title">Chore Tracker</h1>
  </nav>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style scoped>
.nav {
  background-color: var(--white);
  color: var(--blue);
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.nav-links {
    display: flex;
    list-style: none;
    justify-content: space-around;
}

.link {
    color: var(--green);
    font-size: 1.5rem;
    text-decoration: none;
}
.link:hover {
    text-decoration: underline;
}

.title {
  font-size: 4rem;
}

.subtitle {
  font-size: 2rem;
  color: var(--green);
}
</style>