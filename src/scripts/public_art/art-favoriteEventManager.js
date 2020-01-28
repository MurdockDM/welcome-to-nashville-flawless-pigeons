const favoriteEventHandler = (evt) => {
    const buttonId = evt.target.id;
    const index = buttonId.split('-')[1];
  
    const artworkDiv = document.getElementById(`artwork-${index}`);
    const locationDiv = document.getElementById(`location-${index}`);
    const infoToSave = `${artworkDiv.textContent.trim()}: ${locationDiv.textContent.trim()}`;
    const itinerary = document.getElementById("artContainer");
    itinerary.innerHTML = infoToSave;


  
    const busStopSection = document.getElementById(`artwork-${index}`);
    busStopSection.classList.add('artwork_favorite');
  };
  
  const favoriteEventManager = {
    addFavoriteEventListeners() {
      const buttons = document.querySelectorAll(".artwork");
      for (let button of buttons) {
        button.addEventListener("click", favoriteEventHandler);
      }
    },
    removeFavoriteEventListeners() {
      const buttons = document.querySelectorAll(".artwork_location");
      for (let button of buttons) {
        button.removeEventListener("click", favoriteEventHandler);
      }
    }
  }