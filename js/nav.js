var document;// this fixes the errors
function navSlide() {
    var bigmac = document.querySelector(".burger");
    var noburger = document.querySelector(".nav-links");
    bigmac.addEventListener('click', function() {
      noburger.classList.toggle("nav-active");
      bigmac.classList.toggle("toggle");
    });
}
navSlide();
