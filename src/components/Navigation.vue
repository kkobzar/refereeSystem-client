<template>
<nav id="navigation">
  <div v-if="isLogged"><p>Hello, {{userInfo.name}}!</p></div>
  <button v-if="isLogged" @click.prevent="logout">Logout</button>
  <div v-else>
    Please, login
  </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "@/router";

export default {
  name: "Navigation",
  computed:{
    ...mapGetters(["isLogged", "userInfo"]),
  },
  methods:{
    async logout(){
      await this.logoutUser();
      await router.push("/login")
    },
    ...mapActions(['logoutUser'])
  }
};
</script>

<style scoped>

</style>
