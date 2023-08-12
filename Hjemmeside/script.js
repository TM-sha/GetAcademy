function showInfo() {

    document.getElementById("hobby").innerHTML = '';
    document.getElementById("pic").innerHTML = '';
    document.getElementById("randomcolor").innerHTML = '';
    document.getElementById("resetMain").innerHTML = '';

    document.getElementById("aboutMe").innerHTML = `
    <p>&#128400; &laquo;  Jeg er 36 år og bor i Bergen (Åsane bydel).<br><br> Jeg er far til 3 gutter i alderen 3, 5 og 10.
    <br><br> Har aldri vært borti koding før.<br><br> Er glad i å være sosial, 
       men setter pris på alenetid også.<br><br>
       Tar heller en kaffe fremfor en pils. &raquo; &#128378;</p> `


    document.getElementById("mainColor").style.backgroundColor = 'rgb(2, 10, 90)';
    document.getElementById("infoVisited1").style.backgroundColor = 'green';
    document.getElementById("infoVisited2").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited3").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited4").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
}


function showHobby() {
    document.getElementById("aboutMe").innerHTML = '';
    document.getElementById("pic").innerHTML = '';
    document.getElementById("randomcolor").innerHTML = '';
    document.getElementById("resetMain").innerHTML = '';

    document.getElementById("hobby").innerHTML = `

    <ul>
            <li>PC &#127916; &#127918;</li><ul>
                <li style="color: #ddd">Gaming</li>
                <li style="color: red">YouTube</li>
                <li style="color: darkred">Netflix</li>
            </ul><br><br>
            <li>Musikk &#9835</li><ul>
                <li style="color: #ddd">Spille gitar</li>
                <li style="color: #ddd">Spille bass</li>
                <li style="color: #ddd">Høre på musikk</li>
            </ul><br><br>
            <li>Bøker</li><ul>
                <li style="color: #ddd">Fantasy</li>
                <li style="color: #ddd">Krim</li>
                <li style="color: #ddd">Diverse</li>
            </ul><br><br>
        </ul> `

    document.getElementById("infoVisited1").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited2").style.backgroundColor = 'green';
    document.getElementById("infoVisited3").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited4").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited5").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("mainColor").style.backgroundColor = 'rgb(4, 53, 4)';
}


function showPic() {

    document.getElementById("aboutMe").innerHTML = '';
    document.getElementById("hobby").innerHTML = '';
    document.getElementById("randomcolor").innerHTML = '';
    document.getElementById("resetMain").innerHTML = '';

    document.getElementById("pic").innerHTML = '<img src="/Hjemmeside/img/bilde.jpg" height="450" width="400" alt="Selvportrett">';
    document.getElementById("mainColor").style.backgroundColor = '#666';


    document.getElementById("infoVisited1").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited2").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited3").style.backgroundColor = 'green';
    document.getElementById("infoVisited4").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited5").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';

}
//Blackout
function blackout() {

    document.getElementById("aboutMe").innerHTML = '';
    document.getElementById("hobby").innerHTML = '';
    document.getElementById("randomcolor").innerHTML = '';
    document.getElementById("resetMain").innerHTML = '';
    document.getElementById("pic").innerHTML = '';




    document.getElementById("mainColor").style.backgroundColor = 'Black'

    document.getElementById("infoVisited1").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited2").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited3").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited4").style.backgroundColor = 'green';
    document.getElementById("infoVisited5").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
}

function resetAll() {

    document.getElementById("infoVisited1").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited2").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited3").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';
    document.getElementById("infoVisited4").style.backgroundColor = 'rgba(255, 255, 255, 0.596)';


    document.getElementById("aboutMe").innerHTML = '';
    document.getElementById("hobby").innerHTML = '';
    document.getElementById("pic").innerHTML = '';


    document.getElementById("mainColor").style.backgroundColor = '#e6e6e6';
}