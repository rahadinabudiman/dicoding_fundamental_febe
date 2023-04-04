class MovieCategory extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("section.row .d-none .d-flow-root .nav-link.active").id;
    }

    render() {
        this.innerHTML = `
        <div class="d-flow-root mt-4">
            <a class="nav-link text-black active" href="#" id="nowPlaying">Now Playing</a>
        </div>
        <div class="d-flow-root mt-4">
            <a class="nav-link text-black" href="#" id="popular">Popular</a>
        </div>
        <div class="d-flow-root mt-4">
            <a class="nav-link text-black" href="#" id="trending">Trending</a>
        </div>
        <div class="d-flow-root mt-4">
            <a class="nav-link text-black" href="#" id="topRated">Top Rated</a>
        </div>
        <div class="d-flow-root mt-4">
            <a class="nav-link text-black" href="#" id="upcoming">Upcoming</a>
        </div>
        `;

        const navLinks = this.querySelectorAll("section.row .d-none .d-flow-root .nav-link");

        navLinks.forEach((tabItem) => {
            tabItem.addEventListener("click", (event) => {
                const selectedItems = this.querySelectorAll(
                    ".active"
                );

                if (selectedItems.length > 0) {
                    selectedItems[0].classList.remove("active");
                }

                event.target.classList.add("active");
                this.addEventListener("click", this._clickEvent);
            });
        });
    }
}

customElements.define('movie-category', MovieCategory);