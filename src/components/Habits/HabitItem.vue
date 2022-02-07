<template>
  <li class="habit-item">
    <div v-if="!edited" class="habit-item__info">
      <p>{{ title }}</p>
      <p v-if="question">{{ question }}</p>
      <button @click.prevent="edited = true">Edit</button>
    </div>
    <div v-if="edited" class="habit-item__edit">
      <input type="text" v-model="title" />
      <input v-if="question" type="text" v-model="question" />
      <button>Save</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "HabitItem",
  props: {
    title: String,
    question: String,
  },
  data() {
    return {
      edited: false,
    };
  },
};
</script>

<style scoped></style>
