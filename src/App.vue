<template>
  <div id="app">
    4.3
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  @font-face {
    font-family: 'Trueno Light';
    src: url("./assets/fonts/TruenoLt.otf") format("opentype");
  }
  @font-face {
    font-family: 'Trueno Ultra Light';
    src: url("./assets/fonts/TruenoUltLt.otf") format("opentype");
  }
  @font-face {
    font-family: 'Trueno Bold';
    font-weight: bold;
    src: url("./assets/fonts/TruenoBd.otf") format("opentype");
  }

#app {
  font-family: 'Trueno Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
