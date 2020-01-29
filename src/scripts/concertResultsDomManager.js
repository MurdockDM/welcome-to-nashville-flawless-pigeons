const concertResultsDomManager = {
    concertFactory(concert, index) {
        return `
        <section id="concert-${index}" class="saved_concert">
        <div id="artist-${index}">${concert._embedded.attractions[0].name}</div>
        <div id="venue-${index}">${concert._embedded.venues[0].name}</div>
        <button id="save-concert-button-${index}">Save Concert</button>
        </section>
        `;
    },
    
    renderConcertResults(concertResults) {

        const searchedConcertContainer = document.querySelector("#searchedResults");
        searchedConcertContainer.innerHTML = "";

        const allEvents = concertResults._embedded.events

        for (let i = 0; i < allEvents.length; i++) {
            const concert = allEvents[i];
            searchedConcertContainer.innerHTML += this.concertFactory(concert, i);
        }
        console.log(allEvents.length)

        savedConcertEventManager.addSavedConcertEventListeners();
    },
}