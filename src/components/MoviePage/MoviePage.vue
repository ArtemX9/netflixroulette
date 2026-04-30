<template>
  <PageTemplate>
    <template v-slot:header>
      <MovieHeader :selectedMovie="selectedMovie" />
    </template>
    <template v-slot:search-link>
      <router-link to="/" class="movie-page__search-link">SEARCH</router-link>
    </template>
    <template v-slot:main>
      <p class="movie-page__same-genre">
        Films by {{ mainMovieGenre }} genre
      </p>
      <Movies
        :movies="movies"
        :parentRef="parentRef"
        v-on:loadNewPage="handleLoadNewPage"
        v-on:movieSelection="handleMovieSelection"
      />
    </template>
  </PageTemplate>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import MovieHeader from "../MovieHeader/MovieHeader";
import Movies from "../Movies/Movies";
import PageTemplate from "../PageTemplate/PageTemplate";
import { types } from "../../store";

export default {
  name: "MoviePage",
  components: { PageTemplate, Movies, MovieHeader },
  computed: {
    ...mapState({
      isAnyMovieSelected(state) {
        return !!state.selectedMovie;
      },
      movies: state => state.movies,
      selectedMovie: state => state.selectedMovie,
      isLoading: state => state.isLoading,
      mainMovieGenre: state => state.selectedMovie && state.selectedMovie.genres[0]
    }),
    movieId() {
      return this.$route.params.id;
    },
    parentRef() {
      return this.$parent.$refs.app;
    }
  },
  created() {
    this.selectMovie({ movieId: this.movieId });
  },
  methods: {
    ...mapActions(["selectMovie", "fetchMovies", "loadNewPage"]),
    ...mapMutations([types.INCREASE_PAGE_NUMBER]),
    handleMovieSelection(id) {
      this.$router.push({ path: `/movie/${id}` });
    },
    handleLoadNewPage() {
      this[types.INCREASE_PAGE_NUMBER]();
      this.fetchMovies();
    }
  },
  watch: {
    $route(to) {
      this.selectMovie({ movieId: to.params.id });
    }
  }
};
</script>

<style scoped>
.movie-page__same-genre {
  font-family: "Trueno Ultra Light", Helvetica, Arial, sans-serif;
  background-color: #555555;
  color: white;
  margin: 0;
  padding: 20px;
}

.movie-page__search-link {
  font-family: "Trueno Bold", Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: #f75160;
}
</style>
