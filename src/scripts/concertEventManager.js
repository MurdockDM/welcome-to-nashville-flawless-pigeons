const concertEventManager = {
  addConcertClickEventListener() {
    console.log("addConcertClickEventListener");

    const concertButton = document.getElementById("concert-button");

    concertButton.addEventListener("click", () => {

      console.log("Concert button click handler");

      const concertInput = document.getElementById("concert-input");
      const concertSearch = concertInput.value;
      const concertResultPromise = concertApiManager.searchConcerts(concertSearch);
      concertResultPromise.then(concertResults => {
        concertResultsDomManager.renderConcertResults(concertResults);
      });
    });
  }
}