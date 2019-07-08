<template>
    <span class="movie-detail-info">
        <span class="amount"> {{ amount }} </span> <span class="measure">{{ measure }}</span>
    </span>
</template>

<script>
  export default {
    props: {
      amount: {
        type: Number,
        required: true
      },
      measure: {
        type: String,
        required: true
      }
    },
    name: "MovieDetailInfo"
  }
</script>

<style scoped>
    .movie-detail-info {
        font-family: 'Trueno Light';
    }
    .amount {
        font-size: 30px;
        color: #f75160;
    }

    .measure {
        font-family: 'Trueno Ultra Light';
        color: gray;
    }
</style>