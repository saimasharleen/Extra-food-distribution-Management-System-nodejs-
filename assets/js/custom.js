$(function(){
   
    // banner slider
    
    $('.slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  speed:2000,
  autoplaySpeed: 3000,
});
  // clints slider 
   
$('.slide_iteam').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  vertical:true,
    speed:1500,
  autoplaySpeed: 2500,
});
    
$('.slide_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
//  vertical:true,
  speed:1500,
  dots:true,
  autoplaySpeed: 2500,
});   
    
    
  //paterns parts
    
   $('.paterns_main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
});
    
    //smots scroll
    var html_body = $('html, body');
    $('.collapse a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
 
   //back to top 
   
  var back2top = $(".back-to-top");
var html_body = $('html, body');
back2top.click(function(){
    html_body.animate({scrollTop:0},1500);
});

$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling > 200){
    back2top.fadeIn(500);
}
else{
    back2top.fadeOut(500);
}
if(scrolling > 200){
    $(".head").addClass("bg");
}
else{
    $(".head").removeClass("bg");
}    
});  
   //veno box 
   $('.venobox').venobox();  
    
   // external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
   
    
     //preloder
    $(window).on('load', function(){
        $('.preloder').delay(500).fadeOut(500)
    }); 
      
    
    
});







