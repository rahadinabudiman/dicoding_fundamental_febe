import DataSource from "../../data/data-source.js";

class Trending extends HTMLElement {
    set trending(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.innerHTML = `
    <style>
            .card {
                font-family: "Open Sans", sans-serif;
                cursor: pointer;
                border: 0;
            }

            .card:hover {
                opacity: 0.7;
            }

            .card img.card-img {
                height: 250px;
                object-fit: cover;
                border-radius: 1rem;
            }

            .card .card-body {
                padding: 1.25rem 0 1.25rem 0;
            }

            .card .card-body .card-title {
                font-size: 0.9rem;
            }

            .card .card-body .card-text {
                font-size: 0.7rem;
            }

            .card-img-top {
                position: relative;
                overflow: hidden;
            }
            
            .btn {
                z-index: 1;
            }
            
            .position-relative {
                position: relative;
            }
            
            .position-absolute {
                position: absolute;
            }
        </style>
        <div class="col mb-4">
            <div>
                <div class="card card-movie" data-id="${this._item.id}">
                    <div class="position-relative">
                        <img src="https://image.tmdb.org/t/p/w500${this._item.poster_path}" class="card-img card-img-top" alt="${this._item.original_title}" />
                        <span class="position-absolute top-0 end-0 m-2 badge bg-danger">${this._item.vote_average}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${this._item.original_title}</h5>
                        <p class="card-text">
                            <span class="float-left">${this._item.release_date}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
        // Data DetailMovieCard
        const detailMovie = async (id) => {
            try {
                const result = await DataSource.detailMovie(id);
                renderResult(result);
            } catch (message) {
                fallbackResult(message);
            }
        };

        // Callback success
        const renderResult = results => {
            alert(`Title : ${results.original_title}\n\nOverview :${results.overview}`);
        };


        // Callback fail
        const fallbackResult = message => {
            console.log(message);
        };

        // Card click
        const movieCard = this.querySelector(".card-movie");
        movieCard.addEventListener("click", function () {
            const idMovieCard = this.getAttribute("data-id");
            detailMovie(idMovieCard);
        });
    }
}

customElements.define("trending-item", Trending);