<template>
    <div class="movies">
        <MovieTile
            v-for="movie in movies"
            v-bind:key="movie.title"
            v-bind:title="movie.title"
            v-bind:imageSrc="movie.imageSrc"
            v-bind:genre="movie.genre"
            v-bind:year="movie.year"
        />
    </div>
</template>

<script>
  import MovieTile from "../MovieTile/MovieTile";

  export default {
    components: {MovieTile},
    name: "Movies",
    props: {
      movies: Array
    }
  }
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
    }
</style>