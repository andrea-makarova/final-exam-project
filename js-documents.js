//documents

const forDownloadNav = document.querySelector(".for-download-nav");
const GDPRNav = document.querySelector(".gdpr-nav");
const forDownload = document.querySelector(".for-download");
const GDPR = document.querySelector(".gdpr");

forDownloadNav.addEventListener("click", openDownload);

function openDownload() {

    GDPRNav.style.opacity = "0.6";
     forDownloadNav.style.opacity = "1";
    forDownload.style.display = "block";
    GDPR.style.display = "none";

};


GDPRNav.addEventListener("click", openGDPR);

function openGDPR() {

   GDPRNav.style.opacity = "1";
     forDownloadNav.style.opacity = "0.6";
    forDownload.style.display = "none";
    GDPR.style.display = "block";
};
