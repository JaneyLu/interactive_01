$(document).ready(function(){
  $('ul').on('click', 'li:not(.active)', function(){
  	$('.active').removeClass('active');
    $(this).addClass('active');
  }).on('click',function(){
    $(this).toggleClass('open');
  })
});
