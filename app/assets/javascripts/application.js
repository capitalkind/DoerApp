// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
console.log('loaded');

function backgroundColorChange(){
  $('#circle').toggleClass('.bodyChange');
}


$(document).ready(function(){

$('#circle').click(function(){
  backgroundColorChange();
});

// $('#circle').on('mouseover', function(){
//   $('body').fadeOut(900, function(){
//     $(this).css('background-color', 'whitesmoke').fadeIn(900);
//   });
// });

// $('.line1').on('mouseover', function(){
//   $('body').fadeOut(900, function(){
//     $(this).css('background-color', 'white').fadeIn(900);
//   });
// });

// $('.line4').on('mouseover', function(){
//   $('.line1').fadeOut(900, function(){
//     $('.line1').css('stroke', 'rgb(51,195,240)').fadeIn(900);
//   $('p').fadeOut(900, function(){
//     $(this).css('color', 'rgb(51,195,240)').fadeIn(900);
//     });
//   });
// });


});







