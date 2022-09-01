$(function(){
    var headerTop = $('header').offset().top; //0
    $(window).scroll(function(){
        //스크롤바 수직 위치 scrollTop()
        //헤더의 위치값보다 스크롤 수직 바의 높이값$(window).scrollTop()
        //이 더 클 때 클래스명이 붙고 그렇지 않을 때 클래스명이 삭제됨
        if(headerTop < $(window).scrollTop()) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
});