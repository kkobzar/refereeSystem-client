<template>
  <div id="login">
    <form @submit.prevent="login(email, password)">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" id="email" name="email"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" />
      </div>
      <div class="form-group">
        <input type="submit" value="Login">
      </div>
    </form>
    <div v-if="errors" class="errors">{{ errors }}</div>
    <router-link to="registration">Registration</router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store";
import router from "@/router";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    async login(email, password) {
      await store.dispatch("loginUser", { email, password });
      await router.push("/");
    },
  },
};
</script>

<style scoped>

</style>
