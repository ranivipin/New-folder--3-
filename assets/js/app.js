let no = document.querySelector("#counting");
let minusbtn = document.querySelector("#minusbtn");
let addbtn = document.querySelector("#addbtn");
addbtn.addEventListener("click", function () {
  no.innerHTML = +no.innerHTML + 1;
});
minusbtn.addEventListener("click", function () {
  no.innerHTML = +no.innerHTML - 1;
});

$(".slick").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrow: true,
  prevArrow: '.prev',
  nextArrow:'.next',
  responsive: [
    
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
