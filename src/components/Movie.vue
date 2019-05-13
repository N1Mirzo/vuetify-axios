<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="10" color="green"/>
    </div>
  </v-container>

  <v-container v-else>
    <v-layout justify-center align-center>
      <v-flex xs4>
        <v-card>
          <v-img :src="singleMovie.Poster" aspect-ratio="0.6"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
              <p>{{singleMovie.Plot}}</p>
              <h3>Actors:</h3>
              {{singleMovie.Actors}}
              <h4>Awards:</h4>
              {{singleMovie.Awards}}
              <h4>Genre:</h4>
              {{singleMovie.Genre}}
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="green" @click="back">back</v-btn>
          <v-btn round color="green" :href="singleMovie.Website" target="_blank">Visit site</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center fill-height>
      <v-flex xs12>
        <div class="text-xs-center">
          <v-dialog width="500" v-model="dialog" persistent no-click-animation>
            <v-btn slot="activator" color="green" dark>View Ratings</v-btn>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Ratings</v-card-title>
              <v-card-text>
                <table style="width:100%" border="1">
                  <tr>
                    <th>Source</th>
                    <th>Ratings</th>
                  </tr>
                  <tr v-for="(rating, index) in this.singleMovie.Ratings" :key="index">
                    <td align="center">{{rating.Source}}</td>
                    <td align="center">
                      <v-rating readonly :half-increments="true" :value="rating.Value"></v-rating>
                    </td>
                  </tr>
                </table>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "../services/MovieApi";
export default {
  name: "Movie",
  props: ["id"],
  data() {
    return {
      singleMovie: "",
      dialog: false,
      loading: true,
      ratings: ""
    };
  },
  created() {},
  computed: {},
  methods: {
    back() {
      this.$router.push("/");
    }
  },
  mounted() {
    movieApi
      .fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response;
        this.ratings = this.singleMovie.Ratings;
        this.ratings.forEach(element => {
          element.Value = parseFloat(element.Value.split(/\/|%/)[0]);
          element.Value =
            element.Value <= 10 ? element.Value / 2 : element.Value / 20;
        });
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped >
.v-progress-circular {
  margin: 100rem;
}
</style>
