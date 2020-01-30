

searchRestaurantResultsDomFactory = {
    resultsFactory(eachRestaurant, index) {
        // console.log("resultsFactory");
        return `
        <section class="restaurant_section">
            <button id="save-${index}" class="restaurant_saveBtn">Add &#127790</button>
            <span id="restaurant-${index}">&nbsp ${eachRestaurant.restaurant.name}
            </span>
            <br>
            <a target="_blank" id="restaurant-url-${index}" class="restaurant-url" href="${eachRestaurant.restaurant.url}">More Info
            </a>
            <span id="restaurantAddress-${index}" class="restaurant_address">
            &nbsp ${eachRestaurant.restaurant.location.address}
            </span>
        </section>
        <br></br>`;
    },
    
    renderRestaurantResults(searchResults) {
        // console.log("render step");
        // console.table(searchResults);

        restaurantSaveManager.removeRestaurantSaveEventListener();

        const restaurantResultsContainer = document.querySelector("#searchedResults");
        restaurantResultsContainer.innerHTML = "";

        const restaurantObjectLevel = searchResults.restaurants;
        
        for (let i=0; i<restaurantObjectLevel.length; i++) {
            // console.log(restaurantObjectLevel)
            const eachRestaurant = restaurantObjectLevel[i];
            restaurantResultsContainer.innerHTML += this.resultsFactory(eachRestaurant, i);
        }

        restaurantSaveManager.addRestaurantSaveEventListener();

    }
}


