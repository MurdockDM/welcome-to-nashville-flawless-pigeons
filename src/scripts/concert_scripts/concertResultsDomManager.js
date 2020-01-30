const concertResultsDomManager = {
    concertFactory(concert, index) {
        return `
        <section id="concert-${index}" class="saved_concert">
        <button class="add_button" id="save-concert-button-${index}">Add &#127928</button>
        <span id="artist-${index}">&nbsp &nbsp &nbsp ${concert._embedded.attractions[0].name}</span>
        <br>
        <a target="_blank" id="url-${index}" href="${concert._embedded.attractions[0].url}">Find Tickets</a>
        <span id="venue-${index}">&nbsp ${concert._embedded.venues[0].name}</span>
        <br>
        <br></br>
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
        // console.log(allEvents.length)

        savedConcertEventManager.addSavedConcertEventListeners();
    },
}