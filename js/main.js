$(function(){
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        }
      });

      // $('.cont03_sliders').slick({
      //     infinite: true,
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     // centerMode: true,
      //     focusOnSelect: true
      // });
      var swiper = new Swiper(".cont03_sliders", {
          slidesPerView: 3.3,
          spaceBetween: 30,
          
          navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          },
    });
});