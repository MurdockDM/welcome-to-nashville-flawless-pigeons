const searchEventManager = {
    addSearchClickEventListener() {
        console.log("addSearchClickEventListener")

        const button = document.getElementById("search-btn");

        button.addEventListener("click", () => {
            
            console.log("button click handler");

            const input = document.getElementById("parkInput")
            const searchCriteria = input.value
            const searchResultPromise = apiManager.searchParks(searchCriteria)

            searchResultPromise.then(searchResults => {
                console.log(searchResults)
                searchResultsDomManager.renderSearchResults(searchResults);
            })
        })
    }
}