<template>
  <v-app>
    <h1 id="hello">{{ message }} vuejs</h1>
    <router-link to="/hello">aa</router-link>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello"
    };
  }
};
</script>

<style scoped>
#hello {
  color: red;
  font-size: 50pt;
  margin-left: 40%;
}
</style>
