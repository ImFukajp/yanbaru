$(function () {


    // $(".slide-items").slick();









































































































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

<<<<<<< HEAD

=======
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
      $('.slide-items').animate({
        
      },2000)
    // $(".slide-items").slick();
>>>>>>> e670606f1ea7dfedba73da4e610676452c4ed4c6


})