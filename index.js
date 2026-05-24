document.getElementById('search-btn').addEventListener('click',function(){
    const topicInputEl = document.getElementById('topic-input').value.toLowerCase().trim()
    

    if(topicInputEl == ""){
        alert('Error')
    }else{
        
        document.querySelector('.input-container').style.display = 'none'
        document.querySelector('#search-bar').style.display = 'block'

        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${topicInputEl}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            let html = ""

            const {displaytitle, description, thumbnail, timestamp} = data

            html = `
            <div class="search-results-container">
                <h1>${displaytitle}</h1>
        
                <p class="description">${description}</p>
        
                <div class="img-container">
                    <img src="${thumbnail.source}">
                </div>
        
                <p class="timestamp">${timestamp}</p>
            </div>
        `
            document.getElementById('results').innerHTML= html
        })

    }
})