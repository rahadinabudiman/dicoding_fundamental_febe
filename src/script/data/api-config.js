class APIConfig {
    static get BASE_URL() {
        return "https://api.themoviedb.org";
    }
    static get API_KEY() {
        return "0bf8630ff9d3ff478b4f4bb3b8029338";
    }
    static get nowPlaying() {
        return `${this.BASE_URL}/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=1`;
    }
    static get popular() {
        return `${this.BASE_URL}/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
    }
    static get trending() {
        return `${this.BASE_URL}/3/trending/movie/day?api_key=${this.API_KEY}&media_type=movie`;
    }
    static get topRated() {
        return `${this.BASE_URL}/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
    }
    static get upcoming() {
        return `${this.BASE_URL}/3/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=1`;
    }
    static get 28() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=28`;
    }
    static get 12() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=12`;
    }
    static get 16() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=16`;
    }
    static get 35() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=35`;
    }
    static get 80() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=80`;
    }
    static get 99() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=99`;
    }
    static get 18() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=18`;
    }
    static get 10751() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=10751`;
    }
    static get 14() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=14`;
    }
    static get 36() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=36`;
    }
    static get 27() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=27`;
    }
    static get 10402() {

        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=10402`;
    }
    static get 9648() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=9648`;
    }
    static get 10749() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=10749`;
    }
    static get 878() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=878`;
    }
    static get 10770() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=10770`;
    }
    static get 53() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=53`;
    }
    static get 10752() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=10752`;
    }
    static get 37() {
        return `${this.BASE_URL}/3/discover/movie?api_key=${this.API_KEY}&with_genres=37`;
    }
}

export default APIConfig;