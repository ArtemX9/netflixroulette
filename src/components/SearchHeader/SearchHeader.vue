<template>
  <div class="search-header">
    <div class="search-header__search">
      <p class="search-header__search-prompt">Find your movie</p>
      <Search v-on:searchClick="handleSearchClick" :initialSearchQuery="searchQuery" />
      <div class="search-header__search-by">
        <span class="search-header__search-by-text">Search by</span>
        <ButtonsBar
          :buttons="searchOptions"
          :selectedId="searchById"
          v-on:buttonClick="handleSearchChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonsBar from "../ButtonsBar/ButtonsBar";
import Search from "../Search/Search";

export default {
  name: "SearchHeader",
  components: { Search, ButtonsBar },
  props: { searchOptions: Array, searchById: String, searchQuery: String },
  methods: {
    handleSearchChange(searchId) {
      this.$emit("searchChange", searchId);
    },
    handleSearchClick(searchQuery) {
      this.$emit("searchClick", searchQuery);
    }
  }
};
</script>

<style scoped>
.search-header {
  text-transform: uppercase;
  background-color: black;
  color: white;
}

.search-header__search {
  padding: 0 80px 30px 80px;
}

.search-header__search-prompt {
  font-size: 40px;
}

.search-header__search-by-text {
  margin-right: 30px;
}

.search-header__search-by {
  margin-top: 20px;
}
</style>
