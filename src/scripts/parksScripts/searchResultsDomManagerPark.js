const searchResultsDomManagerPark = {
    parkFactory(park, index) {
        // console.log("parkFactory")

        // We use the "index" to make uniqe ids for each park
        return `
            <section id="park-${index}" class="park">
                <div id="park_name-${index}" class="park__park-name">
                ${park.park_name}
                </div>

                <div id="park__ada-accessible-${index}" class="park__ada-accessible">
                    ADA Accessible: ${park.ada_accessible}
                </div>
                <button class="add_button" id="favorite-${index}" class="park__favorite">
                    Add &#127795;
                </button>
                <br></br>
            </section>
        `
    },

    renderSearchResultsPark(searchResults) {

        // console.log("renderSearchResults")

        favoriteEventManagerPark.removeFavoriteEventListeners()

        const container = document.getElementById("searchedResults")
        container.innerHTML = ""

        for (let i = 0; i < searchResults.length; i++) {
            const park = searchResults[i]
            container.innerHTML += this.parkFactory(park, i)

            favoriteEventManagerPark.addFavoriteEventListeners()
        }
    }
}