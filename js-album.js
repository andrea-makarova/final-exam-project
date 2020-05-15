const baseLink = "https://andreamakarova.com/wordpress/wp-json/wp/v2/album/";

const params = new URLSearchParams(window.location.search);
const albumID = params.get("id");

fetch(baseLink + albumID + "?_embed").then(e => e.json()).then(showAlbums);

function showAlbums(data) {
    document.querySelector(".title").textContent = data.title.rendered;
    document.querySelector(".description").innerHTML = data.content.rendered;
};

function goBack() {
    window.history.back();
}
