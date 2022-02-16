<template>
  <div id="habit-info">
    <HabitInfo :id="parseInt(habitId)"/>
  </div>
</template>

<script>
//import router from "@/router";

import HabitInfo from "@/components/Habits/HabitInfo";
export default {
  name: "Habit",
  components: { HabitInfo },
  data(){
    return{
      habitId: this.$route.params.id
    }
  }
};
</script>

<style scoped>

</style>
