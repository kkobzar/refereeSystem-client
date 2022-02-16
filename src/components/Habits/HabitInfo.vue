<template>
  <section id="habit-info">
    <a @click="$router.go(-1)">Back</a>
    <v-date-picker
      @input="setHabitCheck"
      mode="date"
      :fillMode="false"
      v-model="checkedDate"
      v-if="loaded"
      :attributes="habitsChecks"
      :select-attribute="selectAttr"
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
      selectAttr: {
        highlight: {
          fillMode: "none",
          color: "purple",
        },
        contentStyle: {
          color: "grey",
        },
      },
    };
  },
  async created() {
    let hChecks = await habitService.getHabitChecks(this.$props.id);
    if (!hChecks) this.error = "Can't load data for this habit";
    this.habitsChecks.push({
      highlight: {
        color: "purple",
        fillMode: "outline",
      },
      dates: hChecks,
    });
    this.loaded = true;
  },
  methods: {
    async setHabitCheck() {
      if (
        await habitService.checkHabit(
          this.$props.id,
          this.checkedDate.getTime()
        )
      ) {
        let hChecks = await habitService.getHabitChecks(this.$props.id);
        this.habitsChecks = [
          {
            highlight: {
              color: "purple",
              fillMode: "outline",
            },
            dates: hChecks,
          },
        ];
      } else {
        this.error = "Can't check habit";
      }
    },
  },
};
</script>

<style scoped></style>
