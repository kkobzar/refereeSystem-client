<template>
  <section id="habit-info">
    <a @click="$router.go(-1)">Back</a>
    <h2 class="habit-title">{{title}}</h2>
    <v-date-picker
      ref="datePicker-ref"
      @input="setHabitCheck"
      mode="date"
      :fillMode="false"
      :value="checkedDate"
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
    title:String,
  },
  data() {
    return {
      habitsChecks: [],
      loaded: false,
      error: false,
      checkedDate: new Date(),
      selectAttr: {
        highlight: {
          color: "purple",
        },
      },
    };
  },
  computed: {
    selectedDate() {
      return this.checkedDate;
    },
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
    async setHabitCheck(d) {
      const setCheck = async (d) => {
        if (await habitService.checkHabit(this.$props.id, d.getTime())) {
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
      };
      try {
        await setCheck(d);
      } catch (e) {
        this.checkedDate = new Date();
        this.$refs["datePicker-ref"].$el.input();
        await setCheck(d);
      }
    },
  },
};
</script>

<style scoped></style>
