//슬릭구현

$(document).ready(function(){
 $('.con01Bg').slick({
     slidesToShow:1,
     slidesToScroll:1,
     dots:false,  //네모난 버튼 없애기
     prevArrow:$('.prevBtn'),
     nextArrow:$('.nextBtn'),
 })
    
    //wow
    new WOW().init();
})