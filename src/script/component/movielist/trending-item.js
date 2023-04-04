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

            .icon-svg {
                width: 11px;
                margin-top: -3px;
            }
        </style>
        <div class="col mb-4">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
                <div class="card card-receipe" data-id="${this._item.id}">
                    <img src="https://image.tmdb.org/t/p/w500${this._item.poster_path}" class="card-img card-img-top" alt="${this._item.original_title}" />
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
    }
}

customElements.define("trending-item", Trending);