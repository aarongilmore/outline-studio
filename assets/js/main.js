$( "c h2" ).addClass( "mw7" );

// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('nav').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('nav').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('nav').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }

$(function() {
    if ($(".js-date-today").length) {
        const e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            a = new Date,
            n = t[a.getDay()] + ", " + (a.getDate() < 10 ? "0" : "") + a.getDate() + " " + e[a.getMonth()] + " " + a.getFullYear();
        $(".js-date-today").text(n)
    }
});

// We listen to the resize event
var root = document.documentElement;
    if (
        window.innerWidth > window.innerHeight ||
        Math.abs(this.lastHeight - window.innerHeight) > 100
    ) {
        root.style.setProperty(`--window-vh`, window.innerHeight + 'px');
        this.lastHeight = window.innerHeight;
    }