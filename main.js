var btn = document.getElementById("btn");
var light = document.getElementById("light");
var simform = document.getElementById("simform");
function toggleBtn() {
  btn.classList.toggle("active");
  console.log("hello");
  light.classList.toggle("on");
  simform.classList.toggle("onn");
}

let slider = 1;
dispSlide(slider);

function dispSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // console.log(slides.length);
  if (n > slides.length) {
    slider = 1;
  }
  if (n < 1) {
    slider = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slider - 1].style.display = "block";
}

function plusSlides(n) {
  dispSlide((slider += n));
}

function scrollWindow() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.getElementById("btn").addEventListener("click", scrollWindow);

// document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
//     anchor.addEventListener("click", function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoview({
//             behavior : "smooth";
//         })
//     })
// })
function scrollHome() {
  location.href = "#home";
}

function scrollImages() {
  location.href = "#imgslider";
}

function scrollService() {
  location.href = "#services";
}

function scrollAbout() {
  location.href = "#about-us";
}
