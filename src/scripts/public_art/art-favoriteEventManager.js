const favoriteEventHandlerArt = (evt) => {
    const buttonId = evt.target.id;
    const index = buttonId.split('-')[1];

    const artworkDiv = document.getElementById(`artAndArtist-${index}`);
    // const childNode = artworkDiv.childNodes
    // console.log(childNode)
    // console.log(childNode[2])
    // console.log(childNode[1].textContent)

    const locationDiv = document.getElementById(`location-${index}`);
    const infoToSave = `${artworkDiv.textContent.trim()} at ${locationDiv.textContent.trim()}`;
    const itinerary = document.getElementById("artContainer");
    itinerary.innerHTML = infoToSave;

    // itinerary.innerHTML = `${childNode[1].textContent} at ${childNode[3].textContent}`;

    // const busStopSection = document.getElementById(`artwork-${index}`);
    // busStopSection.classList.add('artwork_favorite');
};

const favoriteEventManagerArt = {
    addFavoriteEventListeners() {
        const buttons = document.querySelectorAll(".artwork");
        for (let button of buttons) {
            button.addEventListener("click", favoriteEventHandlerArt);
        }
    },
    // removeFavoriteEventListeners() {
    //   const buttons = document.querySelectorAll(".artwork_location");
    //   for (let button of buttons) {
    //     button.removeEventListener("click", favoriteEventHandlerArt);
    //   }
    // }
}