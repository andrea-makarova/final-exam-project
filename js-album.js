const baseLink = "https://andreamakarova.com/wordpress/wp-json/wp/v2/album/";

const params = new URLSearchParams(window.location.search);
const albumID = params.get("id");

fetch(baseLink + albumID + "?_embed").then(e => e.json()).then(showAlbums);

function showAlbums(data) {
    document.querySelector(".title").textContent = data.title.rendered;
    document.querySelector(".description").innerHTML = data.content.rendered;
};

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  allImages += baseLink;

}

$('#detail-main p').append(allImages);

function goBack() {
    window.history.back();
}
