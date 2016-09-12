
var button = document.getElementById('button');
var p = document.getElementById('paragraph');

var buttonColour = setColour(button);
var changeColour = setElemColourOnClick(button, p);


function setColour(elem) {
    return function (color) {
        return elem.style.color = color
    };
};

function setElemColourOnClick(clickedElem, targetElem){
    return function(colour){
        return clickedElem.addEventListener('click', function () {
            setColour(targetElem)(colour);
        });
    };
};

buttonColour('#0000FF');
changeColour('#00FF00');