<template>
  <main>
    <my-aside v-model="drawer"></my-aside>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-toolbar-title style="width: 1100px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-xs-only"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-text-field label="Movie Name" flat class="hidden-sm-and-down"></v-text-field>
      <v-btn>Search</v-btn>
    </v-toolbar>
  </main>
</template>

<script>
import Aside from "./Aside";
export default {
  name: "Header",
  components: {
    "my-aside": Aside
  },
  data() {
    return {
      drawer: true
    };
  },
  computed: {}
};
</script>

<style>
</style>
