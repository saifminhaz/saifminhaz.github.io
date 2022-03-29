$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Contact Form
window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thank you, for your message! &#128151";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
});
  
  // helper function for sending an AJAX request
  
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
    success(xhr.response, xhr.responseType);
    } else {
    error(xhr.status, xhr.response, xhr.responseType);
    }
    };
    xhr.send(data);
}

// Modal
// Get DOM Elements
const modals = document.querySelectorAll(".modal");
const modalBtns = document.querySelectorAll(".button");
const closeBtns = document.querySelectorAll(".close");

// Events
modalBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => openModal(index))
);
closeBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => closeModal(index))
);
// for closing when you click outside
modals.forEach((modal, index) =>
  modal.addEventListener("click", (e) => {
   if(e.target === e.currentTarget){
     closeModal(index);
   }
})
);

// Open
function openModal(index) {
  modals[index].style.display = "block";
}

// Close
function closeModal(index) {
  modals[index].style.display = "none";
}

// End Modal

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
/* Pagination      
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
*/
    });

    //  Cookies Start

window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#dc143c"
    },
    "button": {
      "background": "#FFFF00"
    }
  },
  "showLink": false,
  "theme": "edgeless",
  "content": {
    "message": "My website uses cookies to ensure you get the best experience of my website.",
    "dismiss": "Got it!"
  }
});

//  Cookies End
