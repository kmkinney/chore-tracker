<template>
  <div class="home">
      <nav-header/>
      <!-- <CreateView v-show="true"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from "@/components/NavHeader.vue"
// import CreateView from "./CreateView.vue"

export default {
  name: 'HomeView',
  components: {
    //   CreateView,
      NavHeader,
  }
}
</script>

<style scoped>
.home {
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
