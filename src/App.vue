<template>
  <v-app id="inspire">
    <my-header></my-header>
    <my-content></my-content>
  </v-app>
</template>

<script>
import Header from "./Header";
import Content from "./Content";
export default {
  name: "App",
  components: {
    "my-header": Header,
    "my-content": Content
  }
};
</script>

<style scoped>
</style>
