<template>
  <div id="app" ref="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@font-face {
  font-family: "Trueno Light";
  src: url("./assets/fonts/TruenoLt.otf") format("opentype");
}
@font-face {
  font-family: "Trueno Ultra Light";
  src: url("./assets/fonts/TruenoUltLt.otf") format("opentype");
}
@font-face {
  font-family: "Trueno Bold";
  font-weight: bold;
  src: url("./assets/fonts/TruenoBd.otf") format("opentype");
}

html,
body {
  margin: 0;
}

#app {
  font-family: "Trueno Light", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: scroll;
  color: #2c3e50;
}
</style>
