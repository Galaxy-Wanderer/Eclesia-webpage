var document;// this fixes the errors
function navSlide() {
    var bigmac = document.querySelector(".burger");
    var noburger = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");
    bigmac.addEventListener('click', function() {
      noburger.classList.toggle("nav-active");
      bigmac.classList.toggle("toggle");
    });
}
navSlide();
var p = document.createElement("p");
var photos = document.querySelectorAll('.images img');
var pos = 0;
function animate() {
  for(var i=0; i < photos.length; i++) {
    var picture = photos[i];
    picture.style.position = "relative";
    pos = picture.style.right.split("px");
  }
  pos++;

};
window.setInterval(animate, 10);