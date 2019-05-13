<template>
  <main>
    <my-aside v-model="drawer"></my-aside>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-toolbar-title style="width: 50px">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-xs-only"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">Movie Man</router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-flex xs12 sm6 md4 lg3>
        <v-text-field
          label="Movie Name"
          flat
          class="hidden-sm-and-down"
          v-model="searchQuery"
          clearable
        />
      </v-flex>
      <v-btn :disabled="!dataAvailable" @click="searchMovie">Search</v-btn>
    </v-toolbar>
  </main>
</template>

<script>
import axios from "axios";
import Aside from "./Aside";
export default {
  name: "Header",
  components: {
    "my-aside": Aside
  },
  data() {
    return {
      drawer: false,
      searchQuery: ""
    };
  },
  computed: {
    dataAvailable() {
      return this.searchQuery !== null && this.searchQuery !== "";
    }
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchQuery);
      this.searchString = "";
    }
  }
};
</script>

<style>
</style>
