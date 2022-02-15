<template>
  <li class="habit-item">
    <div v-if="!edited" class="habit-item__info">
      <p>{{ editTitle }}</p>
      <p v-if="editQuestion">{{ editQuestion }}</p>
      <button @click.prevent="edited = true">Edit</button>
    </div>
    <div v-if="edited" class="habit-item__edit">
      <input type="text" v-model="editTitle" />
      <input v-if="editQuestion" type="text" v-model="editQuestion" />
      <button @click.prevent="editHabitMethod">Save</button>
    </div>
    <v-calendar></v-calendar>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import VCalendar from 'v-calendar'
export default {
  name: "HabitItem",
  components: { VCalendar },
  props: {
    title: String,
    question: String,
  },
  data() {
    return {
      edited: false,
      editTitle: "",
      editQuestion: "",
    };
  },
  beforeMount() {
    this.$data.editTitle = this.$props.title;
    this.$data.editQuestion = this.$props.question;
  },
  methods:{
    async editHabitMethod(){
      await this.editHabit({id: this.$vnode.key,
      title: this.$data.editTitle,
      question: this.$data.editQuestion});
      this.$data.edited = false;
    },
    ...mapActions(['editHabit'])
  }
};
</script>

<style scoped></style>
