
const restaurantItinerarySaveHandler = (evt) => {
    const buttonId = evt.target.id;
    const index = buttonId.split('-')[1];

    const restaurantName = document.getElementById(`restaurant-${index}`);    
    const restaurantAddress = document.getElementById(`restaurantAddress-${index}`);

    const savedRestaurantInfo = `Restaurant:${restaurantName.textContent.trim()} at ${restaurantAddress.textContent.trim()} </article>`
    
    const savedRestaurantSection = document.getElementById("restaurantsContainer")

    savedRestaurantSection.innerHTML = savedRestaurantInfo;

}

const restaurantSaveManager = {
    addRestaurantSaveEventListener () {
        const restbuttons = document.querySelectorAll(".restaurant_saveBtn");
        for (let restbutton of restbuttons) {
            restbutton.addEventListener("click", restaurantItinerarySaveHandler);
        }
    },

    removeRestaurantSaveEventListener () {
        const restbuttons = document.querySelectorAll(".restaurant_saveBtn");
        for (let restbutton of restbuttons) {
            restbutton.removeEventListener("click", restaurantItinerarySaveHandler);
        }
    }
}
