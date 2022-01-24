<template>
  <div id="login">
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" id="email" name="email"/>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
      <input type="submit" value="Login">
    </form>
    <div v-if="errors" class="errors">{{ errors }}</div>
    <router-link to="registration">Registration</router-link>
  </div>
</template>

<script>
import userService from "@/services/userService";
export default {
  name: "Login",
  data(){
    return {
      email: "",
      password: "",
      errors: "",
      loading: false,
    }
  },
  methods: {
    async login() {
      this.loading = true
      const res = await userService.login(this.email,this.password)
      this.errors = res.message;
      this.loading = false
      setTimeout(() => (this.errors = ""), 5000);
    },
  }
};
</script>

<style scoped>

</style>
