const artBaseUrl = "https://data.nashville.gov/resource/eviu-nxp6.json";

const apiManager = {
    searchPublicArt(searchCriteria) {
        console.log("searchPublicArt")

        const criteria = searchCriteria.toUpperCase();
        const url = artBaseUrl + `?$where=UPPER(description) like '%25${criteria}%25'`;
    // const criteria = encodeURIComponent(`"%${searchCriteria.toUpperCase()}%"`);
    // const url = apiBaseUrl + `$where=route_name like ${criteria}`;
    return fetch(url).then(resp => resp.json())
    
    }
}

// fetch(artBaseUrl).then(resp => resp.json())