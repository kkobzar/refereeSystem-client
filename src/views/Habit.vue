<template>
  <div id="habit-info">
    <HabitInfo :id="parseInt(habitId)" :title="getHabit.title"/>
  </div>
</template>

<script>
import HabitInfo from "@/components/Habits/HabitInfo";
import { mapGetters } from "vuex";
export default {
  name: "Habit",
  components: { HabitInfo },
  data(){
    return{
      habitId: this.$route.params.id
    }
  },
  computed:{
    ...mapGetters(["userHabits"]),
    getHabit(){
      return this.userHabits.find(i=>i.id === this.habitId)
    }
  }
};
</script>

<style scoped>

</style>
