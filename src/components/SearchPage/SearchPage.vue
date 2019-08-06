<template>
  <PageTemplate>
    <template v-slot:header>
      <SearchHeader
        :searchOptions="searchOptions"
        :searchById="searchById"
        :searchQuery="searchQuery"
        v-on:searchClick="handleSearchClick"
        v-on:searchChange="handleSearchChange"
      />
    </template>
    <template v-slot:main>
      <SearchManager
        :count="total"
        :sortById="sortById"
        :sortOptions="sortByOptions"
        v-on:sortChange="handleSortChange"
      />
      <Movies
        :movies="movies"
        v-on:movieSelection="handleMovieSelection"
      />
    </template>
  </PageTemplate>
</template>

<script>
import SearchHeader from "../SearchHeader/SearchHeader";
import SearchManager from "../SearchManager/SearchManager";
import Movies from "../Movies/Movies";
import PageTemplate from "../PageTemplate/PageTemplate";

export default {
  name: "SearchPage",
  components: { PageTemplate, SearchHeader, SearchManager, Movies },
  props: {
    movies: Array,
    searchOptions: Array,
    sortByOptions: Array,
    searchById: String,
    sortById: String,
    searchQuery: String,
    total: Number
  },
    methods: {
        handleMovieSelection(title) {
            this.$emit("movieSelection", title);
        },
        handleSortChange(sortId) {
            this.$emit("sortChange", sortId);
        },
        handleSearchChange(searchId) {
            this.$emit("searchChange", searchId);
        },
        handleSearchClick(searchQuery) {
            this.$emit("searchClick", searchQuery);
        }
    }
};
</script>

<style scoped></style>
