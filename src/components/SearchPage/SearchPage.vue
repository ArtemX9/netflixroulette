<template>
  <PageTemplate>
    <template v-slot:header>
      <SearchHeader
        :searchOptions="searchByOptions"
        :searchById="searchByType"
        :searchQuery="searchQuery"
        v-on:searchClick="handleSearchClick"
        v-on:searchChange="handleSearchChange"
      />
    </template>
    <template v-slot:main>
      <SearchManager
        :count="total"
        :sortById="sortByType"
        :sortOptions="sortByOptions"
        v-on:sortChange="handleSortChange"
      />
      <Movies
        :parentRef="parentRef"
        :movies="movies"
        v-on:loadNewPage="handleLoadNewPage"
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
import { mapActions, mapMutations, mapState } from "vuex";
import { searchByOptions, sortByOptions } from "../../constants/appConfig";
import {types} from "../../store";

export default {
  name: "SearchPage",
  components: { PageTemplate, SearchHeader, SearchManager, Movies },
  data: () => ({
    searchByOptions,
    sortByOptions
  }),
  created() {
    this[types.RESET_MOVIES]();

    this.fetchMovies();
  },
  computed: {
    ...mapState({
      isAnyMovieSelected(state) {
        return !!state.selectedMovie;
      },
      movies: state => state.movies,
      selectedMovie: state => state.selectedMovie,
      searchQuery: state => state.searchQuery,
      searchByType: state => state.searchByType,
      sortByType: state => state.sortByType,
      total: state => state.total,
      isLoading: state => state.isLoading
    }),
    parentRef: function() {
      return this.$parent.$refs.app;
    }
  },
  methods: {
    ...mapMutations(["changeSortType", "changeSearchType", types.INCREASE_PAGE_NUMBER, types.RESET_MOVIES]),
    ...mapActions(["fetchMovies", "loadNewPage"]),
    handleSortChange(sortType) {
      this.changeSortType({ sortType });
    },
    handleSearchChange(searchType) {
      this.changeSearchType({ searchType });
    },
    handleSearchClick() {
      this.fetchMovies();
    },
    handleMovieSelection(id) {
      this.$router.push({ path: `/movie/${id}` });
    },
    handleLoadNewPage() {
      this[types.INCREASE_PAGE_NUMBER]();
      this.fetchMovies();
    }
  }
};
</script>

<style scoped></style>
