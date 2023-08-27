let list = false;
toggleList();
function toggleList() {

    if (list == false) {
        document.getElementById("divList").innerHTML = /*HTML*/`
        <ul>
            <li>
                <a href="https://TM-sha.github.io/GetAcademy/KrokodilleSpill" title="Gå til"><code>Krokodillespill</code></a>
            </li><br>
        </ul> `;

        list = true;
    } else if (list == true) {
        document.getElementById("divList").innerHTML = '';
        list = false;
    }

}
