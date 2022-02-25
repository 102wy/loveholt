window.onload=function(){
    var sw_link = new Swiper('.sw_link',{
        slidesPerView:9,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
    });
    
    // 메뉴 관련 코드
    $('.depth1 > li').mouseenter(function(){
        $(this).find('.depth2').show();
    });
    $('.depth1 > li').mouseleave(function(){
        $(this).find('.depth2').hide();
    });
    
    // go-top 관련 코드
    
    // 위로가기 관련
    var go_top = $('.go-top');
    
    go_top.click(function(e) {
        // href 막기
        e.preventDefault();
        $('html').stop().animate({
            scrollTop: 0
        },500);
    });
    
    // 스크롤 시 나타나기
    $(window).scroll(function(){
        var scY = $(window).scrollTop();
        if (scY > 5 ) {
            $('.go-top').addClass('go-top-focus');
        } else {
            $('.go-top').removeClass('go-top-focus');
        }
    });
    
//    $(window).on("scroll",function(){
//        if ($(window).scrollTop() > 100) {
//            $('.go-top').addClass('go-top-focus');
//        } else {
//            $('.go-top').removeClass('go-top-focus');
//        }
//    });
    
    // 모달창 닫기
    $('.modal-close').click(function(){
        $('.modal').hide();
    });
}
