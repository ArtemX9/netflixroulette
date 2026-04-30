import Vue from 'vue';
import VueRouter from 'vue-router';
import MoviePage from "./components/MoviePage/MoviePage";
import SearchPage from "./components/SearchPage/SearchPage";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/movie/:id', component: MoviePage },
    { path: '/', component: SearchPage }
  ]
});
