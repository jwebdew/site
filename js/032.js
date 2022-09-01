$(function(){
    $('.tab_menu li').click(function(){
        var moveleft = $(this).position().left;
        console.log(moveleft);
        //클릭된 요소(this)와 부모와의 왼쪽값 가져오기
        // $('.bar').css('left', moveleft);

        //ui 사용은 animate 사용
        $('.bar').stop().animate({left: moveleft}, 1500, 'easeOutBounce');

        // $('.bar').text(moveleft);
    });
});