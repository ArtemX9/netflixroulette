<template>
  <span class="movie-rating" :class="{ good, low }">
    {{ normalizedRating }}
  </span>
</template>

<script>
export default {
  name: "MovieRating",
  props: {
    rating: {
      type: Number,
      required: true
    }
  },
  computed: {
    good: function() {
      return this.rating >= 4;
    },
    low: function() {
      return this.rating < 4;
    },
    normalizedRating: function() {
        const rating = String(this.rating);
        return rating.includes('.') ? rating : rating + '.0';
    }
  }
};
</script>

<style scoped>
.movie-rating {
  border: 1px solid;
  padding: 17px 15px;
  border-radius: 40px;
  font-size: 25px;
}

.good {
  color: #80b859;
  border-color: #80b859;
}

.low {
  color: #f65261;
  border-color: #f65261;
}
</style>
