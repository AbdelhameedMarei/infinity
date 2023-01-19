$(function(){
    "use strict";

    // Loader
    $("#loader").delay(800).fadeOut("slow");

    // Dropdown Menu
    let winWidth = $(window).outerWidth();
    if( winWidth <= 992 ){
        $('.pages').on("click", function(){
            $('.pages-dropdown').slideToggle();
        })
    }

    // Active Link 
    $('.navbar-nav .nav-item .nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });



})//End jQuery;