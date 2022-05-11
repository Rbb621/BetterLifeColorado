'use strict';


//Hamburger Icon closing and reopening

// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');
//
// openMenu.addEventListener('click',show);
// closeMenu.addEventListener('click',close);
//
//
// function show(){
//   debugger;
//   mainMenu.style.display = 'flex';
//   mainMenu.style.width = '250px';
// }
//
// function close(){
//   mainMenu.style.left = '100%';
// }


// Dropdown menu shows up if you hover the word "Staff"


// $('.Staff').hover(function() {
//   $(".dropdown-menu.Staffdropdown").show(function() {
//   });
// });

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






//Fade In Effects//


// const faders = document.querySelectorAll('.fade-up');
//
// const appearOptions = {
//   threshold: 1,
//   rootMargin: "0px 0px -200px 0px"
// };
//
// const appearOnScroll = new IntersectionObserver
// (function(entries, appearOnScroll
// ) {
//   entries.forEach(entry => {
//
//   })
// },
// appearOptions);
//
// if (!entry.isIntersecting) {
//       return;
//     } else {
//     entry.target.classList.add('appear');
//     appearOnScroll.unobserve(entry.target);
//   });
// },
// appearOptions);
//
//
// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// })
