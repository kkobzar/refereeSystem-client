<template>
  <div id="registration">
    <form @submit.prevent="registerUser({name,surname,email,password,passwordConfirm})">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" id="name" name="name" />
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input v-model="surname" id="surname" name="surname" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" id="email" name="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" />
      </div>
      <div class="form-group">
        <label for="passwordConfirm">Confirm password</label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          v-model="passwordConfirm"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Register" />
      </div>
    </form>
    <div v-if="errors" class="errors">{{ errors }}</div>
    <router-link to="login">Login</router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions(["registerUser"]),
  },
};
</script>

<style scoped>

</style>
