$(function () {


    // $(".slide-items").slick();









































































































    // やすはのぞーん
    // お役立ちサイト
    $(".site-circle").on("mouseover",function () {
        console.log($(".site-circle"));
        $(this).addClass("on");
    })
    $(".site-circle").on("mouseleave",function () {
        console.log($(".site-circle"));
        $(this).removeClass("on");
    })

    // topへスクロール
    $(".go-to-top").on("click",function () {
        $("body,html").animate({scrollTop:0},500)
    })

    // お問い合わせボタン
    $(".info-btn").hover(function () {
        $(this).toggleClass("on")
    })
    $(".info-btn").on("click",function () {
        $(".info-container").addClass('on')
    })
    $(".close-btn").on("click",function () {
        $(".info-container").removeClass('on')
    })




})