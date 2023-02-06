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

})