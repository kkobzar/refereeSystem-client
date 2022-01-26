<template>
  <div id="registration">
    <form @submit.prevent="registration">
      <label for="name">Name</label>
      <input v-model="name" id="name" name="name" />
      <label for="surname">Surname</label>
      <input v-model="surname" id="surname" name="surname" />
      <label for="email">Email</label>
      <input v-model="email" id="email" name="email" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
      <label for="passwordConfirm">Confirm password</label>
      <input
        type="password"
        name="passwordConfirm"
        id="passwordConfirm"
        v-model="passwordConfirm"
      />
      <input type="submit" value="Register" />
    </form>
    <div v-if="errors" class="errors">{{ errors }}</div>
    <router-link to="login">Login</router-link>
  </div>
</template>

<script>
import userService from "@/services/userService";
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      surname: "",
      errors: "",
    };
  },
  methods: {
    async registration() {
      const res = await userService.register(
        this.name,
        this.surname,
        this.email,
        this.password,
        this.passwordConfirm
      );
      console.log(res);
      if (res.errors && res.message) {
        this.errors = res.message;
        setTimeout(() => (this.message = ""), 5000);
      }
    },
  },
};
</script>

<style scoped>

</style>
