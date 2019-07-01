<template>
    <PageTemplate>
        <template v-slot:header>
            <SearchHeader/>
        </template>
        <template v-slot:main>
            <SearchManager v-bind:count="movies.length"/>
            <Movies v-bind:movies="movies"/>
        </template>
    </PageTemplate>
</template>

<script>
  import SearchHeader from "../SearchHeader/SearchHeader";
  import SearchManager from "../SearchManager/SearchManager";
  import Movies from "../Movies/Movies";
  import movies from "../../constants/movies"
  import PageTemplate from "../PageTemplate/PageTemplate";

  export default {
    components: {PageTemplate, SearchHeader, SearchManager, Movies},
    name: "SearchPage",
    data: () => ({
      movies: movies
    })
  }
</script>

<style scoped>

</style>