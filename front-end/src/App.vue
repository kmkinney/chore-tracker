<template>
  <div id="app">
    <router-view/>
    <FooterComponent v-show="false"/>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue"

export default {
    name: 'App',
    components: {
        FooterComponent
    }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--white);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Colors */
:root {
    --red: #FE6D73;
    --white: #FEF9EF;
    --yellow: #FFCB77;
    --green: #17C3B2;
    --blue: #227C9D;
}
</style>
