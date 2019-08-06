<template>
  <div class="movies" v-if="movies.length > 0">
    <MovieTile
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :title="movie.title"
      :imageSrc="movie.poster_path"
      :genres="movie.genres"
      :year="movie.release_date | yearFromDate"
      :parentRef="parentRef"
      v-on:movieSelection="handleMovieSelection"
    />
  </div>
  <div v-else class="no-movies"><span>No movies found</span></div>
</template>

<script>
import MovieTile from "../MovieTile/MovieTile";
import { yearFromDate } from "../../filters/yearFromDate";

export default {
  name: "Movies",
  components: { MovieTile },
  mixins: [yearFromDate],
  props: {
    movies: Array,
    parentRef: HTMLElement
  },
  methods: {
    handleMovieSelection(id) {
      this.$emit("movieSelection", id);
    }
  }
};
</script>

<style scoped>
.movies {
  grid-template-columns: repeat(3, 326px);
  grid-gap: 30px;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #222222;
  grid-auto-rows: auto;
  color: white;
  padding: 30px;
  flex-grow: 1;
}
.no-movies {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
</style>
