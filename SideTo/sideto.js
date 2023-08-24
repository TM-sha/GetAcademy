let list = false;
toggleList();
function toggleList() {

    if (list == false) {
        document.getElementById("divList").innerHTML = /*HTML*/`
        <ul>
        <li>
            <a href="https://TM-sha.github.io/GetAcademy/OppgaveParametre"
                title="Gå til"><code>Funksjon & Parametere</code></a>
        </li><br>

        <li>
            <a href="https://TM-sha.github.io/GetAcademy/FargeDivs" title="Gå til"><code>Fargediv's</code></a>
        </li><br>

        <li>
            <a href="https://TM-sha.github.io/GetAcademy/StopWatch" title="Gå til"><code>StopWatch</code></a>
        </li><br>

        <li>
            <a href="https://TM-sha.github.io/GetAcademy/Trafikklys" title="Gå til"><code>Trafikklys</code></a>
        </li><br>

        <li>
            <a href="https://TM-sha.github.io/GetAcademy/Tastatur" title="Gå til"><code>Tastatur</code></a>
        </li><br>

        <li>
            <a href="https://TM-sha.github.io/GetAcademy/Lightbulb" title="Gå til"><code>Lightbulb</code></a>
        </li><br>
        
        <li>
            <a href="https://TM-sha.github.io/GetAcademy/Return" title="Gå til"><code>Return</code></a>
        </li>
    </ul> `
        list = true;
    } else if (list == true) {
        document.getElementById("divList").innerHTML = '';
        list = false;
    }

}

