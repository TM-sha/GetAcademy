
function noLayout() {
    document.getElementById("allCards").classList.value = '';
}
function vertLayout() {
    noLayout();
    document.getElementById('allCards').classList.add('vertical');
}
function horLayout() {
    noLayout();
    document.getElementById('allCards').classList.add('horizontal');
}
function gridLayout() {
    noLayout();
    document.getElementById('allCards').classList.add('grid');
}





function visVerktøy() {
    lukkAlle();

    document.getElementById("verktøyTekst").innerHTML = /*HTML*/ `

            <div class="innercard"> De to viktigste verktøyene vi skal bruke er disse:
                <ul>
                    <li>
                        Koderedigeringsprogrammet <a href="http://https://code.visualstudio.com/">Visual Studio
                            Code</a>
                    </li>
                    Vi skal bruke noen <em>extensions:</em>
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li>live-server</li>
                        <li>live-share</li>
                    </ul>
                    <li>Nettleseren <a href="http://https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
                </ul>
            </div>`;
}




function visHtml() {
    lukkAlle();

    document.getElementById("htmlTekst").innerHTML = /*HTML*/ `

            <div class="innercard" id="innerText2"> Vi bruker HTML til å definere et dokument.
                <ul>
                    <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                    <li>Tagger for grunnleggende formatering av tekst</li>
                    <li><tt>&lt;div&gt;</tt></li> 
                    <li><tt> &lt;input type="text"&gt;</tt></li>
                    <li><tt>&lt;button&gt;</tt></li>
                    <li><a href="http://https://www.w3schools.com/html/default.asp">W3Schools HTML Tutorial</a></li>
                    <li><a href="http://https://www.w3schools.com/tags/default.asp">W3Schools HTML Reference</a>
                    </li>
                </ul>
            </div> `;
}

function visCss() {
    lukkAlle();

    document.getElementById("cssTekst").innerHTML = /*HTML*/ `

            <div class="innercard" id="innerText3">Vi bruker CSS til å
                <i>style</i> et
                dokument,
                altså
                farger, fonter, utseende og lignende.
                <ul>
                    <li><tt>background-color</tt></li>
                    <li><tt>color</tt></li>
                    <li><tt>padding</tt></li>
                    <li><tt>margin</tt></li>
                    <li><tt>border</tt></li>
                    <li><tt>text-align</tt></li>
                    <li><tt>font-size</tt></li>
                    <li><a href="http://https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a></li>
                    <li><a href="http://https://css-tricks.com/snippets/css/complete-guide-grid/">Grid</a></li>
                    <li><a href="http://https://www.w3schools.com/css/default.asp">W3Schools CSS Tutorial</a></li>
                    <li><a href="http://https://www.w3schools.com/cssref/default.asp">W3Schools CSS Reference</a>
                    </li>
                </ul>
            </div> `;
}

function visJavaScript() {
    lukkAlle();

    document.getElementById("javaScriptTekst").innerHTML = /*HTML*/ `

            <div class="innercard" id="innerText4"> Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi
                skal lære
                grunnleggende programmering ved å manipulere HTML- og CSS-kode på en nettside
                ved hjelp av JavaScript.
                <ul>
                    <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt
                        på
                        Moodle.
                    </li>
                    <li><a href="http://https://www.w3schools.com/jsref/default.asp">W3Schools JavaScript
                            Reference</a>
                    </li>
                </ul>
            </div> `;
}

function visKropp() {
    lukkAlle();
    document.getElementById("kroppSynlig").innerHTML = /*HTML*/ `

            <div class="bodies" id="innerText5">

            <div class="bodyPart" id="hode">
                <button onclick="selectHead4()">
                ◀
                </button> 
                <img src="../Eksempel1/img/head1.png" alt="">
                
                <button onclick="selectHead2()">
                ▶
                </button>

            </div>

            <div class="bodyPart" id="body">
                <button onclick="selectBody4()">
                ◀
                </button> 
                <img src="../Eksempel1/img/body1.png" alt="">

                <button onclick="selectBody2()">
                ▶
                </button>

            </div>

            <div class="bodyPart" id="legs">
                <button onclick="selectLegs4()">
                ◀
                </button> 
                <img src="../Eksempel1/img/legs1.png" alt="">

                <button onclick="selectLegs2()">
                ▶
                </button>
                
            </div>

            </div> `
}

/*Endre hoder*/
function selectHead1() {
    document.getElementById("hode").innerHTML = /*HTML*/ `

    <button onclick="selectHead4()">
        ◀
    </button>
    <img src="../Eksempel1/img/head1.png">

    <button onclick="selectHead2()">
        ▶
    </button> `
}

function selectHead2() {
    document.getElementById("hode").innerHTML = /*HTML*/ `

    <button onclick="selectHead1()">
        ◀
    </button>
    <img src="../Eksempel1/img/head2.png">

    <button onclick="selectHead3()">
        ▶
    </button> `
}

function selectHead3() {
    document.getElementById("hode").innerHTML = /*HTML*/ `

    <button onclick="selectHead2()">
        ◀
    </button>
    <img src="../Eksempel1/img/head3.png">

    <button onclick="selectHead4()">
        ▶
    </button> `
}

function selectHead4() {
    document.getElementById("hode").innerHTML = /*HTML*/ `

    <button onclick="selectHead3()">
        ◀
    </button>
    <img src="../Eksempel1/img/head4.png">

    <button onclick="selectHead1()">
        ▶
    </button> `
}


/*Endre kropper*/
function selectBody1() {
    document.getElementById("body").innerHTML = /*HTML*/ `

    <button onclick="selectBody4()">
        ◀
    </button>
    <img src="../Eksempel1/img/body1.png">

    <button onclick="selectBody2()">
        ▶
    </button> `
}

function selectBody2() {
    document.getElementById("body").innerHTML = /*HTML*/ `

    <button onclick="selectBody1()">
        ◀
    </button>
    <img src="../Eksempel1/img/body2.png">

    <button onclick="selectBody3()">
        ▶
    </button> `
}

function selectBody3() {
    document.getElementById("body").innerHTML = /*HTML*/ `

    <button onclick="selectBody2()">
        ◀
    </button>
    <img src="../Eksempel1/img/body3.png">

    <button onclick="selectBody4()">
        ▶
    </button> `
}

function selectBody4() {
    document.getElementById("body").innerHTML = /*HTML*/ `

    <button onclick="selectBody3()">
        ◀
    </button>
    <img src="../Eksempel1/img/body4.png">

    <button onclick="selectBody1()">
        ▶
    </button> `
}


/*Endre bein*/
function selectLegs1() {
    document.getElementById("legs").innerHTML = /*HTML*/ `

    <button onclick="selectLegs4()">
        ◀
    </button>
    <img src="../Eksempel1/img/legs1.png">

    <button onclick="selectLegs2()">
        ▶
    </button> `
}

function selectLegs2() {
    document.getElementById("legs").innerHTML = /*HTML*/ `

    <button onclick="selectLegs1()">
        ◀
    </button>
    <img src="../Eksempel1/img/legs2.png">

    <button onclick="selectLegs3()">
        ▶
    </button> `
}

function selectLegs3() {
    document.getElementById("legs").innerHTML = /*HTML*/ `

    <button onclick="selectLegs2()">
        ◀
    </button>
    <img src="../Eksempel1/img/legs3.png">

    <button onclick="selectLegs4()">
        ▶
    </button> `
}

function selectLegs4() {
    document.getElementById("legs").innerHTML = /*HTML*/ `

    <button onclick="selectLegs3()">
        ◀
    </button>
    <img src="../Eksempel1/img/legs4.png">

    <button onclick="selectLegs1()">
        ▶
    </button> `
}

function lukkAlle() {
    document.getElementById("verktøyTekst").innerHTML = '';
    document.getElementById("htmlTekst").innerHTML = '';
    document.getElementById("cssTekst").innerHTML = '';
    document.getElementById("javaScriptTekst").innerHTML = '';
    document.getElementById("kroppSynlig").innerHTML = '';
}
