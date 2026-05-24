document.getElementById('search-btn').addEventListener('click',function(){
    const topicInputEl = document.getElementById('topic-input').value.toLowerCase().trim()



    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${topicInputEl}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            let html = ""

            const {displaytitle, description, thumbnail, timestamp} = data

            html = `
            <div>
                ${displaytitle}
            </div>
            <div>
                ${description}
            </div>
            <div>
                <img src='${thumbnail.source}'>
            </div>
                ${timestamp}
            </div>
            `
            document.getElementById('section-1').innerHTML= html
        })
        
})