
var button = document.getElementById('button');
var p = document.getElementById('paragraph');

var setButtonColour = setColour(button);
var changeColour = setColourOnClick(button, p);


function setColour(elem) {
    return function (color) {
        return elem.style.color = color
    };
};

function setColourOnClick(elem, newP){
    return function(colour){
        return elem.addEventListener('click', function () {
            setColour(newP)(colour);
        });
    };
};

setButtonColour('#0000FF');
changeColour('#00FF00');