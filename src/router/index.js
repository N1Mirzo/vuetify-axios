import Vue from "vue";
import Router from "vue-router";
import LatestMovie from "../components/LatestMovie";
import Movie from "../components/Movie";
import Search from "../components/SearchMovie";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "LatestMovie",
      component: LatestMovie
    },
    {
      path: "/movie/:id",
      name: "Movie",
      props: true,
      component: Movie
    },
    {
      path: "/search/:name",
      name: "Search",
      props: true,
      component: Search
    }
  ]
});
