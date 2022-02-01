<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span>logged in: {{ isLogged }}</span> <br>{{userInfo}}
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import Login from "@/components/Login";
export default {
  components: {},
  name: "app",
  computed: {
    ...mapGetters(["isLogged", "userInfo"]),
  },
  methods: {
    ...mapActions(["setUser"]),
  },
  created() {
    const setUser = { ...mapActions(["setUser"]) }
    setUser.setUser()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
