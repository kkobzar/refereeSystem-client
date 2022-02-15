<template>
  <div id="habit-info">
    {{habitId}}
  </div>
</template>

<script>
//import router from "@/router";

export default {
  name: "Habit",
  data(){
    return{
      habitId: this.$route.params.id
    }
  },
  async created(){

  }
};
</script>

<style scoped>

</style>
