$(function(){
    var headerTop = $('header').offset().top; // 50

    $(window).scroll(function(){
        $('header h1').text($(window).scrollTop());
        //h1에게 스크롤바 수직 위치를 가져옴

        if(headerTop < $(window).scrollTop()) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }

    });
});