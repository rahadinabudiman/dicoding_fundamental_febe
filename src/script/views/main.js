import '../component/movielist/movie-list.js';
import '../component/movielist/trending-list.js';
import '../component/header/search-bar.js';
import DataSource from '../data/data-source.js';
import APIConfig from '../data/api-config.js';
import sidebar from '../data/sidebar.json';


const main = () => {

  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
  const TrendingListElement = document.querySelector('trending-list');
  const MovieCategoryListElement = document.querySelector('side-bar');

  // GET Trending List
  const getTrendingList = async () => {
    try {
      const response = await fetch(`${APIConfig.BASE_URL}/3/trending/movie/day?api_key=${APIConfig.API_KEY}&media_type=movie`);
      const responseJSON = await response.json();
      if (responseJSON.error) {
        showResponseMessage(responseJSON.message);
      } else {
        renderTrendingList(responseJSON.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  }

  // get Movie List
  const getMovieList = async (target) => {
    try {
      const response = await fetch(target);
      const responseJSON = await response.json();
      if (responseJSON.error) {
        showResponseMessage(responseJSON.message);
      } else {
        renderResult(responseJSON.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  }

  const onButtonSearchClicked = () => {
    searchMovie(searchElement.value);
    const titleMovie = document.querySelector("section.row .col-sm-12 .row .col-sm-12");
    if (searchElement.value == "") {
      titleMovie.innerHTML = "<h2>Search Result</h2>";
    } else {
      titleMovie.innerHTML = `<h2>${searchElement.value} : Search Result</h2>`;
    }
  };

  // get List Movie from Search Bar
  const searchMovie = async (keyword) => {
    try {
      if (!keyword) {
        keyword = "Harry Potter";
      }
      const result = await DataSource.searchMovie(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message)
    }
  }

  // get Movie from Category Select
  const categorySelect = () => {
    const category = MovieCategoryListElement.value;
    const titleMovie = document.querySelector("section.row .col-sm-12 .row .col-sm-12");
    const selectedCategory = sidebar.category.find(item => item.id === category);
    if (selectedCategory) {
      const categoryName = selectedCategory.name;
      const apiConfig = APIConfig[selectedCategory.id];
      if (apiConfig) {
        getMovieList(apiConfig);
        titleMovie.innerHTML = `<h2>${categoryName} Movies</h2>`;
      } else {
        showResponseMessage("Invalid API configuration");
      }
    }
  };



  const showResponseMessage = message => {
    console.log(message);
  }

  const renderTrendingList = results => {
    TrendingListElement.trendings = results;
  }

  const renderResult = results => {
    TrendingListElement.trendings = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  MovieCategoryListElement.clickEvent = categorySelect;
  searchElement.clickEvent = onButtonSearchClicked;

  document.addEventListener("DOMContentLoaded", async () => {
    await getTrendingList();
  });

};

export default main;
