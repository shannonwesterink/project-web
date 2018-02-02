// https://stackoverflow.com/questions/8953654/disable-use-the-function-form-of-use-strict-but-keep-the-missing-use-strict

// Met dank aan Folkert-Jan van der Pol
// Met dank aan Jonah Meijers
// Met dank aan Shannon Westerink
// Binnen deze javascript heb ik een m'n gehele code in een functie die in een keer gerund wordt zodat m'n code semantisch correct is en zo vriendelijk mogelijk voor javascript. 

// voor de micorinteracties gifbutton voor downloaden en planeanimation voor het laadbalkje voor het versturen van een bericht zijn variable aangemaakt en aangesproken met de document query selector. deze pakt het eerste element dat matcht met de inhoud die tussen de string staat. Vervolgens worden deze gegevens tijdelijk opgeslagen in de variabele voor verder gebruik. 

(function () {
    'use strict';
    var gifButton = document.querySelector(".gif-button img"),
        planeAnimationButton = document.querySelector("#plane-animation-button"),
        planeAnimation = document.querySelector("#plane-animation"),
        reaction = document.querySelector('p.hidden');
    
    //Om iets met deze variabelen te gaan doen voegen we een functie toe aan de elementen. Door middel van een if else statement creeeren we de functie. Wanneer er in de source een element wordt erkent die eindigt op -start.png wordt gezegd dat dit element dmv element.src.split vervangen moet worden dmv join door een element dat eindigd op .gif. Vervolgens wordt er een functie aangeroepen met setTimeout dat na een aantal miliseconde de .gif weer vervangen mag worden voor een element die eindigd op -eind.png. Else if zegt weer dat wanneer er een src element gevonden wordt met -eind.png dat deze vervangen mag worden voor een -start.png

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
    
    //Wanneer de gifbutton in als inhoud de class vanuit je HTML CSS gif-button img aangeklikt wordt mag de functie hierboven switchimage worden uitgevoerd. voor 2sec. 
    
    //Wanneer de planeAnimation in als inhoud de id vanuit je HTML CSS plane=animationbutton aangeklikt wordt gaat de functie runnen. De functie planeAnimation met de id in HTML CSS gaat in deze functie opzoek naar de gif genaamd vliegtuig.gif en geeft vervolgens aan dat deze gif in de id mag worden afgespeeld dmv show. setTimeout callt de volgende functie na 6 sec die de inhoud van reaction met de class hidden weghaalt op een HTML element en tegelijkertijd de inhoud van variabele planeAnimation verwijderd van het canvas. 

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