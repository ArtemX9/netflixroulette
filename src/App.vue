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
      :searchById="searchById"
      :sortByOptions="sortByOptions"
      :sortById="sortById"
      :movies="movies"
      v-on:sortChange="handleSortChange"
      v-on:searchChange="handleSearchChange"
      v-on:movieSelection="handleMovieSelection"
      v-on:searchClick="handleSearchClick"
    ></SearchPage>
  </div>
</template>

<script>
import MoviePage from "./components/MoviePage/MoviePage";
import SearchPage from "./components/SearchPage/SearchPage";
import movies from "./constants/movies";
import { searchByOptions, sortByOptions } from "./constants/appConfig";

const getDefaultOption = option => option.isDefault;
const mapSortId = {
  release_date: 'year',
  rating: 'rating'
};

export default {
  name: "app",
  components: { MoviePage, SearchPage },
  data: () => ({
    movies,
    searchByOptions,
    sortByOptions,
    selectedMovie: null,
    searchById: searchByOptions.find(getDefaultOption).id,
    sortById: sortByOptions.find(getDefaultOption).id
  }),
  computed: {
      isAnyMovieSelected: function() {
          return this.selectedMovie !== null;
      }
  },
  methods: {
    handleSortChange(sortById) {
      this.sortById = sortById;
    },
    handleSearchChange(searchById) {
      this.searchById = searchById;
    },
    handleMovieSelection(movieTitle) {
      const movie = movies.find(movie => movie.title === movieTitle);
      this.selectedMovie = movie;
    },
    handleSearchClick(searchQuery) {
      const searchById = this.searchById;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      if (!normalizedQuery.length) {
        this.movies = movies;
      } else {
        this.movies = movies.filter(movie => {
          const a = movie[searchById].toLowerCase();
          return a.includes(searchQuery);
        });
        this.movies.sort((arg1, arg2) => arg1[mapSortId[this.sortById]] - arg2[mapSortId[this.sortById]]);
      }
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
