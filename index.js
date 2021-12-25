$(window).on("scroll", function() {
    if($(window).scrollTop() > 560) {
        $(".header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
    }
});

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 560) {
        $(".olio").addClass("active_olio");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".olio").removeClass("active_olio");
    }
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 560) {
        $(".Home,.about,.service,.skill,.contact_me").addClass("active_olio");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".Home,.about,.service,.skill,.contact_me").removeClass("active_olio");
    }
});

$(document).ready(function(){
    $(window).on("scroll", function() {
if($(window).scrollTop() > 460) {
$(".info_pic").addClass("animate__animated animate__fadeInLeft");
}
});
});
$(document).ready(function(){
    $(window).on("scroll", function() {
if($(window).scrollTop() > 460) {
$(".info_about").addClass("animate__animated animate__fadeInRight");
}
});

$(window).on("scroll", function() {
if($(window).scrollTop() > 770) {
$(".service1").addClass("animate__animated animate__fadeInLeft");
}
});

$(window).on("scroll", function() {
if($(window).scrollTop() > 770) {
$(".service3").addClass("animate__animated animate__fadeInRight");
}
});

$(window).on("scroll", function() {
if($(window).scrollTop() > 770) {
$(".service2").addClass("animate__animated animate__zoomInDown");
} 
});

$(window).on("scroll", function() {
if($(window).scrollTop() > 2000) {
$(".contact_form").addClass("animate__animated animate__fadeInRight");
} 
});

$(window).on("scroll", function() {
if($(window).scrollTop() > 2000) {
$(".map").addClass("animate__animated animate__fadeInLeft");
}
});
});

$(document).ready(function (){
    $(".Home").click(function (){
        $('html, body').animate({
            scrollTop: $(".body").offset().top
        }, 2000);
    });

    $(".about").click(function (){
        $('html, body').animate({
            scrollTop: $(".info").offset().top
        }, 2000);
    });

    $(".service").click(function (){
        $('html, body').animate({
            scrollTop: $(".services").offset().top
        }, 2000);
    });

    $(".skill").click(function (){
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 2000);
    });
    $(".contact_me").click(function (){
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 2000);
    });
    

    
  
    

  });
