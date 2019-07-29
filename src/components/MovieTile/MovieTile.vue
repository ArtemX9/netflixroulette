<template>
  <div class="movie-tile" v-on:click="handleMovieSelection">
    <img :src="imageSrc" class="poster" :alt="title" />
    <p class="movie-tile__header">
      <span class="title">{{ title }}</span>
      <span class="year">{{ year }}</span>
    </p>
    <p class="genre">
      <span>{{ genresStr }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    year: Number,
    genres: Array,
    imageSrc: String
  },
  name: "MovieCell",
  computed: {
    genresStr() {
      return this.genres.join(', ');
    }
  },
  methods: {
    handleMovieSelection() {
      this.$emit("movieSelection", this.id);
    }
  }
};
</script>

<style scoped>
.movie-tile {
  width: 326px;
}
.movie-tile__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.poster {
  max-height: 457px;
  width: 100%;
}
.title {
  vertical-align: sub;
  font-size: 17px;
}
.year {
  padding: 2px 10px;
  border: 1px solid;
  font-size: 14px;
  border-radius: 5px;
}
.genre {
  margin: 10px 0;
  font-size: 12px;
}
</style>
