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

$(document).ready(function(){

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $('#circle').hover(
    function(){
      $(this).attr('stroke', 'rgba(51,195,240,1)');
      $(this).attr('r', '150');
      // $('#circle2').attr('stroke-dasharray', '7.5, 4.7');
      $('body').css('background-color', getRandomColor());
      $('#circle2').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle3').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle4').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle5').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle6').attr('stroke', 'rgba(51,195,240,1)');
      $('#content-div').css('opacity', '.3');
     }, function(){
      $(this).attr('stroke', 'rgba(255,0,0,1)');
      $(this).attr('r', '199');
      $('#circle2').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle3').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle4').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle5').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle6').attr('stroke', 'rgba(255,0,0,1)');
      $('body').css('background-color', 'white');
      $('#content-div').css('opacity', '1');
    }
  );

  $('#circle2').hover(
    function(){
      $(this).attr('r', '70').attr('stroke-dasharray', '7.5, 7.1');
      $('#red-line').css('stroke', 'rgba(51,195,240,1)');
      $('#red-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line3').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line4').css('stroke', 'rgba(255,0,0,1)');
      $('body').css('background-color', getRandomColor());
      $('#content-div').css('opacity', '.3');
     }, function(){
      $(this).attr('r', '49');
      $('#red-line').css('stroke', 'rgba(255,0,0,1)');
      $('#red-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line3').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line4').css('stroke', 'rgba(51,195,240,1)');
      $('body').css('background-color', 'white');
      $('#content-div').css('opacity', '1');
    }
  );

  $('#circle3').hover(
    function(){
      $(this).attr('r', '150').attr('stroke-dasharray', '7, 5.9');
      $(this).css('stroke', 'rgba(51,195,240,1)');
      $('#red-line').css('stroke', 'rgba(51,195,240,1)');
      $('#red-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line3').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line4').css('stroke', 'rgba(255,0,0,1)');
      $('body').css('background-color', getRandomColor());
      $('#content-div').css('opacity', '.3');
     }, function(){
       $(this).attr('r', '29');
      $(this).css('stroke', 'rgba(255,0,0,1)');
      $('#red-line').css('stroke', 'rgba(255,0,0,1)');
      $('#red-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line3').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line4').css('stroke', 'rgba(51,195,240,1)');
      $('body').css('background-color', 'white');
      $('#content-div').css('opacity', '1');
    }
  );

    $('#circle4').hover(
    function(){
      $(this).attr('r', '250').attr('stroke-dasharray', '7, 4.8');
      $(this).css('stroke', 'rgba(51,195,240,1)');
      $('#red-line').css('stroke', 'rgba(51,195,240,1)');
      $('#red-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line3').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line4').css('stroke', 'rgba(255,0,0,1)');
      $('#circle5').attr('stroke', 'rgba(255,0,0,1)');
      $('body').css('background-color', getRandomColor());
      $('#content-div').css('opacity', '.3');
     }, function(){
      $(this).attr('r', '79');
      $(this).css('stroke', 'rgba(255,0,0,1)');
      $('#red-line').css('stroke', 'rgba(255,0,0,1)');
      $('#red-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line3').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line4').css('stroke', 'rgba(51,195,240,1)');
      $('#circle5').attr('stroke', 'rgba(51,195,240,1)');
      $('body').css('background-color', 'white');
      $('#content-div').css('opacity', '1');
    }
  );

 $('#circle5').hover(
    function(){
      $(this).attr('r', '280').attr('stroke-dasharray', '8, 7.7');
      $('#red-line').css('stroke', 'rgba(51,195,240,1)');
      $('#red-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line3').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line4').css('stroke', 'rgba(255,0,0,1)');
      $('#circle').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle2').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle3').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle4').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle6').attr('stroke', 'rgba(51,195,240,1)');
      $('body').css('background-color', getRandomColor());
      $('#content-div').css('opacity', '.3');
     }, function(){
      $(this).attr('r', '130');
      $('#red-line').css('stroke', 'rgba(255,0,0,1)');
      $('#red-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line3').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line4').css('stroke', 'rgba(51,195,240,1)');
      $('#circle').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle2').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle3').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle4').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle6').attr('stroke', 'rgba(255,0,0,1)');
      $('body').css('background-color', 'white');
      $('#content-div').css('opacity', '1');
    }
  );

 $('#circle6').hover(
    function(){
      $(this).attr('r', '180').attr('stroke-dasharray', '8, 6.5');
      $(this).attr('stroke', 'rgba(51,195,240,1)');
      $('#red-line').css('stroke', 'rgba(51,195,240,1)');
      $('#red-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line3').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line4').css('stroke', 'rgba(255,0,0,1)');
      $('#circle').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle2').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle3').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle4').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle5').attr('stroke', 'rgba(255,0,0,1)');
      $('body').css('background-color', getRandomColor());
      $('#content-div').css('opacity', '.3');
     }, function(){
      $(this).attr('r', '104');
      $(this).attr('stroke', 'rgba(255,0,0,1)');
      $('#red-line').css('stroke', 'rgba(255,0,0,1)');
      $('#red-line2').css('stroke', 'rgba(255,0,0,1)');
      $('#blue-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line2').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line3').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line4').css('stroke', 'rgba(51,195,240,1)');
      $('#circle').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle2').attr('stroke', 'rgba(51,195,240,1)');
      $('#circle3').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle4').attr('stroke', 'rgba(255,0,0,1)');
      $('#circle5').attr('stroke', 'rgba(51,195,240,1)');
      $('body').css('background-color', 'white');
      $('#content-div').css('opacity', '1');
    }
  );

});







