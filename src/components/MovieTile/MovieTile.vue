<template>
    <div class="movie-cell">
        <img :src="getPic(imageSrc)" class="poster" :alt="title" />
        <p>
            <span class="title">{{ title }}</span>
            <span class="year">{{ year }}</span>
        </p>
        <p class="genre">
            {{ genre }}
        </p>
    </div>
</template>

<script>
  export default {
    props: {
      title: String,
      year: Number,
      genre: String,
      imageSrc: String
    },
    name: "MovieCell",
    methods: {
      getPic(title) {
        return require('../../assets/images/' + title);
      }
    }
  }
</script>

<style scoped>
    .movie-cell {
        width: 326px;
        font-family: 'Trueno Light', sans-serif;
    }
    .poster {
        max-height: 457px;
        width: 100%;
    }
    .title {
        vertical-align: sub;
        font-size: 20px;
    }
    .year {
        float: right;
        padding: 2px 10px;
        border: 1px solid;
        font-size: 14px;
        border-radius: 5px;
    }
    .genre {
        margin: 10px 0;
        font-size: 16px;
    }
</style>