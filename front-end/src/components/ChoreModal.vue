<template>
  <dialog class="modal" :id="chore.id">
    <h2>{{ chore.name }}</h2>
    <p>{{ chore.description }}</p>
    <div class="buttons">
      <button class="close-btn" @click="close">Complete</button>
      <button class="delete-btn" @click="deleteChore">Delete</button>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "ChoreModal",
  props: {
    chore: Object,
  },
  methods: {
    close() {
      let modal = document.querySelector("#abcd");
      modal.close();
    },
    deleteChore() {
      this.$emit("delete");
    },
  },
};
</script>

<style scoped>
.modal {
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
  padding: 20px;
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