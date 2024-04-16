var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,  
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 30,  
        },
        960: {
            slidesPerView: 4, 
        }
    }
});

var saleSwiper = new Swiper(".saleSwiper", {
    slidesPerView: 1,
    spaceBetween: 15, 
    
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        650: {
            slidesPerView: 2, 
            spaceBetween: 30, 
        },
    }
});

