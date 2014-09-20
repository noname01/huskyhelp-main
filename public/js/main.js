$(function(){
   $(window).scroll(function(){
       if($(window).scrollTop() > 70) $(".navbar, .nav-content").addClass("invert");
       else $(".navbar, .nav-content").removeClass("invert");
   })
});