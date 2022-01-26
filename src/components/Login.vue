<template>
  <div id="login">
    <form @submit.prevent="loginUser({email,password})">
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
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: "",
      loading: false,
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    async login() {
      const res = await this.$store.actions.loginUser(this.email,this.password)
      //const res = await
      this.errors = res.message;
      setTimeout(() => (this.errors = ""), 5000);
    },
  }
};
</script>

<style scoped>

</style>
