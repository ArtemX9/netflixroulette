<template>
  <div
    class="movie-tile"
    v-on:click="handleMovieSelection"
    v-IntersectionDirective="parentRef"
    @intersects="intersects"
  >
    <img
      :src="shouldStartLoadingPoster && imageSrc"
      class="poster"
      :alt="title"
    />
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
import { IntersectionDirective } from "../../directives/intersection";

export default {
  props: {
    id: Number,
    title: String,
    year: Number,
    genres: Array,
    imageSrc: String,
    parentRef: Element
  },
  name: "MovieCell",
  directives: { IntersectionDirective },
  data: () => ({
    shouldStartLoadingPoster: false
  }),
  computed: {
    genresStr() {
      return this.genres.join(", ");
    }
  },
  methods: {
    handleMovieSelection() {
      this.$emit("movieSelection", this.id);
    },
    intersects() {
      this.shouldStartLoadingPoster = true;
    }
  }
};
</script>

<style scoped>
.movie-tile {
  width: 326px;
  /*
  This is required in order to render tile when poster is not loaded, so that they take approximately expected size as
  they should with poster. Otherwise Intersection observer will count them as appeared on the screen and will set shouldStartLoadingPoster to true.
   */
  min-width: 320px;
  min-height: 520px;
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
