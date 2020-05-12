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

