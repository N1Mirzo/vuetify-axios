import axios from "axios";

export default {
  fetchMovieColletion(name) {
    return axios.get("&s=" + name).then(response => {
      return response.data;
    });
  },
  fetchSingleMovie(id) {
    return axios.get("&i=" + id).then(response => {
      return response.data;
    });
  }
};
