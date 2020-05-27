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
