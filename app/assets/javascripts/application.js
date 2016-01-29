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

  $('#circle2').hover(
    function(){
      $('#circle2').attr('r', '70').attr('stroke-dasharray', '7.5, 4.7');
      $('#red-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line').css('stroke', 'red');
      $('#blue-line2').css('stroke', 'red');
      $('body').css('background-color', getRandomColor());
     }, function(){
      $('#circle2').attr('r', '49');
      $('#red-line').css('stroke', 'red');
      $('#blue-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line2').css('stroke', 'rgba(51,195,240,1)');
      $('body').css('background-color', 'white');
    }
  );

  $('#circle3').hover(
    function(){
      $('#red-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line').css('stroke', 'red');
      $('#blue-line2').css('stroke', 'red');
      $('body').css('background-color', getRandomColor());
     }, function(){
      $('#red-line').css('stroke', 'red');
      $('#blue-line').css('stroke', 'rgba(51,195,240,1)');
      $('#blue-line2').css('stroke', 'rgba(51,195,240,1)');
      $('body').css('background-color', 'white');
    }
  );

  $('#circle').hover(
    function(){
      $(this).attr('stroke', 'rgba(51,195,240,1)')
      $(this).attr('r', '150');
      $('#circle2').attr('stroke-dasharray', '7.5, 4.7');
      $('body').css('background-color', getRandomColor());
      $('#circle2').attr('stroke', 'red')
      $('#circle3').attr('stroke', 'rgba(51,195,240,1)')
     }, function(){
      $('#circle2').attr('stroke', 'rgba(51,195,240,1)')
      $('#circle3').attr('stroke', 'red')
      $(this).attr('stroke', 'red')
      $(this).attr('r', '199');
      $('body').css('background-color', 'white');
    }
  );

});







