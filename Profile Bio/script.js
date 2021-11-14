let parallaximage = document.getElementById('parallax-image');
let parallaxcontent = document.getElementById('parallax-content');
let windowScrolled;

window.addEventListener("scroll", function windowscroll() {
    windowScrolled = window.pageYOffset;
    parallaximage.style.backgroundPositionY = windowScrolled * 0.7 + "px";
    parallaxcontent.style.backgroundPositionY = windowScrolled * 1.2 + "px";
});