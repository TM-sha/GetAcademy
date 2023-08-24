const lightDiv = document.getElementById("lightBulb");
const infoDiv = document.getElementById("onOrOffInfo");
let turnedOn = false;

function lightOn(color) {
    if (turnedOn == false) {
        lightDiv.style.backgroundColor = color;
        infoDiv.innerHTML = 'Lyspæra er på';
        turnedOn = true;
    }
    else if (turnedOn == true) {
        lightDiv.style.backgroundColor = ''
        infoDiv.innerHTML = 'Lyspæra er av';
        turnedOn = false;
    }
}