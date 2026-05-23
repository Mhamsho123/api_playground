document.getElementById("get-colors").addEventListener("click", function () {
    const color = document.getElementById("color-picker").value

    const hex = color.slice(1)

    const mode = document.getElementById("mode").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}&count=5`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)

            let html = ""

            for (let color of data.colors) {
                html += `
                    <div class="color-column">
                        <div 
                            class="color-box"
                            style="background-color: ${color.hex.value}">
                        </div>
                        <p>${color.hex.value}</p>
                    </div>
                `
            }

            document.getElementById("colors").innerHTML = html
        })
})