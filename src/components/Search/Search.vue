<template>
  <div class="search">
    <input v-model="searchQuery" class="search__input" />
    <button class="search__button" v-on:click="handleSearchClick">
      SEARCH
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    initialSearchQuery: String
  },
  computed: {
    searchQuery: {
      get() {
        return this.initialSearchQuery;
      },
      set(searchQuery) {
        this.$store.commit("updateSearchQuery", { searchQuery });
      }
    }
  },
  methods: {
    handleSearchClick() {
      this.$emit("searchClick");
    }
  }
};
</script>

<style scoped>
.search {
  display: flex;
}
.search__input {
  outline: none;
  height: 50px;
  border-radius: 5px;
  vertical-align: top;
  padding: 0 15px;
  font-size: 18px;
  color: white;
  background-color: rgba(255, 254, 254, 0.2);
  border: none;
  margin-right: 10px;
  flex-grow: 1;
}
.search__button {
  background-color: #f75160;
  color: white;
  height: 50px;
  width: 200px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0;
  border: none;
  padding: 0;
  outline: none;
}
</style>
