


function gridSwiper(){

  const swiper = new Swiper(".grid", {
    slidesPerView: 3,
    effect:"grid",
    gridEffect: {
      rows: 3,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-paginacion",
      clickable: true,
    },
  });
}


function iniciarSwipper(){

//keyboard="true" space-between="30"  pagination-clickable="true"

    const swiper = new Swiper(".miSwiper", {
        // Optional parameters
       // direction: 'horizontal',

           
      /*  effect: 'cube',
        cubeEffect: {
          slideShadows: false,
        },
      
        effect: 'flip',
        flipEffect: {
          slideShadows: false,
        },
  */
        //loop: true,
        centeredSlides:true,
        keyboard:true,
       //  touchMoveStopPropagation: true,
      //centered:true,
     // grabCursor: true,
      slidesPerView: "auto",
     
      effect: 'coverflow',
        coverflowEffect: {
          rotate: 50,
          slideShadows: false,
        
          stretch:0,
          depth: 100,
         modifier: 1,
          
      

          
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        clickable: true,
       
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          
        },


       breakpoints: {
        /*   0:{
            slidesPerView: 1,
            //spaceBetween:50,
          },
      
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },*/
          768: {
            slidesPerView: 3,
           // spaceBetween: 20,
           // stretch:40,
            
          },
         /* 1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },*/
        }
        
      });
      


}



