import "./trending-item.js";

class TrendingList extends HTMLElement {

    set trendings(items) {
        this._items = items;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-6";
        this._items.forEach(item => {
            const trendingItemElement = document.createElement('trending-item');
            trendingItemElement.trending = item;
            this.appendChild(trendingItemElement);
        });
    }
}
customElements.define("trending-list", TrendingList);