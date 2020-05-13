const menu = document.querySelector(".ham");
const navigation = document.querySelector(".nav");
const plus1 = document.querySelector(".plus1");
const minus1 = document.querySelector(".minus1");
const smallNav1 = document.querySelector(".small-nav-1");

const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const smallNav2 = document.querySelector(".small-nav-2");

const plus3 = document.querySelector(".plus3");
const minus3 = document.querySelector(".minus3");
const smallNav3 = document.querySelector(".small-nav-3");

const plus4 = document.querySelector(".plus4");
const minus4 = document.querySelector(".minus4");
const smallNav4 = document.querySelector(".small-nav-4");

const plus5 = document.querySelector(".plus5");
const minus5 = document.querySelector(".minus5");
const smallNav5 = document.querySelector(".small-nav-5");

menu.addEventListener("click", openNav);

function openNav() {
    if (navigation.style.display === "block") {
        navigation.style.display = "none";

    } else {
        navigation.style.display = "block";
    }

};


//navigation functions

plus1.addEventListener("click", openSmallNav1);

function openSmallNav1() {

    smallNav1.style.display = "block";

    if (minus1.style.display === "inline") {
        minus1.style.display = "none";
    } else {
        minus1.style.display = "inline";
    }
    if (plus1.style.display === "none") {
        plus1.style.display = "inline";
    } else {
        plus1.style.display = "none";
    }

};

minus1.addEventListener("click", closeSmallNav1);

function closeSmallNav1() {

    smallNav1.style.display = "none";

    if (minus1.style.display === "inline") {
        minus1.style.display = "none";
    } else {
        minus1.style.display = "inline";
    }
    if (plus1.style.display === "none") {
        plus1.style.display = "inline";
    } else {
        plus1.style.display = "block";
    }

};



plus2.addEventListener("click", openSmallNav2);

function openSmallNav2() {

    smallNav2.style.display = "block";

    if (minus2.style.display === "inline") {
        minus2.style.display = "none";
    } else {
        minus2.style.display = "inline";
    }
    if (plus2.style.display === "none") {
        plus2.style.display = "inline";
    } else {
        plus2.style.display = "none";
    }

};

minus2.addEventListener("click", closeSmallNav2);

function closeSmallNav2() {

    smallNav2.style.display = "none";

    if (minus2.style.display === "inline") {
        minus2.style.display = "none";
    } else {
        minus2.style.display = "inline";
    }
    if (plus2.style.display === "none") {
        plus2.style.display = "inline";
    } else {
        plus2.style.display = "block";
    }

};


plus3.addEventListener("click", openSmallNav3);

function openSmallNav3() {

    smallNav3.style.display = "block";

    if (minus3.style.display === "inline") {
        minus3.style.display = "none";
    } else {
        minus3.style.display = "inline";
    }
    if (plus3.style.display === "none") {
        plus3.style.display = "inline";
    } else {
        plus3.style.display = "none";
    }

};

minus3.addEventListener("click", closeSmallNav3);

function closeSmallNav3() {

    smallNav3.style.display = "none";

    if (minus3.style.display === "inline") {
        minus3.style.display = "none";
    } else {
        minus3.style.display = "inline";
    }
    if (plus3.style.display === "none") {
        plus3.style.display = "inline";
    } else {
        plus3.style.display = "block";
    }

};

plus4.addEventListener("click", openSmallNav4);

function openSmallNav4() {

    smallNav4.style.display = "block";

    if (minus4.style.display === "inline") {
        minus4.style.display = "none";
    } else {
        minus4.style.display = "inline";
    }
    if (plus4.style.display === "none") {
        plus4.style.display = "inline";
    } else {
        plus4.style.display = "none";
    }

};

minus4.addEventListener("click", closeSmallNav4);

function closeSmallNav4() {

    smallNav4.style.display = "none";

    if (minus4.style.display === "inline") {
        minus4.style.display = "none";
    } else {
        minus4.style.display = "inline";
    }
    if (plus4.style.display === "none") {
        plus4.style.display = "inline";
    } else {
        plus4.style.display = "block";
    }

};


plus5.addEventListener("click", openSmallNav5);

function openSmallNav5() {

    smallNav5.style.display = "block";

    if (minus5.style.display === "inline") {
        minus5.style.display = "none";
    } else {
        minus5.style.display = "inline";
    }
    if (plus5.style.display === "none") {
        plus5.style.display = "inline";
    } else {
        plus5.style.display = "none";
    }

};

minus5.addEventListener("click", closeSmallNav5);

function closeSmallNav5() {

    smallNav5.style.display = "none";

    if (minus5.style.display === "inline") {
        minus5.style.display = "none";
    } else {
        minus5.style.display = "inline";
    }
    if (plus5.style.display === "none") {
        plus5.style.display = "inline";
    } else {
        plus5.style.display = "block";
    }

};

//fetching

let Actualities = "https://andreamakarova.com/wordpress/wp-json/wp/v2/aktualita?_embed&per_page=100";
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


