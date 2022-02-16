<template>
  <section id="habit-info">
    <a @click="$router.go(-1)">Back</a>
    <v-calendar v-if="loaded" :attributes="habitsChecks" />
  </section>
</template>

<script>
import habitService from "@/services/habitService";

export default {
  name: "HabitInfo",
  props:{
    id:Number,
  },
  data(){
    return{
      habitsChecks: [],
      loaded:false,
    }
  },
  async created(){
    let hChecks = await habitService.getHabitChecks(this.$props.id)
    this.habitsChecks = [{
      highlight: {
        color: 'purple',
        fillMode: 'outline'
      },
      dates: hChecks,
    }];
    this.loaded = true;
  },
  methods:{
    getAttrs(){
      return{
          highlight: {
            color: 'purple',
            fillMode: 'outline'
          },
          dates: this.habitsChecks,
        }

    }
  }
};
</script>

<style scoped>

</style>
