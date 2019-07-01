<template>
    <div class="search-header">
        <div class="search-header__search">
            <p class="search-header__search-prompt">Find your movie</p>
            <Search />
            <div class="search-header__search-by">
                <span class="search-header__search-by-text">Search by</span><ButtonsBar v-bind:buttons="buttons" v-bind:onButtonClick="handleFilterChange" v-bind:selectedId="selectedFilter" />
            </div>
        </div>
    </div>
</template>

<script>
  import ButtonsBar from "../ButtonsBar/ButtonsBar";
  import Search from "../Search/Search";

  export default {
    components: {Search, ButtonsBar},
    name: "SearchHeader",
    data: () => ({
      buttons: [{
        id: 'title',
        title: 'title'
      }, {
        id: 'genre',
        title: 'genre'
      }],
      selectedFilter: 'title'
    }),
    methods: {
      handleFilterChange: function(newFilter) {
        this.selectedFilter = newFilter;
      }
    }
  }
</script>

<style scoped>
    .search-header {
         font-family: 'Trueno Light', sans-serif;
         text-transform: uppercase;
         background-color: black;
         color: white;
    }

    .search-header__search {
        padding: 0 60px 30px 60px;
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