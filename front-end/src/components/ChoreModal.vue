<template>
  <dialog class="modal" id="view-chore">
    <h2>{{ chore.name }}</h2>
    <p>{{ chore.description }}</p>
    <div class="buttons">
      <button class="close-btn" @click="complete">Complete</button>
      <button class="delete-btn" @click="incomplete">Un Copmlete</button>
      <button class="delete-btn" @click="deleteChore">Delete</button>
    </div>
  </dialog>
</template>

<script>
import axios from 'axios';
export default {
  name: "ChoreModal",
  props: {
    chore: Object,
  },
  methods: {
    async complete() {
        try {
            await axios.put(`/api/chores/${this.chore._id}`,{done:true})
            this.close()
        } catch(err) {
            console.log(err)
        }
    },
    async incomplete() {
        try {
            await axios.put(`/api/chores/${this.chore._id}`,{done:false})
            this.close()
        } catch(err) {
            console.log(err)
        }
    },
    async deleteChore() {
      try {
            await axios.delete(`/api/chores/${this.chore._id}`)
            this.close()
        } catch(err) {
            console.log(err)
        }
    },
    close() {
      let modal = document.querySelector("#view-chore");
      modal.close();
      this.$emit('update')
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