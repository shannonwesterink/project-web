// https://stackoverflow.com/questions/8953654/disable-use-the-function-form-of-use-strict-but-keep-the-missing-use-strict
(function () {
    'use strict';
    var gifButton = document.querySelector(".gif-button img"),
        planeAnimationButton = document.querySelector("#plane-animation-button"),
        planeAnimation = document.querySelector("#plane-animation"),
        reaction = document.querySelector('p.hidden');

    function switchImage(element, timeout) {
        if (element.src.indexOf("-start.png")) {
            element.src = element.src.split("-start.png").join(".gif");
            setTimeout(function () {
                element.src = element.src.split(".gif").join("-eind.png");
            }, timeout);
        } else if (element.src.indexOf("-eind.png")) {
            element.src = element.src.split("-eind.png").join("-start.png");
        }
    }

    if (gifButton) {
        gifButton.addEventListener("click", function (e) {
            switchImage(e.currentTarget, 2000);
        });
    }

    if (planeAnimationButton) {
        planeAnimationButton.addEventListener("click", function () {
            planeAnimation.src = 'image/microinteractie/vliegtuig.gif';
            planeAnimation.classList.add('show');
            setTimeout(function () {
                reaction.classList.remove('hidden');
                planeAnimation.classList.remove('show');
            }, 6000);
        });
    }
}());