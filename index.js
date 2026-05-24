function searchWikipedia(topic) {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)

            const { displaytitle, thumbnail, timestamp, extract } = data

            let imageHtml = ""

            if (thumbnail) {
                imageHtml = `
                    <div class="img-container">
                        <img src="${thumbnail.source}">
                    </div>
                `
            }

            const html = `
                <div class="search-results-container">
                    <h1>${displaytitle}</h1>

                    <p class="description">${extract}</p>

                    ${imageHtml}

                    <p class="timestamp">${timestamp}</p>
                </div>
            `

            document.getElementById("results").innerHTML = html
        })
}

function handleSearchClick(event) {
    let inputId = ""

    if (event.target.id === "main-search-btn") {
        inputId = "topic-input"

        document.querySelector(".input-container").style.display = "none"
        document.querySelector("#section-1").style.display = "block"
    }

    if (event.target.id === "rabbit-search-btn") {
        inputId = "search-bar"
    }

    const topic = document.getElementById(inputId)
        .value
        .toLowerCase()
        .trim()

    if (topic === "") {
        alert("Error")
        return
    }

    searchWikipedia(topic)
}

document.getElementById("main-search-btn").addEventListener("click", handleSearchClick)

document.getElementById("rabbit-search-btn").addEventListener("click", handleSearchClick)