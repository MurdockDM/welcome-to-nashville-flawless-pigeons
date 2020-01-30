const searchResultsDomManagerArt = {
    publicArtFactory(artwork, index) {
        // console.log("publicArtFactory");

        return `
        <section id="artwork-${index}" class="artwork">
            <button class="add_button" id="favorite-${index}" class="artwork_favorite">
            Add &#127912;
            </button>
            <span id="artAndArtist-${index}" class="artwork_location">
            &nbsp ${artwork.artwork} by ${artwork.first_name} ${artwork.last_name}
            </span>
            <br>
            <a target="_blank" id="art-url-${index}" class="art-url" href="${artwork.page_link.url}">More Info</a>
            <span id="location-${index}" class="art-location">
            &nbsp ${artwork.location}
            </span>
            <br>
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