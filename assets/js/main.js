
$(document).ready(function () {
  $(".form-check").on("click", function () {
    var checkbox = $(this).find(".form-check-input");
    checkbox.prop("checked", !checkbox.prop("checked"));
  });

  $(".checkbox-option").on("change", function () {
    $(".checkbox-option").not(this).prop("checked", false);
  });
});

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
    $(this).toggleClass("active ");
  });

  // pure counter
  new PureCounter();

  // storySwiper
  var swiper = new Swiper(".storySwiper", {
    loop: true,
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
    direction: "vertical",
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
    loop: true,
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

  // country-updates
  var swiper = new Swiper(".country-updatesSwiper", {
    loop: true,
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
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});


// scholorship page
$(document).ready(function () {
  var firstFilter = $("[data-filter]").first();
  firstFilter.addClass("active");
  var firstFilterData = firstFilter.data().filter;

  var filter = firstFilterData;

  $(document).on("change", "#scholorship-countries", function () {
    filter = $(this).val();
    $("[data-filter]").removeClass("active");
    $(this).addClass("active");
    filterItems();
  });

  filterItems();

  function filterItems() {
    if (filter === firstFilterData || filter === "all countries") {
      $(".filter-item").show();
    } else {
      $(".filter-item").hide();
      $(".filter-item[data-filter*='" + filter + "']").show();
    }
  }
});

// inner fixed bar in netherland page
$(document).ready(function() {
  const sections = $("section");
  const navLi = $(".navbar-nav .nav-item");

  $(window).scroll(function() {
    var current = "";

    sections.each(function() {
      const sectionTop = $(this).offset().top;
      if ($(window).scrollTop() >= sectionTop - 60) {
        current = $(this).attr("id");
        
      }
    });

    navLi.removeClass("active");
    navLi.each(function() {
      if ($(this).find("a").attr("href") === "#" + current) {
        $(this).addClass("active");
      }
    });
  });
});

// accordion
$(document).ready(function() {
  $(".accordion").click(function() {
    $(this).toggleClass("active");
    var panel = $(this).next();
    if (panel.css("display") === "block") {
      panel.css("display", "none");
    } else {
      panel.css("display", "block");
    }
  });
});


