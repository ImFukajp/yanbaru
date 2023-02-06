
$(function(){
    $('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
        }else{
        $(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
        }
        });


    $('button').on('click',function(){
        $('.popup').addClass('show').fadeIn();
    });
      
    $('#close').on('click',function(){
        $('.popup').fadeOut();
    });

    $('.slide-items').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });








































































































    // やすはのぞーん
    // お役立ちサイト
    $(".site-box img").hover(function () {
        // console.log($(".site-circle"));
        $(this).toggleClass("on");
        
    })

    $(".site-box.d").hover(function () {
        $(".site-box.d").toggleClass("deco")
    })
    $(".site-box.k").hover(function () {
        $(".site-box.k").toggleClass("deco")
    })
    $(".site-box.p").hover(function () {
        $(".site-box.p").toggleClass("deco")
    })

    // topへスクロール
    $(".go-to-top").on("click",function () {
        $("body,html").animate({scrollTop:0},3000)
        $("#rocket-color")
    })

    $(".go-to-top").hover(function () {
        $(".go-to-top").toggleClass("on")
    })

    $(".rocket").offset().top//3100
    console.log($(window).scrollTop());

    // お問い合わせボタン
    $(".contact-btn").hover(function () {
        $(this).toggleClass("on")
    })
    $(".contact-btn").on("click",function () {
        $(".contact-container").addClass('on')
    })
    $(".close-btn").on("click",function () {
        $(".contact-container").removeClass('on')
    })




})