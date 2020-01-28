const searchEventManager = {
    addEventListenerFunction() {
        console.log("addSearchClickEventListener");

        const button = document.getElementById("art--button");

        button.addEventListener("click", () => {

            console.log("button click handler");

            const input = document.getElementById("art--search--input");
            const searchCriteria = input.nodeValue;
            const searchResultPromise = apiManager.searchPublicArt(searchCriteria);
            searchResultPromise.then(searchResults => {
                searchResultsDomManager.renderSearchResults(searchResults);})
        })
    }
}