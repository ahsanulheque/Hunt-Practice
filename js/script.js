$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
   arrows: true,
   prevArrow:'<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
   nextArrow:'<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
  });
  $('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow:3,
    slidesToScroll: 1,
   arrows:true,
    vertical:true,
    prevArrow:'<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-down next" aria-hidden="true"></i>',
    centerMode:true,
    centerPadding:0,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.image-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow:3,
    slidesToScroll: 1,
   arrows:true,
    vertical:true,
    prevArrow:'<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-down next" aria-hidden="true"></i>',
    centerMode:true,
    centerPadding:0,
    asNavFor: '.text-slider',
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.text-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow:1,
    slidesToScroll: 1,
   arrows:false,
    vertical:true,
    asNavFor: '.image-slider',
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.counter').counterUp({
    delay: 20,
  });

  $('.price-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
   arrows: false,
   autoplay: true,
   centerMode: true,
   centerPadding:0,
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
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.team-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow:4,
    slidesToScroll: 1,
   arrows:false,
    autoplay: true,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });