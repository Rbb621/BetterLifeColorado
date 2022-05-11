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


//Hamburger Menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.width = '250px';
}

function close(){
  mainMenu.style.left = '100%';
}




//Hamburger Icon closing and reopening


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
  mainMenu.style.display = 'flex';
  mainMenu.style.width = '250px';
}

function close(){
  mainMenu.style.left = '100%';
}


// Dropdown menu shows up if you hover the word "Staff"


$('.Staff').hover(function() {
  $(".dropdown-menu").show(function() {
  });
});

$('.Staff').click(function() {
  $(".dropdown-menu").hide(function() {
  });
});

$('.specialties-heading').hover(function() {
  $(".dropdown-menu").show(function() {
  });
});

$('.specialties-heading').click(function() {
  $(".dropdown-menu").hide(function() {
  });
});
