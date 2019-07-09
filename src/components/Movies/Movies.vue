<template>
  <div class="movies" v-if="movies.length > 0">
    <MovieTile
      v-for="movie in movies"
      :key="movie.title"
      :title="movie.title"
      :imageSrc="movie.imageSrc"
      :genre="movie.genre"
      :year="movie.year"
      v-on:movieSelection="handleMovieSelection"
    />
  </div>
  <div v-else class="no-movies"><span>No movies found</span></div>
</template>

<script>
import MovieTile from "../MovieTile/MovieTile";

export default {
  components: { MovieTile },
  name: "Movies",
  props: {
    movies: Array
  },
  methods: {
    handleMovieSelection(title) {
      this.$emit("movieSelection", title);
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
