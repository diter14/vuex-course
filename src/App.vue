<template>
  <MainHeader />
  <main class="container">
    <router-view />
  </main>
</template>
<script>
import MainHeader from "@/layouts/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>
<style>
#app {
  font-family: "DM Sans", Arial, sans-serif;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
