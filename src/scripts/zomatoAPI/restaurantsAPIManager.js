

const zomatoAPIBaseURL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${zomatoAPIKey}`


const zomatoAPIManager = {
    searchRestaurants(searchEntry) {

        console.log("searchRestaurants");

        const zomatoAPIFullURL = zomatoAPIBaseURL + `&q=${searchEntry}`;
        return fetch (zomatoAPIFullURL).then(resp => resp.json());
    }
}

