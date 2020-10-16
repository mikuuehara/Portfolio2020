$(function () {

    $(window).on('load', function () {
        setTimeout(function () {

            // ボタンのデザイン
            $('.hirameki').addClass('active')
            $('.hirameki').animate({
                'opacity': 1
            });

            setTimeout(function () {
                $('.hirameki').removeClass('active');
                $('.katachi').addClass('active')
                $('.katachi').animate({
                    'opacity': 1
                });

                setTimeout(function () {
                    if ($(window).scrollTop() <= 0) {
                        $('.scroll').fadeIn(1000);
                    }
                }, 1000);

            }, 1000)

        }, 500);

    });


    // 画面の高さ
    let win_h = $(window).outerHeight();
    // ヘッダーの高さ
    $('.header').css({
        height: win_h
    })

    $(window).scroll(function () {
        // スクロール量
        var scroll = $(window).scrollTop();
        // 新しいヘッダーの高さ = 画面の高さ-スクロール量
        var new_header_h = win_h - scroll;

        // スクロールされたらアナウンスを消す
        $('.scroll').fadeOut(300);

        // 高さが画面の20%になったら高さを固定
        if (new_header_h <= (win_h * 0.20)) {
            $('.header').css({
                height: (win_h * 0.20),
                position: 'fixed',
                top: 0
            });
        } else {
            $('.header').css({
                height: new_header_h,
            });
        }

    });




    // メニューボタン開閉
    $('.btn-trigger').on('click', function () {
        $(this).toggleClass('active');

        if ($('.navigation').hasClass('open')) {
            $('.navigation').removeClass('open');
            setTimeout(function () {
                $('.navigation').css('z-index', -1);
            }, 500);
        } else {
            $('.navigation').css('z-index', 1);
            $('.navigation').addClass('open');
        }
    });

    $('.mask').on('click', function () {
        $('.navigation').removeClass('open');
        $('.btn-trigger').toggleClass('active');
        setTimeout(function () {
            $('.navigation').css('z-index', -1);
        }, 500);
    });






    $('.katachi').on('click', function () {
        // カードの反転
        $('.front1').addClass('front');
        $('.front1').removeClass('back');

        $('.back1').addClass('back');
        $('.back1').removeClass('front');

        // ボタンのデザイン
        $(this).addClass('active');
        $('.hirameki').removeClass('active');
    })

    $('.hirameki').on('click', function () {
        // カードの反転
        $('.front1').removeClass('front');
        $('.front1').addClass('back');

        $('.back1').removeClass('back');
        $('.back1').addClass('front');

        // ボタンのデザイン
        $(this).addClass('active');
        $('.katachi').removeClass('active');
    })
});