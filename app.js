'use strict';

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


show_image = (index);

var index = 0;

function show_image(i){
  index += i;

  var images = document.getElementsByClassName
  ("image");

  var dots = document.getElementsByClassName
  ("dot");

  for(i = 0;i < images.length;i++)
  images[i].style.display = "none";

  for(i = 0;i < dots.length;i++)
  dots[i].className = dots[i].className.replace
  (" active", "");

  if(index > images.length - 1)
  index = 0;

  if(index < 0)
  index = images.length - 1;

  images[index].style.display = "block";
  dots[index].className += "  active";
}

//**********************************
//        Sticky Navbar
//**********************************


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//**********************************
//        Skeleton Loading
//**********************************

// const grid = document.querySelector('.grid')
// const cardTemplate = document.getElementById('cardTemplate')
// for (let i = 0; i < = 10)
//
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then

//**********************************
//        Dropdown
//**********************************



$('.Staff').click(function() {
  $(".dropdown-menu.Staffdropdown").toggle();})

$('.specialties-heading').hover(function() {
  $(".dropdown-menu.Specialtiesdropdown").show(function() {
  });
});

$('.specialties-heading').click(function() {
  $(".dropdown-menu.Specialtiesdropdown").hide(function() {
  });
});

//active page highlight

    $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;

        // passes on every "a" tag
        $(".topmenu a").each(function() {
            // checks if its the same on the address bar
            if (url == (this.href)) {
                $(this).closest("li").addClass("active");
                //for making parent of submenu active
               $(this).closest("li").parent().parent().addClass("active");
            }
        });
    });

//**********************************************
  //Staff Info - fadeUp and fadeLeft/fadeRight
//**********************************************


observer.observe(document.querySelector(.profiles))

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".profile")[0].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[1].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[2].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[3].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[4].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[5].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[6].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[7].classList.add("fadeInLeft")
      document.querySelectorAll(".profile")[8].classList.add("fadeInLeft")
    }
  })
})

observer.observe(document.querySelector(".profiles"))

AOS.init({
  duration: 3000,
  once: true,
});
