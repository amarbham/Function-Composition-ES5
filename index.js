
var button = document.getElementById('button');
var p = document.getElementById('paragraph');

function setColour(elem) {
    return function (color) {
        return elem.style.color = color
    };
};

var setButtonColour = setColour(button);

function getById(name) {
    return document.getElementById(name);
}

function setColourOnClick(elem, newP){
    return function(colour){
        return elem.addEventListener('click', function () {
            setColour(newP)(colour);
        });
    }
}

var setParagraphColour = setColourOnClick(button, p);

setParagraphColour('#00FF00');