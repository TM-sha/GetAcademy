let list;

list = true;

function toggleList() {

    if (list == true) {
        document.getElementById("divList").innerHTML = '';
        list = false;
    } else if (list == false) {
        document.getElementById("divList").innerHTML = ` <ul>
        <li><a href="https://TM-sha.github.io/GetAcademy/OppgaveParametre"
                title="Gå til"><code>Funksjon & Parametre</code></a></li>
    </ul> `;
        list = true;
    }

}

