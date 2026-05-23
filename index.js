document.getElementById('search-btn').addEventListener('click',function(){
    const topicInputEl = document.getElementById('topic-input').value.toLowerCase().trim()



    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${topicInputEl}`)
        .then(res => res.json())
        .then(data => console.log(data))
})