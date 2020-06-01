const baseLink = "https://andreamakarova.com/wordpress/wp-json/wp/v2/aktualita/";

const params = new URLSearchParams(window.location.search);
const actualityID = params.get("id");

fetch(baseLink + actualityID + "?_embed").then(e => e.json()).then(showActualities);

function showActualities(data) {
    document.querySelector(".title").textContent = data.title.rendered;
    document.querySelector(".description").innerHTML = data.content.rendered;
};

function goBack() {
    window.history.back();
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3500);
}


function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector("header").style.display = "block";
    document.querySelectorAll("body").style.display = "block";
}
