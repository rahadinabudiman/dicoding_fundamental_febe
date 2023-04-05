class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=0bf8630ff9d3ff478b4f4bb3b8029338&query=${keyword}&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static detailMovie(id) {
        return fetch(`
        https://api.themoviedb.org/3/movie/${id}?api_key=0bf8630ff9d3ff478b4f4bb3b8029338&language=en-US`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${id} is not found`)
                }
            })
    }

    static getMovieCategory(target) {
        return fetch(target)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                }
            })
    }
}

export default DataSource;