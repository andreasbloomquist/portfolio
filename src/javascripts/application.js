$(function(){
  $('.projects').hover(function(){
        console.log('hovering');
        $(this).children('.text').removeClass('hiddenOverlay');
      }, function(){
        $(this).children('.text').addClass('hiddenOverlay');
      });

  $('.left-off-canvas-toggle').on('click', function(){
    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
      $('.icon').removeClass('fi-x')
      $('.icon').addClass('fi-list')
    } else {
      $(this).addClass("close");
      $('.icon').removeClass('fi-list')
      $('.icon').addClass('fi-x')

    };
  });
  $('#iconCarousel').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      } 
    ]
    });
  });

