<template>
    <div class="search_manager">
        <span class="search_manager__count">
            {{ count }} movies found
        </span>
        <span class="search_manager__sort-by">
            <span class="search_manager__sort-by-text">Sort by</span>
            <ButtonsBar v-bind:buttons="buttons" v-bind:onButtonClick="handleSortChange" v-bind:selectedId="currentSortId" />
        </span>
    </div>
</template>

<script>
  import ButtonsBar from "../ButtonsBar/ButtonsBar";

  export default {
    components: {ButtonsBar},
    name: "SearchManager",
    props: {
      count: Number
    },
    data: () => ({
      buttons: [{
        id: 'release_date',
        title: 'release date'
      }, {
        id: 'rating',
        title: 'rating'
      }],
      currentSortId: 'release_date'
    }),
    methods: {
      handleSortChange: function(newSortParameter) {
        this.currentSortId = newSortParameter;
      }
    }
  }
</script>

<style scoped>
    .search_manager {
        padding: 0 60px;
        background-color: #464547;
        color: white;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .search_manager__count {
        font-family: 'Trueno Bold', sans-serif;

    }

    .search_manager__sort-by-text {
        font-family: 'Trueno Light', sans-serif;
        text-transform: uppercase;
        margin-right: 15px;
    }
</style>