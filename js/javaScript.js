


/*
$(document).ready(function () {
   alert('Deu certo');
});
*//*
$('.sessao2 .container h2').css('color', '#fff');
$(document).ready(function () {


   $(' #s1').click(function () {
      $(".sobre-autor,.sobre-autor2,.sobre-autor3").fadeIn();
      $('.sobre-autor').show();
      $('.sobre-autor2').hide();
      $('.sobre-autor3').hide();
      $('#s1').css('background-color', 'rgb(255, 59, 59)');
      $('#s2').css('background-color', 'rgb(196, 196, 196)');
      $('#s3').css('background-color', 'rgb(196, 196, 196)');
      console.log("selecionei o spaw 1");


   });


   $('.slider-balls #s2').click(function () {

      $(".sobre-autor,.sobre-autor2,.sobre-autor3").fadeIn();
      $('.sobre-autor').hide();
      $('.sobre-autor2').show();
      $('.sobre-autor3').hide();
      $('#s1').css('background-color', 'rgb(196, 196, 196)');
      $('#s2').css('background-color', 'rgb(255, 59, 59)');
      $('#s3').css('background-color', 'rgb(196, 196, 196)');
      console.log("selecionei o spaw 2");
   });

   $('.slider-balls #s3').click(function () {
      $(".sobre-autor,.sobre-autor2,.sobre-autor3").fadeIn();
      $('.sobre-autor').hide();
      $('.sobre-autor2').hide();
      $('.sobre-autor3').show();
      $('#s1').css('background-color', 'rgb(196, 196, 196)');
      $('#s2').css('background-color', 'rgb(196, 196, 196)');
      $('#s3').css('background-color', 'rgb(255, 59, 59)');
      console.log("selecionei o spaw 3");
   });

});
*/
var $target = $('.celular'), animationCalss = 'anime-start';

function animeScroll() {
   var documentTop = $(document).scrollTop();
  
   
   $target.each(function () {
      var itemTop = $(this).offset(top);
     


      if(documentTop > itemTop){
         $(this).addClass(animationCalss);

      }else{
         $(this).removeClass(animationCalss);
      }
   })
   




}

animeScroll();


/*$('#logo1').(function () {
   $('#logo1').css('background-color', '#000').css('color', '#f2df00')
});*/
/*
$(' #s1').click(function () {
   $(document).ready(function () {
      alert('Deu certo S1');
      });
   $('.sobre-autor2').css('display', 'none');
   $('.sobre-autor3').css('display', 'none');
   $('#s1').css('background-color', 'rgb(255, 59, 59)');
   $('#s2').css('background-color', 'rgb(196, 196, 196)');
   $('#s3').css('background-color', 'rgb(196, 196, 196)');


});


$('.slider-balls #s2').hover(function () {
   $('.sobre-autor').css('display', 'none');
   $('.sobre-autor2').css('display', 'block');
   $('.sobre-autor3').css('display', 'none');
   $('#s1').css('background-color', 'rgb(196, 196, 196)');
   $('#s2').css('background-color', 'rgb(255, 59, 59)');
   $('#s3').css('background-color', 'rgb(196, 196, 196)');

});*/