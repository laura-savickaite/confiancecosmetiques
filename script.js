document.addEventListener('DOMContentLoaded', function loaded() {

    var loader = document.querySelector('.loader');
    var buttons = document.querySelectorAll('button');
    var buttonLoad = buttons[0];

    

    buttonLoad.onclick = function (){
        loader.classList.add('fade');
    }


    // function unfade(element) {
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

    // let loaderBG = document.getElementsByClassName('loader');

    // unfade(loaderBG[0]);
})