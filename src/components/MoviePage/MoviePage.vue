<template>
  <PageTemplate>
    <template v-slot:header>
      <MovieHeader :selectedMovie="selectedMovie" />
    </template>
    <template v-slot:search-link>
      <a class="movie-page__search-link" href="/">SEARCH</a>
    </template>
    <template v-slot:main>
      <p class="movie-page__same-genre">
        Films by {{ selectedMovie.genre }} genre
      </p>
      <Movies
        :movies="movies"
        :parentRef="parentRef"
        v-on:movieSelection="handleMovieSelection"
      />
    </template>
  </PageTemplate>
</template>

<script>
import MovieHeader from "../MovieHeader/MovieHeader";
import Movies from "../Movies/Movies";
import PageTemplate from "../PageTemplate/PageTemplate";

export default {
  name: "MoviePage",
  components: { PageTemplate, Movies, MovieHeader },
  props: {
    movies: Array,
    selectedMovie: Object,
    parentRef: Element
  },
  methods: {
    handleMovieSelection(id) {
        this.$emit('movieSelection', id)
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
