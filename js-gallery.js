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

let Albums = "https://andreamakarova.com/wordpress/wp-json/wp/v2/album?_embed&per_page=100";
const template2 = document.querySelector("#template2").content;
const parent2 = document.querySelector("#main2");



function loadData() {
    fetch(Albums).then(e => e.json()).then(show);
}

function show(data) {
    data.forEach(post => {

        console.log(post);

        //clone
        const clone2 = template2.cloneNode(true);
        //populate
        const img2 = clone2.querySelector("#img2");
        const title = clone2.querySelector("h1");


        img2.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;


        title.textContent = post.title.rendered;


       clone2.querySelector("a").href = "album.html?id=" + post.id;



        //append
        parent2.appendChild(clone2);
    });
}

loadData(Albums);


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3500);
}


function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector("header").style.display = "block";
    document.querySelectorAll("body").style.display = "block";
}
