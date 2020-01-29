

searchRestaurantResultsDomFactory = {
    resultsFactory(eachRestaurant, index) {
        console.log("resultsFactory");
        return `
        <section class="restaurant">
            <div id="restaurant-${index}">${eachRestaurant.restaurant.name}
            </div> 
            <div id="restaurantAddress-${index}" class="restaurant_address">
            ${eachRestaurant.restaurant.location.address}
            </div>
            <button id="save-${index}" class="restaurant_saveBtn">Save to Itinerary</button>
        </section>`;
    },
    
    renderRestaurantResults(searchResults) {
        console.log("render step");
        console.table(searchResults);

        restaurantSaveManager.removeRestaurantSaveEventListener();

        const restaurantResultsContainer = document.querySelector("#searchedResults");
        restaurantResultsContainer.innerHTML = "";

        const restaurantObjectLevel = searchResults.restaurants;
        
        for (let i=0; i<restaurantObjectLevel.length; i++) {
            console.log(restaurantObjectLevel)
            const eachRestaurant = restaurantObjectLevel[i];
            restaurantResultsContainer.innerHTML += this.resultsFactory(eachRestaurant, i);
        }

        restaurantSaveManager.addRestaurantSaveEventListener();

    }
}


