// Hiding Pre-Content
function exampleFunction() {
    if(document.body.hasAttribute("class", "bodys")) 
    { document.body.setAttribute("class", "bluras"), document.getElementById("content").setAttribute("class", "show"); }
    else { document.body.setAttribute("class", "bluras"); }
};

function block_none(){
    document.getElementById('testas2').setAttribute('class', 'hide');
};

//Timer Script
function timer(){
  var time=2;
  var x = setInterval(function(){
      document.getElementById("timer").innerHTML= "in "+time+" Seconds";
      time=time-1;

      if(time < 1){
          document.getElementById("timer").innerHTML= "in 1 Second";
      }
      if(time < 0){
        clearInterval(x);
        window.location.replace('http://daynys.com/home.html');
      }
  },1000);
}

// Portfolio content JavaScript

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2500); //Change for 2.5 seconds
}
