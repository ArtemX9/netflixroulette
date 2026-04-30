import VueResource from "vue-resource";
import Vue from "vue";
Vue.use(VueResource);

const BASE_URL = "http://react-cdp-api.herokuapp.com";

export function getMovies(search, searchBy, sortBy, offset) {
  return Vue.http.get(`${BASE_URL}/movies`, {
    params: {
      search,
      searchBy,
      sortBy,
      sortOrder: "desc",
      limit: 30,
      offset
    }
  });
}

export function getMovie(id) {
  return Vue.http.get(`${BASE_URL}/movies/${id}`);
}
