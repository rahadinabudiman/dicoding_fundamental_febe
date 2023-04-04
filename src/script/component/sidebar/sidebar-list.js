import DataSidebar from '../../data/sidebar.json';

class SideBar extends HTMLElement {
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
        let HTMLContent = '';

        // JSON Sidebar
        DataSidebar.category.map((category) => {
            HTMLContent += `
            <div class="d-flow-root mt-4">
                <a class="nav-link text-black" href="#" id="${category.id}">${category.name}</a>
            </div>
            `;
        });
        this.innerHTML = HTMLContent;
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

customElements.define('side-bar', SideBar);