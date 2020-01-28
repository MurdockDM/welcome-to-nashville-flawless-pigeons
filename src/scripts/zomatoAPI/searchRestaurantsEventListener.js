

const searchRestaurantsListener = {
    addSearchEventListener () {
        console.log("adding search event listener");

        const restaurantSearchBtn = document.getElementById("restaurantSearchButton");

        restaurantSearchBtn.addEventListener("click", () => {
            console.log("search button event");
            const searchCriteria = document.getElementById("restaurantSearchCriteria");
            const searchEntry = searchCriteria.value;
            const restaurantSearchPromise = zomatoAPIManager.searchRestaurants(searchEntry);
            restaurantSearchPromise.then(searchResults => {
                searchResultsDomFactory.renderRestaurantResults(searchResults);
            })
        })
    }
}