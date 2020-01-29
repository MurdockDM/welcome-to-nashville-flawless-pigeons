const parkUrl = "https://data.nashville.gov/resource/74d7-b74t.json"

const apiManagerPark = {
    searchParks(searchCriteria) {

        const criteria = searchCriteria.toUpperCase();


        const url = parkUrl + `?$where=UPPER(park_name) like '%25${criteria}%25'`;

        // console.log(url)
        return fetch(url).then(resp => resp.json())
    }
}
