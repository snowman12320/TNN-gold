//
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".wrap").css("background-color", "rgb(252, 252, 252, 0.5");
      $(".wrap .column").css("backdrop-filter", "blur(15px"); // 尾雙冒號放括號內 / 會取代掉子曾樣式 故加回去
    } else {
      $("#nav_topTag").css("background-color", "rgb(252, 252, 252, 0)");
    }
  });
});
//
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
  // autoplay: true,
  interval: 3000, //3000,
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
