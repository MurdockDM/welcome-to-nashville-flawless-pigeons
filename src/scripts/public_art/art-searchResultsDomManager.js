const searchResultsDomManagerArt = {
    publicArtFactory(artwork, index) {
        // console.log("publicArtFactory");

        return `
        <section id="artwork-${index}" class="artwork">
            <div id="artAndArtist-${index}" class="artwork_location">
            ${artwork.artwork} by ${artwork.first_name} ${artwork.last_name}
            </div>
            <div id="location-${index}" class="art-location">
            ${artwork.location}
            </div>
            <a target="_blank" id="art-url-${index}" class="art-url" href="${artwork.page_link.url}">More Info
            </a>
            <br>
            <button class="add_button" id="favorite-${index}" class="artwork_favorite">
            Add &#128396
            </button>
            <br></br>
        </section>
        `;
    },
    renderSearchResults(searchResults) {

        // console.log("renderSearchResults");

        // favoriteEventManagerArt.removeFavoriteEventListeners();

        const container = document.querySelector("#searchedResults");
        container.innerHTML = "";

        for (let i = 0; i < searchResults.length; i++) {
            const artwork = searchResults[i];
            container.innerHTML += this.publicArtFactory(artwork, i);

            favoriteEventManagerArt.addFavoriteEventListeners();
        }
    }
}