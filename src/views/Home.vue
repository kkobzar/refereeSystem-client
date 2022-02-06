<template>
  <div class="home">
    <AllUsers/>
    <AddHabit/>
    <Habits/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllUsers from "@/components/AllUsers";
import AddHabit from "@/components/AddHabit";
import Habits from "@/components/Habits";

export default {
  name: "Home",
  components: {
    Habits,
    AddHabit,
    AllUsers,
  },
};
</script>
