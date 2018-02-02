/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//Met dank aan Folkert-Jan van der Pol
// Met dank aan Shannon Westerink
// Ik heb hier een variabele aangemaakt die de inhoud van alle css selectoren met de class tag-click gaan bevatten. 
var tags = document.querySelectorAll('.tag-click');

// Deze inhoud krijgt een event, wanneer er op een element wordt geklikt met de class tag-click wordt er een functie gerunt die de kleur van het element moet gaan veranderen door in de volgende functie changeColor de stijl van class clicked gaan vervangen wanneer erop het element geklikt wordt. Door middel van de loop zal er op het aantal elementen die gegeven zijn in het element geklikt kunnen worden en oneidig kunnen worden uitgevoerd. 

for (var i = 0; i < tags.length; i++){
    tags[i].addEventListener("click", function(e){
        changeColor(e.target)
    });
}

function changeColor(tag){
    console.log("fired", tag); 
    tag.classList.toggle("clicked");
}