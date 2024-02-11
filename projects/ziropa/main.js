var headline = document.querySelector(".headline");
var col = document.querySelector(".col");
var friends = document.querySelector(".friends");
var drinks = document.querySelector(".drink");
var fruits = document.querySelector(".fruits");
var data = document.querySelector(".data");
var menubtn = document.querySelectorAll(".menubtn");
var quoteLeft = document.querySelector(".q-left")
var quoteMid = document.querySelector(".q-mid")
var quoteRight = document.querySelector(".q-right")
var video = document.querySelector(".interview-video")

menubtn.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        menuItem.style.background = "#A1D770";
        if (!video.paused) {
            video.pause();
        }
    })
});

function buttonActive(elem) {
    var a = menubtn;
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('scaleButton')
        if(i == a.length -1) {
            a[i].style.background = "white";
        }
    }
    elem.classList.add('scaleButton');
}

function resetMenu() {
    a = menubtn
    for (var i = 0; i < a.length; i++) {
        a[i].style.background = "white";
    }
};

var slideInLeft = {
    distance: '100%',
    origin: 'left',
    opacity: 0,
    duration: 1200,
    easing: 'cubic-bezier(0,0,.43,1.1)',
};

var slideInRight = {
    distance: '150%',
    origin: 'right',
    opacity: 0,
};

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration: 1300
}

var imgSlideRight = {
    distance: '200px',
    origin: 'right',
}

var imgSlideLeft = {
    distance: '200px',
    origin: 'left',
}

var imgSlideBottom = {
    distance: '200px',
    origin: 'bottom',
}

var quoteSlideLeft = {
    distance: '200px',
    origin: 'left',
    opacity: 0,
    duration: 1600,
}

var quoteSlideRight = {
    distance: '200px',
    origin: 'right',
    opacity: 0,
    duration: 2000,
}

var quoteSlideMid = {
    distance: '200px',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
}

ScrollReveal().reveal('.headline', slideInLeft);
ScrollReveal().reveal('.col', slideInRight);
ScrollReveal().reveal('.data', slideUp);
ScrollReveal().reveal('.friends', imgSlideLeft);
ScrollReveal().reveal('.drink', imgSlideRight);
ScrollReveal().reveal('.fruits', imgSlideBottom);
ScrollReveal().reveal('.q-right', quoteSlideRight);
ScrollReveal().reveal('.q-mid', quoteSlideMid);
ScrollReveal().reveal('.q-left', quoteSlideLeft);

function imgSlider(imgPath) {
    document.getElementById("productImg").src = imgPath;
}

new PureCounter({
    selector: ".purple-counter",
    end: 21,
});

new PureCounter({
    selector: ".orange-counter",
    end: 24,
});

new PureCounter({
    selector: ".blue-counter",
    end: 67,
});