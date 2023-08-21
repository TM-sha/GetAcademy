function toggleList() {
    let list = document.getElementById("divList");
    if (list.innerHTML == '') {
        list.innerHTML = `
    <ul>
        <li><a href="https://TM-sha.github.io/GetAcademy/Eksempel1" title="Gå til"><code>Eksempel 1</code></a></li>
        <br>
        <li><a href="https://TM-sha.github.io/GetAcademy/Hjemmeside"
                title="Gå til"><code>Ukesoppgave (Nettside)</code></a>
        </li><br>
        <li><a href="https://TM-sha.github.io/GetAcademy/VisuellTeller"
                title="Gå til"><code>Visuell Teller</code></a>
        </li>
        <a href="https://TM-sha.github.io/GetAcademy/SideTo/" style="float: right;">Neste</a>
    </ul> `;
    } else (list.innerHTML = '');
}