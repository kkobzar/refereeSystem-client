<template>
  <div class="home">
    <AddHabit/>
    <Habits/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddHabit from "@/components/AddHabit";
import Habits from "@/components/Habits";

export default {
  name: "Home",
  components: {
    Habits,
    AddHabit,
  },
};
</script>
