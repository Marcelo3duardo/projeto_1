$(function(){
    $('.scroll-wraper').slick({
        centerMode:false,
        slidesToShow:1,
        infinite:true,
        arrows:false
    });
})



/*var delay = 1000;
var curIndex = 0; var amt;

$(function () {
    initSlider();
    autoPLay();

    function initSlider() {
        amt = $('.autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxsingle = 100 / amt;
        $('.autor').css('width', sizeBoxsingle + '%');
        $('.scroll-wraper').css('width', sizeContainer + '%')

        for (var i = 0; i < amt; i++) {
            if (i == 0)
                $('.slider-balls').append('<span style="background-color:rgb(255, 59, 59)"></span>');
            else
                $('.slider-balls').append('<span ></span>');
        }
    }

    function autoPLay() {
        setInterval(function () {



            if (curIndex == amt)//amt
                goToSlider(curIndex);

            curIndex++;
            console.log(curIndex + ' autoplay');
        }, delay)
    }

    function goToSlider(curIndex) {
        console.log('go to slider 1');
        var offSet = $('.autor').eq(curIndex);
        $(offSet).css('background-color','rgb(250,200,0)');
        $(offSet).css('color','rgb(250,20,220)');
        console.log("Left:" + curIndex + offSet);
  
        console.log('go to slider 2');
        $('.scroll-slide').animate({ 'scrollLeft': offSet + 'px' });


    }
})
//min 10:08

*/
