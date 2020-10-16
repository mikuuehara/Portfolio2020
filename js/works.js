$(function () {
    var jump = $('#jump_top');
    // ボタン非表示
    jump.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            jump.fadeIn();
        } else {
            jump.fadeOut();
        }
    });
    jump.click(function () {
        console.log("aaa");
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});