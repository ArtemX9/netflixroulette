<template>
    <div>
        <div class="page-header">
            <div class="page-header__site-title">
                <SiteTitle />
                <span class="page-header__search-link"><slot name="search-link"></slot></span>
            </div>
            <slot name="header"></slot>
        </div>
        <main>
            <slot name="main"></slot>
        </main>
        <footer><SiteTitle /></footer>
    </div>
</template>

<script>
  import SiteTitle from "../SiteTitle/SiteTitle";

  export default {
    components: {SiteTitle},
    name: "PageTemplate"
  }
</script>

<style scoped>
    .page-header {
        font-family: 'Trueno Light', sans-serif;

        background-color: black;
        color: white;
    }
    .page-header__site-title {
        padding: 20px 50px;
        text-transform: initial;
    }
    
    .page-header__search-link {
        float: right;
    }

    footer {
        height: 60px;
        background-color: #2b2927;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>