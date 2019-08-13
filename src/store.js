import Vue from "vue";
import Vuex from "vuex";

import { searchByOptions, sortByOptions } from "./constants/appConfig";
import { getMovie, getMovies } from "./api/movies";

const types = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_ERROR: "FETCH_MOVIES_ERROR",
  GET_MOVIE_START: "GET_MOVIE_START",
  GET_MOVIE_SUCCESS: "GET_MOVIE_SUCCESS",
  GET_MOVIE_ERROR: "GET_MOVIE_ERROR"
};

Vue.use(Vuex);

const mapSortId = {
  release_date: "release_date",
  rating: "vote_average"
};
const getDefaultOption = option => option.isDefault;

export default new Vuex.Store({
  state: {
    movies: [],
    selectedMovie: null,
    isLoading: true,
    searchQuery: "",
    searchByType: searchByOptions.find(getDefaultOption).id,
    sortByType: sortByOptions.find(getDefaultOption).id,
    selectedMovieId: null,
    total: 0
  },
  mutations: {
    changeSortType(state, { sortType }) {
      state.sortByType = sortType;
    },
    changeSearchType(state, { searchType }) {
      state.searchByType = searchType;
    },
    updateSearchQuery(state, { searchQuery }) {
      state.searchQuery = searchQuery;
    },
    selectMovie(state, { movieId }) {
      state.selectedMovieId = movieId;
    },
    [types.FETCH_MOVIES_START](state) {
      state.isLoading = true;
    },
    [types.FETCH_MOVIES_SUCCESS](state, { movies, total, offset }) {
      state.movies = movies;
      state.total = total;
      state.offset = offset;
      state.isLoading = false;
    },
    [types.FETCH_MOVIES_ERROR](state, { error }) {
      state.isLoading = false;
      state.error = error;
    },
    [types.GET_MOVIE_START](state, { movieId }) {
      state.isLoading = true;
      state.selectedMovieId = movieId;
    },
    [types.GET_MOVIE_SUCCESS](state, { movie }) {
      state.selectedMovie = movie;
      state.isLoading = false;
    },
    [types.GET_MOVIE_ERROR](state, { error }) {
      state.isLoading = false;
      state.error = error;
    }
  },
  actions: {
    async fetchMovies({ commit, state }) {
      commit(types.FETCH_MOVIES_START);
      try {
        const {
          data: { data: movies, total, offset }
        } = await getMovies(
          state.searchQuery,
          state.searchByType,
          mapSortId[state.sortByType]
        );
        commit(types.FETCH_MOVIES_SUCCESS, { movies, total, offset });
      } catch (error) {
        commit(types.FETCH_MOVIES_ERROR, { error });
      }
    },
    async selectMovie({ commit, state }, { movieId }) {
      commit(types.GET_MOVIE_START, { movieId });
      try {
        const { data: movie } = await getMovie(
          movieId,
          state.searchByType,
          state.sortByType
        );
        commit(types.GET_MOVIE_SUCCESS, { movie });
      } catch (error) {
        commit(types.GET_MOVIE_ERROR, { error });
      }
    }
  }
});
