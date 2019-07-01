<template>
    <span class="movie-rating"
          v-bind:class="{ good: rating >= 4,
           low: rating < 4 }"
    >
        {{ rating }}
    </span>
</template>

<script>
  export default {
    props: {
      rating: {
        type: Number,
        required: true
      }
    },
    name: "MovieRating"
  }
</script>

<style scoped>
    .movie-rating {
        border: 1px solid white;
        padding: 15px;
        border-radius: 40px;
        font-size: 25px;
        font-family: 'Trueno Light';
    }

    .good {
        color: #80b859;
    }

    .low {
        color: #f65261;
    }
</style>