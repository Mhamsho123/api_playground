const token = "REAL_SPOTIFY_TOKEN"

function fetchWebApi(endpoint) {

    fetch(`https://api.spotify.com/${endpoint}`, {
        method: "GET",

        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {

        console.log(data)

        const tracks = data.items

        for (let track of tracks) {

            console.log(track.name)

            for (let artist of track.artists) {
                console.log(artist.name)
            }
        }
    })
}

fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5")