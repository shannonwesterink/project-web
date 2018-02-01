/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
var tags = document.querySelectorAll('.tag-click');

for (var i = 0; i < tags.length; i++){
    tags[i].addEventListener("click", function(e){
        changeColor(e.target)
    });
}

function changeColor(tag){
    console.log("fired", tag); 
    tag.classList.toggle("clicked");
}