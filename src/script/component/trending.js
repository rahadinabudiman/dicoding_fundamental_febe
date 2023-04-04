class Trending extends HTMLElement {
  set trendings(trending) {
    this._trending = trending;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
        <div class="card">
          <div class="card-body">
            <h5>(${this._trending.results.original_title})</h5>
            <p>${this._trending.results.release_date}</p>
            <button type="button" class="btn btn-danger button-delete" id="${this._trending.results.id}">Hapus</button>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define("trending-all", Trending);