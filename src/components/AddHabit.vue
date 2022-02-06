<template>
  <div id="newHabit">
    <form @submit.prevent="addHabit">
      <div class="form-group">
        <label for="title">Name habit</label>
        <input required type="text" id="title" v-model="habitTitle" />
      </div>
      <div class="form-group">
        <label for="question">Question for habit</label>
        <input type="text" id="question" v-model="habitQuestion" />
      </div>
      <input type="submit" value="Add Habit" />
    </form>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "AddHabit",
  data() {
    return {
      habitTitle: "",
      habitQuestion: "",
    };
  },
  methods: {
    async addHabit() {
      let title = this.habitTitle;
      let question = this.habitQuestion;
      await store.dispatch("addHabit",{ title, question})
      await store.dispatch("getHabits")
    }
  }
};
</script>

<style scoped>

</style>
