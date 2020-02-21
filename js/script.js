$(document).ready(function(){
   
   $('.animate-1').animate3d({});

   var data = $('.active').children('a').data('option');
   $('.animate-2').animate3d(data);
   
$('.nav-pills li').click(function(){
   
   $('.active').removeClass('active');
   
   $(this).addClass('active');
   
   var data = $('.active').children('a').data('option');
   $('.animate-2').animate3d(data);
})
   
   
});