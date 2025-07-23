$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {

  $("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
  });
  
  $(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
  });
  $('.partners_slider').owlCarousel({
  items:4,
  autoplay:true,
  rtl:true,
  loop: true,
  margin:18,
  nav:false,
     dots:true,
  responsive:{
    0:{
      items:1
    },
    425:{
      items:2
    },
    480:{
      items:2
    },
    768:{
      items:2
    },
    991:{
      items:3
    },
    1199:{
      items:4
    },
    1200:{
      items:4
    }
  }
});
// var $mediaElements = $('.pack');
// $('.tab-ck').click(function (e) {
//     e.preventDefault();
//     var filterVal = $(this).data('filter');
//     $(".tab-ck").not(this).removeClass("active");
//     $(this).toggleClass("active");
//     $mediaElements.removeClass("active").filter('.' + filterVal).addClass("active");

// });


var $mediaElements = $('.course');
$('.tabs-sec .tab-a').click(function (e) {
    e.preventDefault();
    var filterVal = $(this).data('filter');
    $(".tabs-sec .tab-a").not(this).removeClass("active");
    $(this).toggleClass("active");
    $mediaElements.removeClass("active").filter('.' + filterVal).addClass("active");
    // if (filterVal === 'one') {
    //   $mediaElements.show();
    // } else {
        
    // }
});


//   $('.slider-head').owlCarousel({
//   autoplay: false,
//   rtl: document.dir == 'rtl' ? true : false,
//   loop:false,
//   dots:false,
//   nav: true,
//   items: 1,
//   navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
  
// });
 
    

});
