//
$(document).ready(function () {
  //
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".wrap").css("background-color", "rgb(252, 252, 252, 0.8");
      $(".wrap a").css("color", "rgb(0,0,0");
      $(".wrap button").css("color", "rgb(0,0,0");
      $(".wrap .column").css("backdrop-filter", "blur(15px"); // 尾雙冒號放括號內 / 會取代掉子曾樣式 故加回去
    } else {
      $("#nav_topTag").css("background-color", "rgb(252, 252, 252, 0)");
      $(".wrap .index_navbarMain > a").css("color", "rgb(255,255,255");
      $(".wrap button").css("color", "rgb(255,255,255");
    }
  });
  //
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    $(".animated").css("transform", "translateY(50px)");
    // animated
    $(".animated").each(function () {
      var thisPos = $(this).offset().top;
      if (windowHeight + scrollPos >= thisPos) {
        $(this).addClass("fadeIn");
        $(this).css("transform", "translateY(0px)");
      }
    });
  });
});

/**
 *
 */
const splide = new Splide(".splide", {
  type: "fade", //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: "20px", //1 rem default
  rewind: true,
  speed: 1500, //transition in milliseconds
  fixedWidth: "100vw", //"10vw",
  width: "100vw",
  perPage: 1, //5,
  start: 0, //3,
  perMove: 1, //3,
  autoplay: true,
  interval: 2000, //3000,
  arrows: false,
  pagination: false,
  pauseOnHover: true,
  // wheel: true, //滑鼠控制
  //
  // focus: "center",
  //   drag: "free",
  // autoScroll: {
  //   speed: -1,
  // },
  //
});
splide.mount();
