<template>
  <div class="movie-page">
    <img
      :src="selectedMovie.poster_path"
      class="movie-page__poster"
      :alt="selectedMovie.title"
    />
    <div class="movie-page__details">
      <p class="movie-page__title-and-rating">
        <span class="movie-page__title">{{ selectedMovie.title }}</span>
        <MovieRating :rating="selectedMovie.vote_average" />
      </p>
      <p class="movie-page__genre">{{ selectedMovie.genre }}</p>
      <p class="movie-page__time-and-year">
        <MovieDetailInfo
          :amount="selectedMovie.release_date | yearFromDate"
          measure="year"
        /><MovieDetailInfo :amount="selectedMovie.runtime" measure="min" />
      </p>
      <p class="movie-page__description">{{ selectedMovie.overview }}</p>
    </div>
  </div>
</template>

<script>
import MovieRating from "../MovieRating/MovieRating";
import MovieDetailInfo from "../MovieDetailInfo/MovieDetailInfo";
import {yearFromDate} from "../../filters/yearFromDate";

export default {
  components: { MovieRating, MovieDetailInfo },
  mixins: [yearFromDate],
  name: "MovieHeader",
  props: {
    selectedMovie: Object
  },
};
</script>

<style scoped>
.movie-page {
  background-color: black;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.movie-page__details {
  margin-left: 50px;
}

.movie-page__title-and-rating {
  display: inline-flex;
  margin: 0;
  align-items: center;
}

.movie-page__poster {
  max-height: 457px;
}
.movie-page__title {
  font-size: 30px;
  margin-right: 20px;
}
.movie-page__description {
  max-width: 630px;
}
</style>
