const searchEventManagerPark = {
    addSearchClickEventListener() {
        console.log("addSearchClickEventListener")

        const button = document.getElementById("search-btn");

        button.addEventListener("click", () => {
            
            console.log("button click handler");

            const input = document.getElementById("parkInput")
            const searchCriteria = input.value
            const searchResultPromise = apiManagerPark.searchParks(searchCriteria)

            searchResultPromise.then(searchResults => {
                console.log(searchResults)
                searchResultsDomManagerPark.renderSearchResultsPark(searchResults);
            })
        })
    }
}