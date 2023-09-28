const display = document.getElementById("displayText");
let upperOn = false;


function letter(element, color) {
    display.innerHTML += element.innerHTML;
    element.style.color = color;
}

function spaceCap() {
    display.innerHTML += ` &nbsp `;
}


function capsLock() {
    if (upperOn == false) {
        display.style.textTransform = 'uppercase';
        upperOn = true;
    }
    else if (upperOn == true) {
        display.style.textTransform = '';
        upperOn = false;
    }
}

function deleteCap() {
    let keyCaps = document.getElementsByClassName('keyCap');
    display.innerHTML = '';
    display.style.textTransform = '';
    upperOn = false;
    for (i = 0; i < keyCaps.length; i++) {
        keyCaps[i].style.color = 'black';
        //console.log(keyCaps[i]);
    }
}
