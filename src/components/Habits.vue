<template>
  <div id="habits">
    <div v-if="!userHabits.length">
      <h2>No habits yet!</h2>
    </div>
    <ul v-else>
      <li v-for="habit in userHabits" :key="habit.id">
        <span>{{habit.title}}</span>
        <p v-if="habit.question">{{habit.question}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Habits",
  computed: {
    ...mapGetters(["userHabits"]),
  },
  async created() {
    await this.getHabits()
    //this.habits = mapGetters(['getHabits'])
  },
  methods:{
    ...mapActions(['getHabits'])
  }
};
</script>

<style scoped>

</style>
