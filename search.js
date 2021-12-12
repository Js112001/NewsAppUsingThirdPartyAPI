const input = document.querySelector("#search");


function search(url) {

    localStorage.setItem("search", input.value.toLowerCase());
    location.replace(url);

}