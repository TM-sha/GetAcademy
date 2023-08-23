let list = false;
toggleList();
function toggleList() {

    if (list == false) {
        document.getElementById("divList").innerHTML = /*HTML*/`<ul>
        <li><a href="https://TM-sha.github.io/GetAcademy/OppgaveParametre"
                title="Gå til"><code>Funksjon & Parametre</code></a></li>
    </ul> `;
        list = true;
    } else if (list == true) {
        document.getElementById("divList").innerHTML = '';
        list = false;
    }

}

