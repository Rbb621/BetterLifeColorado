'use strict';

//**********************************
//     FAQ + and - Signs
//**********************************

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}


//**********************************
//     Circle Images Specialties
//**********************************

const arr = ["specialties/anxiety/agoraphobia.jpg", "specialties/anxiety/generalizedanxiety.jpg",
  "specialties/anxiety/panicattacks.jpg", "specialties/anxiety/panic_disorder.jpg", "specialties/anxiety/COVID19.jpg",
  "specialties/anxiety/phobias.jpg", "specialties/anxiety/social_anxiety.jpg", "specialties/anxiety/CBT.jpg", "specialties/anxiety/DBT.jpg", "specialties/anxiety/ACT.jpg"
];
const circles = document.getElementsByClassName("circle");

for (let i = 0; i < circles.length; i++) {
  circles[i].style.backgroundImage = `url(${arr[i]})`;
  circles[i].style.marginBottom = "20px";
  circles[i].style.marginTop = "30px";
}

//**********************************
//     Container
//**********************************

const box = document.getElementsByClassName("infobox")

for (let i = 0; i < box.length; i++) {
  box[i].style.backgroundColor = "white";
  box[i].style.boxShadow = "0px 0px 2px rgb(0 0 0 / 25%)";
  box[i].style.paddingBottom = "100px";
  box[i].style.marginBottom = "1.5em";
  box[i].style.marginTop = "1.5em";
}

const greenBox = document.getElementsByClassName("infobox_green")

for (let i = 0; i < greenBox.length; i++) {
  greenBox[i].style.backgroundColor = "var(--grey)";
  greenBox[i].style.color = "var(--white)";
  greenBox[i].style.padding = "4.0625em 50px";
  greenBox[i].style.maxWidth = "1170px";
  greenBox[i].style.fontFamily = "Poppins,sans-serif";
  greenBox[i].style.boxShadow = "0px 0px 2px rgb(0 0 0 / 25%)";
  greenBox[i].style.marginBottom = "1.5em";
  greenBox[i].style.maxWidth = "100%";
}


//**********************************
//     Thank you Email
//**********************************
const fullName = document.getElementsByClassName("fullName").value;

document.getElementsByClassName("thankYou").value = `Thank you for signup BetterLifeColorado ${fullName[0]}`;

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



$('.Staff').hover(function() {
  $(".dropdown-menu.Staffdropdown").toggle();
})

$('.specialties-heading').hover(function() {
  $(".dropdown-menu.Specialtiesdropdown").show(function() {});
});

$('.specialties-heading').click(function() {
  $(".dropdown-menu.Specialtiesdropdown").hide(function() {});
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


AOS.init({
  duration: 3000,
  once: true,
});
