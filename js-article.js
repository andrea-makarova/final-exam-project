const baseLink = "https://andreamakarova.com/wordpress/wp-json/wp/v2/aktualita/";

const params = new URLSearchParams(window.location.search);
const actualityID = params.get("id");

fetch(baseLink + actualityID + "?_embed").then(e => e.json()).then(showActualities);

function showActualities(data) {
    document.querySelector(".title").textContent = data.title.rendered;
    document.querySelector(".description").innerHTML = data.content.rendered;
    document.querySelector("img").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
}
