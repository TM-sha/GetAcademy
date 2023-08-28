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
            </li>
        </ul> `;

        list = true;
    } else if (list == true) {
        document.getElementById("divList").innerHTML = '';
        list = false;
    }

}
