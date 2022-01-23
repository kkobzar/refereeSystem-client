<template>
  <div id="registration">
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" id="email" name="email" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data(){
    return{
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      surname: ""
    }
  },
  methods:{
    registration(){

    }
  }
};
</script>

<style scoped>

</style>
