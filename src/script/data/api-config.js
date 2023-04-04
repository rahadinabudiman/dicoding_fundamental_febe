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
}

export default APIConfig;