//슬릭구현

$(document).ready(function(){
    alert('모바일디자인용으로 모바일에서 확인하세요.'),
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