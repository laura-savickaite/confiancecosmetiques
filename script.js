document.addEventListener('DOMContentLoaded', function loaded() {

    //LOADER

    function showSite(){
        $('#loader').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('main').delay(350).css({'overflow':'visible'});
  }
      $(window).on('load', function() { // makes sure the whole site is loaded 
      setTimeout(function(){ showSite() }, 2000);
      })



      //LANDING PAGE

      TweenMax.to(".block-1", 5, {
          x: "-180",
          y: "-100",
          scale: "2.4",
          ease: Expo.easeInOut, 
      })
      TweenMax.to(".block-2", 5, {
        x: "-180",
        y: "200",
        scale: "1.2",
        ease: Expo.easeInOut, 
    })
    TweenMax.to(".block-3", 5, {
        x: "20",
        y: "250",
        scale: "1.6",
        ease: Expo.easeInOut, 
    })
    TweenMax.to(".block-4", 5, {
        x: "280",
        y: "240",
        scale: "0.8",
        ease: Expo.easeInOut, 
    })
    TweenMax.to(".block-5", 5, {
        x: "120",
        y: "40",
        scale: "0.4",
        ease: Expo.easeInOut, 
    })
    TweenMax.to(".block-6", 5, {
        x: "80",
        y: "-100",
        scale: "2",
        ease: Expo.easeInOut, 
    })
    TweenMax.to(".block-7", 5, {
        x: "200",
        y: "-180",
        scale: "1.5",
        ease: Expo.easeInOut, 
    })
    TweenMax.to(".block-8", 5, {
        x: "170",
        y: "50",
        scale: "1",
        ease: Expo.easeInOut, 
    })
    TweenMax.to(".block-9", 5, {
        x: "280",
        y: "200",
        scale: "0.8",
        ease: Expo.easeInOut, 
    })

    TweenMax.to(".box", 5.4, {
        y: "-100%",
        ease: Expo.easeInOut,
    })
})