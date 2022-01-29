<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AllUsers/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AllUsers from "@/components/AllUsers";

export default {
  name: "Home",
  components: {
    AllUsers,
    HelloWorld,
  },
};
</script>
