let list = false;
toggleList();
function toggleList() {

    if (list == false) {
        document.getElementById("divList").innerHTML = /*HTML*/`
        <ul>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/KrokodilleSpill" title="Gå til"><code>Krokodillespill</code></a>
            </li><br>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/MvcAdjektivfortelling" title="Gå til"><code>Adjektivfortelling</code></a>
            </li><br>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/ToGangen" title="Gå til"><code>2 gangen</code></a>
            </li><br>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/VokalOppgave" title="Gå til"><code>Vokalteller</code></a>
            </li><br>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/TallGenererer" title="Gå til"><code>Tall-genererer</code></a>
            </li><br>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/HandleVogn" title="Gå til"><code>Handlevogn</code></a>
            </li><br>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/EightBall" title="Gå til"><code>8 ball</code></a>
            </li><br>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/Objekter" title="Gå til"><code>Objekter (Oppgave tabell)</code></a><br><br>
                <a href="https://TM-sha.github.io/GetAcademy/SideTo/" title="Forrige side" style= "color:orange; margin-left:-20px">Forrige</a>
            </li>
        </ul> `;

        list = true;
    } else if (list == true) {
        document.getElementById("divList").innerHTML = '';
        list = false;
    }

}
