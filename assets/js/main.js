$( "c h2" ).addClass( "mw7" );

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// Form integration
var formx = FormX.set()
formx.trackProject('Outline Studio_74332b42-ccfc-4d3e-8803-779c72f59432')
formx.trackForm('Outline Contact Form_fcb6eae8-2dee-4529-b6c5-70fa364363e4', 'contact_form')
formx.start()


  /* Material Inputs
  -------------------------------------------------------*/
  (function() {
    var $optinInput = $('.contact__input');
    $optinInput.on('blur', function() {
      if ( $(this).val() ) {
        $(this).parent('.contact__form-group').addClass('contact__form-group--active');
      } else {
        $(this).parent('.contact__form-group').removeClass('contact__form-group--active');
      }
    });
  })();