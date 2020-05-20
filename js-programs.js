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

//show info
const more1 = document.querySelector(".more1");
const more2 = document.querySelector(".more2");
const more3 = document.querySelector(".more3");
const info1 = document.querySelector("div.info1");
const info2 = document.querySelector("div.info2");
const info3 = document.querySelector("div.info3");


more1.addEventListener("click", openInfo1);

function openInfo1() {

    if (info1.style.display === "block") {
        info1.style.display = "none";
        more1.style.transform = "rotate(360deg)";

    } else {
        info1.style.display = "block";
        more1.style.transform = "rotate(180deg)";
    }


};

more2.addEventListener("click", openInfo2);

function openInfo2() {

    if (info2.style.display === "block") {
        info2.style.display = "none";
        more2.style.transform = "rotate(360deg)";

    } else {
        info2.style.display = "block";
        more2.style.transform = "rotate(180deg)";
    }
};

more3.addEventListener("click", openInfo3);

function openInfo3() {

    if (info3.style.display === "block") {
        info3.style.display = "none";
        more3.style.transform = "rotate(360deg)";

    } else {
        info3.style.display = "block";
        more3.style.transform = "rotate(180deg)";
    }


};

//navigation programs
const a2a = document.querySelector(".a2a");
const a2b = document.querySelector(".a2b");
const a2c = document.querySelector(".a2c");
const a2d = document.querySelector(".a2d");
const p2a = document.querySelector(".p2a");
const p2b = document.querySelector(".p2b");
const p2c = document.querySelector(".p2c");
const p2d = document.querySelector(".p2d");

a2a.addEventListener("click", openPa2);

function openPa2() {

    if (p2a.style.display === "block") {
        p2a.style.display = "none";

    } else {
        p2a.style.display = "block";

    }


};


a2b.addEventListener("click", openPb2);

function openPb2() {

    if (p2b.style.display === "block") {
        p2b.style.display = "none";

    } else {
        p2b.style.display = "block";

    }


};

a2c.addEventListener("click", openPc2);

function openPc2() {

    if (p2c.style.display === "block") {
        p2c.style.display = "none";

    } else {
        p2c.style.display = "block";

    }


};

a2d.addEventListener("click", openPd2);

function openPd2() {

    if (p2d.style.display === "block") {
        p2d.style.display = "none";

    } else {
        p2d.style.display = "block";

    }


};


const a1a = document.querySelector(".a1a");
const a1b = document.querySelector(".a1b");
const a1c = document.querySelector(".a1c");
const a1d = document.querySelector(".a1d");
const p1a = document.querySelector(".p1a");
const p1b = document.querySelector(".p1b");
const p1c = document.querySelector(".p1c");
const p1d = document.querySelector(".p1d");


a1a.addEventListener("click", openPa1);

function openPa1() {

    if (p1a.style.display === "block") {
        p1a.style.display = "none";


    } else {
        p1a.style.display = "block";
bold3.style.opacity ="1";
        bold4.style.opacity ="1";
    }


};


a1b.addEventListener("click", openPb1);

function openPb1() {

    if (p1b.style.display === "block") {
        p1b.style.display = "none";

    } else {
        p1b.style.display = "block";

    }


};

a1c.addEventListener("click", openPc1);

function openPc1() {

    if (p1c.style.display === "block") {
        p1c.style.display = "none";

    } else {
        p1c.style.display = "block";

    }


};

a1d.addEventListener("click", openPd1);

function openPd1() {

    if (p1d.style.display === "block") {
        p1d.style.display = "none";

    } else {
        p1d.style.display = "block";

    }


};

//opens specific program
if (window.location.hash === '#1id') {
    openInfo1();
  }

if (window.location.hash === '#2id') {
    openInfo2();
  }

if (window.location.hash === '#3id') {
    openInfo3();
  }
