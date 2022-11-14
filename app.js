'use strict';

//**********************************
//     FAQ + and - Signs
//**********************************

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
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
"specialties/anxiety/phobias.jpg", "specialties/anxiety/social_anxiety.jpg"];
 const circles = document.getElementsByClassName("circle");

 for(let i = 0; i < circles.length; i++){
   circles[i].style.backgroundImage = `url(${arr[i]})`;
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


AOS.init({
  duration: 3000,
  once: true,
});
