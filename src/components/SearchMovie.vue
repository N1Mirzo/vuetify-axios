<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="10" color="green"/>
    </div>
  </v-container>
  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in movieResponse" :key="index" mb-4>
        <v-card>
          <v-img :src="item.Poster" aspect-ration="1"></v-img>
        </v-card>

        <v-card-title primary-title>
          <div>
            <h2>{{item.Title}}</h2>
            <div>Year: {{item.Year}}</div>
            <div>Type: {{item.Type}}</div>
            <div>IMDB-id: {{item.imdbID}}</div>
          </div>
        </v-card-title>

        <v-car-actions>
          <v-btn color="green" @click="singleMovie(item.imdbID)">View</v-btn>
          <v-btn round color="green">Visit site</v-btn>
        </v-car-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SearchMovie",
  data() {
    return {};
  }
};
</script>

<style>
</style>
