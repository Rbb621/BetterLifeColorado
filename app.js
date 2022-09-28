'use strict';

//**********************************
//     Circle Images Specialties
//**********************************

 const arr = ["specialties/agoraphobia.jpg", "specialties/generalizedanxiety.jpg",
 "specialties/panicattacks.jpg", "specialties/panic_disorder.jpg", "specialties/COVID19.jpg",
"specialties/phobias.jpg", "specialties/social_anxiety.jpg"];
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


AOS.init({
  duration: 3000,
  once: true,
});
