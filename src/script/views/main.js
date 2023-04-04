import '../component/movie-list.js';
import '../component/trending-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
import APIConfig from '../data/api-config.js';

const main = () => {

  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('movie-list');
  const TrendingListElement = document.querySelector('trending-list');
  const MovieCategoryListElement = document.querySelector('movie-category');

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
    searchClub(searchElement.value);
  };

  // get List Movie from Search Bar
  const searchClub = async (keyword) => {
    try {
      if (!keyword) {
        keyword = "Harry Potter";
      }
      const result = await DataSource.searchClub(keyword);
      renderResult(result);
    } catch (message) {
      fallbackResult(message)
    }
  }

  // get Movie from Category Select
  const categorySelect = () => {
    const category = MovieCategoryListElement.value;
    switch (category) {
      case 'nowPlaying': getMovieList(APIConfig.nowPlaying); break;
      case 'trending': getMovieList(APIConfig.trending); break;
      case 'popular': getMovieList(APIConfig.popular); break;
      case 'topRated': getMovieList(APIConfig.topRated); break;
      case 'upcoming': getMovieList(APIConfig.upcoming); break;
    }
  }

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
    clubListElement.renderError(message);
  };

  MovieCategoryListElement.clickEvent = categorySelect;
  searchElement.clickEvent = onButtonSearchClicked;

  document.addEventListener("DOMContentLoaded", async () => {
    await getTrendingList();
  });

};

export default main;
