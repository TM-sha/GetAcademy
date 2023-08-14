function showInfo() {

    document.getElementById("hobby").innerHTML = '';
    document.getElementById("pic").innerHTML = '';
    document.getElementById("randomcolor").innerHTML = '';
    document.getElementById("resetMain").innerHTML = '';

    document.getElementById("aboutMe").innerHTML = `
    <p>Jeg er 36 år og bor i Bergen (Åsane bydel).<br><br> Jeg er far til 3 gutter i alderen 3, 5 og 10.
    <br><br> Har aldri vært borti koding før.<br><br> Er glad i å være sosial, 
       men setter pris på alenetid også.<br><br>
       Tar heller en kaffe fremfor en pils.</p> `

    document.getElementById("hobby").style.display = 'none';
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
            <li>PC</li><ul>
                <li style="color: #ddd">Gaming</li>
                <li style="color: red">YouTube</li>
                <li style="color: darkred">Netflix</li>
            </ul><br><br>
            <li>Musikk</li><ul>
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

    document.getElementById("hobby").style.display = 'inline';
    document.getElementById("hobby").style.marginTop = '1em;';
    document.getElementById("hobby").style.marginLeft = '33em';
    document.getElementById("hobby").style.border = '1px ridge green';
    document.getElementById("hobby").style.width = '25vw';
    document.getElementById("hobby").style.height = '53vh';
    document.getElementById("hobby").style.paddingTop = '15px';
    document.getElementById("hobby").style.boxShadow = '0px 10px 15px 4px rgb(17, 17, 17)';

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

    document.getElementById("pic").innerHTML = '<img src="../Hjemmeside/img/bilde.jpg" height="450" width="400" title="Ja, få det vekk" alt="Selvportrett">'


    document.getElementById("mainColor").style.backgroundColor = '#666';

    document.getElementById("hobby").style.display = 'none';
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

    document.getElementById("hobby").style.display = 'none';
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

    document.getElementById("hobby").style.display = 'none';
    document.getElementById("aboutMe").innerHTML = '';
    document.getElementById("hobby").innerHTML = '';
    document.getElementById("pic").innerHTML = '';


    document.getElementById("mainColor").style.backgroundColor = '#e6e6e6';
}