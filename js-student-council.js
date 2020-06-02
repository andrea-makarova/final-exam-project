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

//en nav

const link1en = document.querySelector(".link1en");
const plus1en = document.querySelector(".plus1en");
const minus1en = document.querySelector(".minus1en");
const smallNav1en = document.querySelector(".small-nav-1en");

const link2en = document.querySelector(".link2en");
const plus2en = document.querySelector(".plus2en");
const minus2en = document.querySelector(".minus2en");
const smallNav2en = document.querySelector(".small-nav-2en");

const link3en = document.querySelector(".link3en");
const plus3en = document.querySelector(".plus3en");
const minus3en = document.querySelector(".minus3en");
const smallNav3en = document.querySelector(".small-nav-3en");

const link4en = document.querySelector(".link4en");
const plus4en = document.querySelector(".plus4en");
const minus4en = document.querySelector(".minus4en");
const smallNav4en = document.querySelector(".small-nav-4en");

const link5en = document.querySelector(".link5en");
const plus5en = document.querySelector(".plus5en");
const minus5en = document.querySelector(".minus5en");
const smallNav5en = document.querySelector(".small-nav-5en");

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

const en = document.querySelector(".en");
const sk = document.querySelector(".sk");
const english = document.querySelector(".english");
const slovak = document.querySelector(".slovak");

en.addEventListener("click", openEnNav);

function openEnNav() {
        english.style.display = "block";
         slovak.style.display = "none";
        en.style.fontWeight = "600";
    sk.style.fontWeight = "300";


};

sk.addEventListener("click", openSkNav);

function openSkNav() {
        english.style.display = "none";
         slovak.style.display = "block";
        en.style.fontWeight = "300";
    sk.style.fontWeight = "600";


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

//en navigation functions

link1en.addEventListener("click", openNav1en);

function openNav1en() {
    if (smallNav1en.style.display === "block") {
        smallNav1en.style.display = "none";
         minus1en.style.display = "none";
        plus1en.style.display = "inline";

    } else {
        smallNav1en.style.display = "block";
         minus1en.style.display = "inline";
        plus1en.style.display = "none";

    }

};



link2en.addEventListener("click", openNav2en);

function openNav2en() {
    if (smallNav2en.style.display === "block") {
        smallNav2en.style.display = "none";
         minus2en.style.display = "none";
        plus2en.style.display = "inline";

    } else {
        smallNav2en.style.display = "block";
         minus2en.style.display = "inline";
        plus2en.style.display = "none";

    }

};


link3en.addEventListener("click", openNav3en);

function openNav3en() {
    if (smallNav3en.style.display === "block") {
        smallNav3en.style.display = "none";
         minus3en.style.display = "none";
        plus3en.style.display = "inline";

    } else {
        smallNav3en.style.display = "block";
         minus3en.style.display = "inline";
        plus3en.style.display = "none";

    }

};

link4en.addEventListener("click", openNav4en);

function openNav4en() {
    if (smallNav4en.style.display === "block") {
        smallNav4en.style.display = "none";
         minus4en.style.display = "none";
        plus4en.style.display = "inline";

    } else {
        smallNav4en.style.display = "block";
         minus4en.style.display = "inline";
        plus4en.style.display = "none";

    }

};


link5en.addEventListener("click", openNav5en);

function openNav5en() {
    if (smallNav5en.style.display === "block") {
        smallNav5en.style.display = "none";
         minus5en.style.display = "none";
        plus5en.style.display = "inline";

    } else {
        smallNav5en.style.display = "block";
         minus5en.style.display = "inline";
        plus5en.style.display = "none";

    }

};

//fetching

let Actualities = "https://andreamakarova.com/wordpress/wp-json/wp/v2/aktualita?_embed&categories=5&per_page=2";
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


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3500);
}


function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector("header").style.display = "block";
    document.querySelectorAll("body").style.display = "block";
}

