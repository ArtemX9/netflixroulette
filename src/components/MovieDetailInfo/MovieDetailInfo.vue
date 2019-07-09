<template>
  <span class="movie-detail-info">
    <span class="amount"> {{ amount }} </span>
    <span class="measure">{{ measure }}</span>
  </span>
</template>

<script>
export default {
  name: "MovieDetailInfo",
  props: {
    amount: {
      type: Number,
      required: true
    },
    measure: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.amount {
  font-size: 30px;
  color: #f75160;
}

.measure {
  font-family: "Trueno Ultra Light";
  color: gray;
}
</style>
