document.addEventListener('DOMContentLoaded', function loaded() {

    function showSite(){
        $('#loader').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('main').delay(350).css({'overflow':'visible'});
  }
      $(window).on('load', function() { // makes sure the whole site is loaded 
      setTimeout(function(){ showSite() }, 2000);
      })

    // function fade(element) {
    //     var op = 0.1;  // initial opacity
    //     element.style.display = 'block';
    //     var timer = setInterval(function () {
    //         if (op >= 1){
    //             clearInterval(timer);
    //         }
    //         element.style.opacity = op;
    //         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    //         op += op * 0.1;
    //     }, 10);
    // }

})