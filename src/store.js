import Vue from "vue";
import Vuex from "vuex";

import movies from "./constants/movies";
import { searchByOptions, sortByOptions } from "./constants/appConfig";

Vue.use(Vuex);

const mapSortId = {
  release_date: "release_date",
  rating: "vote_count"
};
const getDefaultOption = option => option.isDefault;

export default new Vuex.Store({
  state: {
    movies: [...movies],
    searchByType: searchByOptions.find(getDefaultOption).id,
    sortByType: sortByOptions.find(getDefaultOption).id,
    selectedMovieId: null
  },
  getters: {
    selectedMovie: state => state.movies.find(movie => movie.id === state.selectedMovieId),
  },
  mutations: {
    changeSortType(state, { sortType }) {
      state.sortByType = sortType;
    },
    changeSearchType(state, { searchType }) {
      state.searchByType = searchType;
    },
    searchMovies(state, { searchQuery }) {
      const searchByType = state.searchByType;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      if (!normalizedQuery.length) {
        state.movies = movies;
      } else {
        state.movies = state.movies.filter(movie => {
          const a = movie[searchByType].toLowerCase();
          return a.includes(searchQuery);
        });
        state.movies.sort(
          (arg1, arg2) =>
            arg1[mapSortId[state.sortByType]] -
            arg2[mapSortId[state.sortByType]]
        );
      }
    },
    selectMovie(state, { movieId }) {
      state.selectedMovieId = movieId;
    }
  }
});
