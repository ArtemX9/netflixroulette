<template>
    <PageTemplate>
        <template v-slot:header>
            <MovieHeader :selectedMovie="selectedMovie" />
        </template>
        <template v-slot:search-link>
            <a class="movie-page__search-link" href="/">SEARCH</a>
        </template>
        <template v-slot:main>
            <p class="movie-page__same-genre">Films by {{selectedMovie.genre}} genre</p>
            <Movies :movies="movies" />
        </template>
    </PageTemplate>
</template>

<script>
  import MovieHeader from "../MovieHeader/MovieHeader";
  import Movies from "../Movies/Movies";
  import movies from "../../constants/movies";
  import PageTemplate from "../PageTemplate/PageTemplate";

  export default {
    components: {PageTemplate, Movies, MovieHeader},
    name: "MoviePage",
    data: () => ({
      movies,
      selectedMovie: movies[0]
    })
  }
</script>

<style scoped>
    .movie-page__same-genre {
        font-family: "Trueno Ultra Light";
        background-color: #555555;
        color: white;
        margin: 0;
        padding: 20px;
    }

    .movie-page__search-link {
        font-family: 'Trueno Bold', Helvetica, Arial, sans-serif;
        text-decoration: none;
        color: #f75160;
    }
</style>