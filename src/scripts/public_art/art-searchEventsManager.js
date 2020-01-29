const searchEventManagerArt = {
    addEventListenerFunction() {
        console.log("addSearchClickEventListener");

        const button = document.getElementById("art--button");

        button.addEventListener("click", () => {

            console.log("button click handler");

            const input = document.getElementById("art--search--input");
            const searchCriteria = input.value;
            const searchResultPromise = apiManagerArt.searchPublicArt(searchCriteria);
            searchResultPromise.then(searchResults => {
                searchResultsDomManagerArt.renderSearchResults(searchResults);})
        })
    }
}