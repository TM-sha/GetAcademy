let firstNum = 0;
let secondNum = 0;
let points = 0;
let pointCounter = document.getElementById("poeng");

function reset() {
    updateNumbers();
    pointCounter.innerHTML = 'Poeng: 0';
    points = 0;
}

function updateNumbers() {
    firstNum = getRandomNumber();
    secondNum = getRandomNumber();
    document.getElementById("numb1").innerHTML = firstNum;
    document.getElementById("numb2").innerHTML = secondNum;
    document.getElementById("inputText").value = '';
}

function getRandomNumber() {
    return Math.round(Math.random() * 10);
}

function checkAnswer() {
    let input = document.getElementById("inputText").value;
    if (firstNum > secondNum && input == '>') {
        points++;
        pointCounter.innerHTML = 'Poeng: ' + points;
        updateNumbers();
    }
    else if (firstNum > secondNum && input == '<') {
        points--
        pointCounter.innerHTML = 'Poeng: ' + points;
        updateNumbers();
    }
    else if (firstNum < secondNum && input == '<') {
        points++
        pointCounter.innerHTML = 'Poeng: ' + points;
        updateNumbers();
    }
    else if (firstNum < secondNum && input == '>') {
        points--
        pointCounter.innerHTML = 'Poeng ' + points;
        updateNumbers();
    }
    else if (firstNum == secondNum && input == '=') {
        points++
        pointCounter.innerHTML = 'Poeng: ' + points;
        updateNumbers();
    }
    else {
        points--;
        pointCounter.innerHTML = 'Poeng: ' + points;
        updateNumbers();
    }
}