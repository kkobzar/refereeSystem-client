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
import { mapGetters } from "vuex";
import authService from "@/services/authService";
import router from "@/router";

export default {
  name: "Navigation",
  computed:{
    ...mapGetters(["isLogged", "userInfo"]),
  },
  methods:{
    async logout(){
      await authService.logout();
      router.go("Login")
    }
  }
};
</script>

<style scoped>

</style>
