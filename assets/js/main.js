$(document).ready(function () {
  // navbar
  var prevScrollpos = $(window).scrollTop();
  $(window).on("scroll", function () {
    var currentScrollPos = $(window).scrollTop();
    if (prevScrollpos > currentScrollPos) {
      $("#header").css("top", "0");
    } else {
      $("#header").css("top", "-100vh");
    }
    prevScrollpos = currentScrollPos;
  });

  // menu button
  $(".navbar-toggler").on("click", function () {
    $("i").toggleClass("bi-list bi-x-lg");
  });

  // navlink active
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });

  // pure counter
  new PureCounter();

  // storySwiper
  var swiper = new Swiper(".storySwiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
    },
  });

  // scholrshipSwiper
  var swiper = new Swiper(".scholrshipSwiper", {
    direction: 'vertical',
    slidesPerView: 5,
    centeredSlides: true,
    loop: true,
    initialSlide: 2,
    autoplay: {
      delay: 2000, 
      disableOnInteraction: false,
    },
  });

  // featured-newsSwiper
  var swiper = new Swiper(".featured-newsSwiper", {
    loop:true,
    initialSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.6,
        spaceBetween: 20,
      },
    },
  });


});

