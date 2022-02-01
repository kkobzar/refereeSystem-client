<template>
<section id="all-users">
  <ul>
    <li v-for="user in users" :key="user.id">{{user.email}}</li>
  </ul>
</section>
</template>

<script>
import authService from "@/services/authService";

export default {
  name: "AllUsers",
  data(){
    return{
      users: []
    }
  },
  async created() {
    this.users = await authService.getAllUsers();
  }
};
</script>

<style scoped>

</style>
