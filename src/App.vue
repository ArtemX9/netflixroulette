<template>
  <div id="app">
    <MoviePage
      v-if="isAnyMovieSelected"
      :selectedMovie="selectedMovie"
      :movies="movies"
      v-on:movieSelection="handleMovieSelection"
    ></MoviePage>
    <SearchPage
      v-else
      :searchOptions="searchByOptions"
      :searchById="searchByType"
      :sortByOptions="sortByOptions"
      :sortById="sortByType"
      :movies="movies"
      v-on:sortChange="handleSortChange"
      v-on:searchChange="handleSearchChange"
      v-on:movieSelection="handleMovieSelection"
      v-on:searchClick="handleSearchClick"
    ></SearchPage>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import MoviePage from "./components/MoviePage/MoviePage";
import SearchPage from "./components/SearchPage/SearchPage";
import { searchByOptions, sortByOptions } from "./constants/appConfig";

export default {
  name: "app",
  components: { MoviePage, SearchPage },
  data: () => ({
    searchByOptions,
    sortByOptions
  }),
  computed: {
    ...mapGetters(["selectedMovie"]),
    ...mapState({
      isAnyMovieSelected() {
        return !!this.selectedMovie;
      },
      movies: state => state.movies,
      searchByType: state => state.searchByType,
      sortByType: state => state.sortByType
    })
  },
  methods: {
    ...mapMutations([
      "changeSortType",
      "changeSearchType",
      "searchMovies",
      "selectMovie"
    ]),
    handleSortChange(sortType) {
      this.changeSortType({ sortType });
    },
    handleSearchChange(searchType) {
      this.changeSearchType({ searchType });
    },
    handleMovieSelection(movieId) {
      this.selectMovie({ movieId });
    },
    handleSearchClick(searchQuery) {
      this.searchMovies({ searchQuery });
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Trueno Light";
  src: url("./assets/fonts/TruenoLt.otf") format("opentype");
}
@font-face {
  font-family: "Trueno Ultra Light";
  src: url("./assets/fonts/TruenoUltLt.otf") format("opentype");
}
@font-face {
  font-family: "Trueno Bold";
  font-weight: bold;
  src: url("./assets/fonts/TruenoBd.otf") format("opentype");
}

html,
body {
  margin: 0;
}

#app {
  font-family: "Trueno Light", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  color: #2c3e50;
}
</style>
