const cards = document.querySelector('#cards');

fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=en&media=True&topic=world", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f95bea38cbmsh3a8552b8d0642e7p16cb8ajsna253a6cb0ad2",
		"x-rapidapi-host": "newscatcher.p.rapidapi.com"
	}
})
.then(response=>response.json())
.then(response => {
	console.log(response);
    const articles = response.articles;

    for (let i = 0; i < articles.length; i++) {
        cards.innerHTML += `<div class="row my-5 d-flex justify-content-center align-items-center">
        <div class="col-md-6">
            <div class="card" style="width: 35rem; height: fit-content;">
                <img src="${articles[i].media}" class="card-img-top" alt="No media available">
                <h5 class="card-title px-3 pt-3">${articles[i].title}</h5>
                <div class="card-body" style="width: 35rem; height: fit-content;">
                    <p class="card-text">${articles[i].summary}</p>
                    <a href="${articles[i].link}" class="card-link article-links">Article link</a>
                    <p>${articles[i].published_date}</p>
                    <p>Country: ${articles[i].country}</p>
                </div>
            </div>
        </div>
    </div>`
    }
})
.catch(err => {
	console.error(err);
});