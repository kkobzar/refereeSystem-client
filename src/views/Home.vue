<template>
  <div class="home">
    <AllUsers/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllUsers from "@/components/AllUsers";

export default {
  name: "Home",
  components: {
    AllUsers,
  },
};
</script>
