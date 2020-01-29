const favoriteEventHandlerPark = (evt) => {
    const buttonId = evt.target.id
    const index = buttonId.split('-')[1]

    const parkDiv = document.getElementById(`park_name-${index}`)
    const adaDiv = document.getElementById(`park__ada-accessible-${index}`)

    const infoToSave = `${parkDiv.textContent.trim()}: ${adaDiv.textContent.trim()}`;
    const itinerary = document.getElementById("parkContainer")
    itinerary.innerHTML = infoToSave

}

const favoriteEventManagerPark = {
    addFavoriteEventListeners() {
        const buttons = document.querySelectorAll(".park")
        for (let button of buttons) {
            button.addEventListener("click", favoriteEventHandlerPark)
        }
    },
    removeFavoriteEventListeners() {
        const buttons = document.querySelectorAll(".park__park-name")
        for (let button of buttons) {
            button.removeEventListener("click", favoriteEventHandlerPark)
        }
    }
}