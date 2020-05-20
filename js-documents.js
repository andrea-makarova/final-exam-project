const menu = document.querySelector(".ham");
const menuWeb = document.querySelector(".menu-web")
const close = document.querySelector(".close")
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

//documents

const forDownloadNav = document.querySelector(".for-download-nav");
const forDownloadNav1 = document.querySelector(".for-download-nav1");
const GDPRNav = document.querySelectorAll(".gdpr-nav");
const forDownload = document.querySelector(".for-download");
const GDPR = document.querySelector(".gdpr");
const bold1 = document.querySelector(".bold1");
const bold2 = document.querySelector(".bold2");


forDownloadNav.addEventListener("click", openDownload);

function openDownload() {

    GDPRNav.style.opacity = "0.6";
     forDownloadNav.style.opacity = "1";
    forDownload.style.display = "block";
    GDPR.style.display = "none";

};


GDPRNav.forEach(function(elem) {
    elem.addEventListener("click", openGDPR);
                          });


function openGDPR()
{
     bold1.style.opacity = "1";
bold2.style.opacity = "1";
     forDownloadNav.style.opacity = "0.6";
    forDownloadNav1.style.opacity = "0.6";
    forDownload.style.display = "none";
    GDPR.style.display = "block";
};

if (window.location.hash === '#gdpr') {
    openGDPR();
  }
