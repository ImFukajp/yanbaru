$(function(){
    
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

    // $(".slide-items").slick();


})