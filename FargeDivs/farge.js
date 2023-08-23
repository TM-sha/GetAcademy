let chosenColor;
let activeBox;

function selectColor(color) {
    chosenColor = color;
}

function setBackgroundColor() {
    document.body.style.backgroundColor = chosenColor;
}

function emptyBox(chosenBox) {
    document.getElementById(chosenBox).style.backgroundColor = chosenColor;
    document.getElementById(chosenBox).classList.remove('boxesActive');

    if (chosenBox == 1) {
        if (activeBox == 2) {
            document.getElementById(activeBox).classList.remove('boxesActive');
            document.getElementById(chosenBox).classList.add('boxesActive');
        }
        else {
            document.getElementById(chosenBox).classList.add('boxesActive');
        }
    }
    else if (chosenBox == 2) {
        if (activeBox == 1) {
            document.getElementById(activeBox).classList.remove('boxesActive');
            document.getElementById(chosenBox).classList.add('boxesActive');
        }
        else {
            document.getElementById(chosenBox).classList.add('boxesActive');
        }
    }
    activeBox = chosenBox;
}
