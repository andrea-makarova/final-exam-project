const menu = document.querySelector(".ham");
const navigation = document.querySelector(".nav");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const smallNav1 = document.querySelector(".small-nav-1");


menu.addEventListener("click", openNav);

function openNav() {
  if (navigation.style.display === "block") {
    navigation.style.display = "none";

  } else {
    navigation.style.display = "block";
  }

};

plus.addEventListener("click", openSmallNav);

function openSmallNav() {

    smallNav1.style.display = "block";

      if (minus.style.display === "inline") {
    minus.style.display = "none";
  } else {
    minus.style.display = "inline";
  }
       if (plus.style.display === "none") {
   plus.style.display = "inline";
  } else {
   plus.style.display = "none";
  }

};

minus.addEventListener("click", closeSmallNav);

function closeSmallNav() {

    smallNav1.style.display = "none";

      if (minus.style.display === "inline") {
    minus.style.display = "none";
  } else {
    minus.style.display = "inline";
  }
       if (plus.style.display === "none") {
   plus.style.display = "inline";
  } else {
   plus.style.display = "block";
  }

};

let Actualities = "https://andreamakarova.com/wordpress/wp-json/wp/v2/aktualita?_embed&per_page=20";
const template1 = document.querySelector("#template1").content;
const parent1 = document.querySelector("#main1");



function loadData() {
    fetch(Actualities).then(e => e.json()).then(show);
}

function show(data) {
    data.forEach(post => {

console.log(post);

        //clone
        const clone1 = template1.cloneNode(true);
        //populate
        const img1 = clone1.querySelector("#img1");
        const title = clone1.querySelector("h1");
        const description = clone1.querySelector("p");



        img1.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;


        title.textContent = post.title.rendered;
        description.textContent = post.short_description;


       clone1.querySelector("a").href = "article.html?id=" + post.id;



        //append
        parent1.appendChild(clone1);
    });
}

loadData(Actualities);

const aktuality = document.querySelector(".aktuality");
const udalosti = document.querySelector(".udalosti");

aktuality.addEventListener("click", openAktuality);

function openAktuality() {

    udalosti.style.display = "none";
    parent1.style.display = "block";

};


udalosti.addEventListener("click", openUdalosti);

function openUdalosti() {

    udalosti.style.display = "block";
    parent1.style.display = "none";

};
