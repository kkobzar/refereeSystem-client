<template>
  <div id="login">
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" id="email" name="email"/>
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async login() {
      await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...this.$data }),
      });
    },
  }
};
</script>

<style scoped>

</style>
