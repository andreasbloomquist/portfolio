$(function(){
  $('.projects').hover(function(){
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
  
  $('.scollToSkills').on('click', function(){
    $(window).scrollTo('#skills', 800);
  });

  $('.scollToProjects').on('click', function(){
    $(window).scrollTo('#projects', 800);
  });

  $('.scollToAbout').on('click', function(){
    $(window).scrollTo('#about', 800);
  });

  $('.scollToContact').on('click', function(){
    $(window).scrollTo('#contact', 800);
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

