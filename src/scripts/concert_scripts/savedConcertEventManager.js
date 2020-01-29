const savedConcertEventHandler = (evt) => {
  const concertButtonId = evt.target.id;
  const index = concertButtonId.split('-')[3];

  const venueDiv = document.getElementById(`venue-${index}`);
  const artistDiv = document.getElementById(`artist-${index}`);
  const savedConcert = `<strong>Concert: </strong>${artistDiv.textContent.trim()} at ${venueDiv.textContent.trim()}`;
  const concertItinerary = document.getElementById("concertContainer");
  concertItinerary.innerHTML = savedConcert;
};

const savedConcertEventManager = {
  addSavedConcertEventListeners() {
    const concertButtons = document.querySelectorAll(".saved_concert");
    for (let concertButton of concertButtons) {
      concertButton.addEventListener("click", savedConcertEventHandler);
    }
  },
}