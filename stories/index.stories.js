/* eslint-disable react/react-in-jsx-scope */

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/vue";

import ButtonsBar from "../src/components/ButtonsBar/ButtonsBar";
import MovieRating from "../src/components/MovieRating/MovieRating";
import MovieDetailInfo from "../src/components/MovieDetailInfo/MovieDetailInfo";
import MovieTile from "../src/components/MovieTile/MovieTile";
import SiteTitle from "../src/components/SiteTitle/SiteTitle";
import Search from "../src/components/Search/Search";
import SearchHeader from "../src/components/SearchHeader/SearchHeader";
import SearchManager from "../src/components/SearchManager/SearchManager";
import Movies from "../src/components/Movies/Movies";
import SearchPage from "../src/components/SearchPage/SearchPage";
import MovieHeader from "../src/components/MovieHeader/MovieHeader";
import MoviePage from "../src/components/MoviePage/MoviePage";
import App from "../src/App";
import movies from "../src/constants/movies";

storiesOf("App", module).add("to Storybook", () => ({
  components: { App },
  template: '<App  />'
}));

const arr = [
  {
    title: "first",
    id: "first"
  },
  {
    title: "second",
    id: "second"
  }
];

storiesOf("ButtonsBar", module).add("with text", () => ({
  components: { ButtonsBar },
  template: `<ButtonsBar v-bind:buttons="arr" v-bind:onButtonClick="action" v-bind:selectedId="selectedId"></ButtonsBar>`,
  methods: {
    action: action
  },
  data: () => ({ arr, selectedId: arr[0].id })
}));

storiesOf("MovieRating", module).add("with text", () => ({
  components: { MovieRating },
  template: `<MovieRating v-bind:rating="rating"></MovieRating>`,
  data: () => ({ rating: 4.3 })
}));

storiesOf("MovieDetailInfo", module).add("with text", () => ({
  components: { MovieDetailInfo },
  template: `<MovieDetailInfo v-bind:amount="amount" v-bind:measure="measure"></MovieDetailInfo>`,
  data: () => ({ amount: 1994, measure: 'year' })
}));

storiesOf("MovieTile", module).add("with text", () => ({
  components: { MovieTile },
  template: `<MovieTile v-bind:year="year" v-bind:title="title" v-bind:genre="genre" v-bind:imageSrc="imageSrc"></MovieTile>`,
  data: () => ({
    year: movies[0].year,
    title: movies[0].title,
    genre: movies[0].genre,
    imageSrc: movies[0].imageSrc
  })
}));

storiesOf("SiteTitle", module).add("with text", () => ({
  components: { SiteTitle },
  template: `<SiteTitle></SiteTitle>`
}));

storiesOf("Search", module).add("with text", () => ({
  components: { Search },
  template: `<Search></Search>`
}));

storiesOf("SearchHeader", module).add("with text", () => ({
  components: { SearchHeader },
  template: `<SearchHeader></SearchHeader>`
}));

storiesOf("SearchManager", module).add("with text", () => ({
  components: { SearchManager },
  template: `<SearchManager v-bind:count="count"></SearchManager>`,
  data: () => ({
    count: 7
  })
}));

storiesOf("Movies", module).add("with text", () => ({
  components: { Movies },
  template: `<Movies v-bind:movies="movies"></Movies>`,
  data: () => ({
    movies
  })
}));

storiesOf("MovieHeader", module).add("with text", () => ({
  components: { MovieHeader },
  template: `<MovieHeader v-bind:movies="movies" v-bind:selectedMovie="selectedMovie"></MovieHeader>`,
  data: () => ({
    selectedMovie: movies[0]
  })
}));

storiesOf("MoviePage", module).add("with text", () => ({
  components: { MoviePage },
  template: `<MoviePage v-bind:movies="movies" v-bind:selectedMovie="selectedMovie"></MoviePage>`,
  data: () => ({
    movies,
    selectedMovie: movies[0]
  })
}));


storiesOf("SearchPage", module).add("with text", () => ({
  components: { SearchPage },
  template: `<SearchPage></SearchPage>`
}));
