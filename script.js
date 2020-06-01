const menu = document.querySelector(".ham");
const menuWeb = document.querySelector(".menu-web")
const close = document.querySelector(".close")
const navigation = document.querySelector(".nav");

const link1 = document.querySelector(".link1");
const plus1 = document.querySelector(".plus1");
const minus1 = document.querySelector(".minus1");
const smallNav1 = document.querySelector(".small-nav-1");

const link2 = document.querySelector(".link2");
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const smallNav2 = document.querySelector(".small-nav-2");

const link3 = document.querySelector(".link3");
const plus3 = document.querySelector(".plus3");
const minus3 = document.querySelector(".minus3");
const smallNav3 = document.querySelector(".small-nav-3");

const link4 = document.querySelector(".link4");
const plus4 = document.querySelector(".plus4");
const minus4 = document.querySelector(".minus4");
const smallNav4 = document.querySelector(".small-nav-4");

const link5 = document.querySelector(".link5");
const plus5 = document.querySelector(".plus5");
const minus5 = document.querySelector(".minus5");
const smallNav5 = document.querySelector(".small-nav-5");

menu.addEventListener("click", openNav);
menuWeb.addEventListener("click", openNav);

function openNav() {
    if (navigation.style.display === "block") {
        navigation.style.display = "none";

    } else {
        navigation.style.display = "block";
    }

};



close.addEventListener("click", closeNav);

function closeNav() {

        navigation.style.display = "none";

};
//navigation functions

link1.addEventListener("click", openNav1);

function openNav1() {
    if (smallNav1.style.display === "block") {
        smallNav1.style.display = "none";
         minus1.style.display = "none";
        plus1.style.display = "inline";

    } else {
        smallNav1.style.display = "block";
         minus1.style.display = "inline";
        plus1.style.display = "none";

    }

};



link2.addEventListener("click", openNav2);

function openNav2() {
    if (smallNav2.style.display === "block") {
        smallNav2.style.display = "none";
         minus2.style.display = "none";
        plus2.style.display = "inline";

    } else {
        smallNav2.style.display = "block";
         minus2.style.display = "inline";
        plus2.style.display = "none";

    }

};


link3.addEventListener("click", openNav3);

function openNav3() {
    if (smallNav3.style.display === "block") {
        smallNav3.style.display = "none";
         minus3.style.display = "none";
        plus3.style.display = "inline";

    } else {
        smallNav3.style.display = "block";
         minus3.style.display = "inline";
        plus3.style.display = "none";

    }

};

link4.addEventListener("click", openNav4);

function openNav4() {
    if (smallNav4.style.display === "block") {
        smallNav4.style.display = "none";
         minus4.style.display = "none";
        plus4.style.display = "inline";

    } else {
        smallNav4.style.display = "block";
         minus4.style.display = "inline";
        plus4.style.display = "none";

    }

};


link5.addEventListener("click", openNav5);

function openNav5() {
    if (smallNav5.style.display === "block") {
        smallNav5.style.display = "none";
         minus5.style.display = "none";
        plus5.style.display = "inline";

    } else {
        smallNav5.style.display = "block";
         minus5.style.display = "inline";
        plus5.style.display = "none";

    }

};


//fetching

let Events = "https://andreamakarova.com/wordpress/wp-json/wp/v2/udalost?_embed&per_page=20";
const template3 = document.querySelector("#template3").content;
const parent3 = document.querySelector("#main3");



function loadData3() {
    fetch(Events).then(e => e.json()).then(show3);
}

function show3(data3) {
    data3.forEach(post3 => {

        console.log(post3);

        //clone
        const clone3 = template3.cloneNode(true);
        //populate

        const title3 = clone3.querySelector("h2");

        title3.innerHTML= post3.title.rendered;





        //append
        parent3.appendChild(clone3);
    });
} loadData3(Events);


let Actualities = "https://andreamakarova.com/wordpress/wp-json/wp/v2/aktualita?_embed&per_page=4";
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
} loadData(Actualities);



//actuality and events

const aktuality = document.querySelector(".aktuality");
const udalosti = document.querySelector(".udalosti");

aktuality.addEventListener("click", openAktuality);

function openAktuality() {

    udalosti.style.opacity = "0.6";
     aktuality.style.opacity = "1";
    parent1.style.display = "grid";
     parent3.style.display = "none";

};


udalosti.addEventListener("click", openUdalosti);

function openUdalosti() {

    aktuality.style.opacity = "0.6";
    udalosti.style.opacity = "1";
    parent1.style.display = "none";
    parent3.style.display = "block";

};





if (window.location.hash === '#main3') {
    openUdalosti();
  };

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3500);
}


function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector("header").style.display = "block";
    document.querySelectorAll("body").style.display = "block";
}
