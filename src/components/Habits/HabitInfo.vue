<template>
  <section id="habit-info">
    <a @click="$router.go(-1)">Back</a>
    <v-calendar is-dark />
  </section>
</template>

<script>
export default {
  name: "HabitInfo",
  props:{
    id:Number,
  },
  data(){
    return{
      habitsChecks: []
    }
  },
  async created(){

  }
};
</script>

<style scoped>

</style>
