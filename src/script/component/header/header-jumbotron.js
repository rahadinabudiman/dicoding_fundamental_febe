import "./search-bar.js";

class HeaderJumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron-container">
        <div class="p-5 mb-4 bg-light rounded-3" style="background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/ee5c836d-3a48-48cd-9896-2d14c0acc31c/ID-en-20230327-popsignuptwoweeks-perspective_alpha_website_large.jpg');>
            <div class="container-fluid py-5">
            <center>
                <h1 class="display-5 fw-bold text-white">R4HAFLIX</h1>
                <p class="col-md-8 fs-4 text-white">Find your happiness here...</p>
                <search-bar></search-bar>
                </center>
            </div>
        </div>
        </div>
        `;
    }
}

customElements.define("header-jumbotron", HeaderJumbotron);