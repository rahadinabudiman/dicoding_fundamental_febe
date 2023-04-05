import '@fortawesome/fontawesome-free';

class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `   
    <header class="container my-3">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    R4HAFLIX
                </a>
                

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#sidebar">Category</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item d-sm-none d-md-none d-lg-block">
                            <a class="nav-link" href="#">
                            <i class="fa-solid fa-user"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="navbar-action d-sm-none d-md-none d-lg-block">
                        <button type="button" class="btn rounded-pill">Log in</button>
                        <button type="button" class="btn btn-dark rounded-pill">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </header>`;
    }
}

customElements.define("app-bar", AppBar);