const artBaseUrl = "https://data.nashville.gov/resource/eviu-nxp6.json";

const apiManager = {
    searchPublicArt(searchCriteria) {
        console.log("searchPublicArt")
    return fetch(artBaseUrl).then(resp => resp.json())
    
    }
}

// fetch(artBaseUrl).then(resp => resp.json())