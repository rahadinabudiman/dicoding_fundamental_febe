class FooterMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container">
                <center>
                    <span class="text-center">Rahadina Budiman Sundara &copy R4HAFLIX 2023</span>
                </center>
            </div>
        </footer>
        `;
    }
}

customElements.define("footer-menu", FooterMenu);