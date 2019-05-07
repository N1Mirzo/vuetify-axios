<template>
  <v-app>
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
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
