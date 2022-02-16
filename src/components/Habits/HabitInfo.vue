<template>
  <section id="habit-info">
    <a @click="$router.go(-1)">Back</a>
    <v-date-picker
      color="purple"
      @input="setHabitCheck"
      mode="date"
      v-model="checkedDate"
      v-if="loaded"
      :attributes="habitsChecks"
    />
  </section>
</template>

<script>
import habitService from "@/services/habitService";

export default {
  name: "HabitInfo",
  props: {
    id: Number,
  },
  data() {
    return {
      habitsChecks: [],
      loaded: false,
      error: false,
      checkedDate: null,
    };
  },
  async created() {
    let hChecks = await habitService.getHabitChecks(this.$props.id);
    if (!hChecks) this.error = "Can't load data for this habit";
    this.habitsChecks = [
      {
        highlight: {
          color: "purple",
          fillMode: "outline",
        },
        dates: hChecks,
      },
    ];
    this.loaded = true;
  },
  methods: {
    async setHabitCheck() {
      console.log(this.checkedDate.getTime());
      if (!await habitService.checkHabit(this.$props.id,this.checkedDate.getTime())){
        this.error = "Can't check habit";
      }
    },
  },
};
</script>

<style scoped></style>
