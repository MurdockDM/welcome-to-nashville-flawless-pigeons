const favoriteEventHandler = (evt) => {
    const buttonId = evt.target.buttonId
    const index = buttonId.split('-')[1]

    const parkDiv = document.getElementById(`park_name-${index}`)
    const adaDiv = document.getElementById(`park__ada-accessible-${index}`)
    const stopText = `${parkDiv.textContent.trim()} : ${adaDiv.textContent.trim()}`

    alert(`You like\n${stopText}`)

    const parkSection = document.getElementById(`park-${index}`)
    parkSection.classList.add('favorite')
}

const favoriteEventManager = {
    addFavoriteEventListeners() {
        const buttons = document.querySelectorAll("park__favorite")
        for (let button of buttons) {
            button.addEventListener("click", favoriteEventHandler)
        }
    },
    removeFavoriteEventListeners() {
        const buttons = document.querySelectorAll("park__favorite")
        for (let button of buttons) {
            button.removeEventListener("click", favoriteEventHandler)
        }
    }
}