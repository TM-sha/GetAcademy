
function noLayout() {
    document.getElementById("allCards").style.display = 'block';
}
function vertLayout() {
    document.getElementById("allCards").style.display = 'flex';
    document.getElementById("allCards").style.flexDirection = 'column';
}
function horLayout() {
    document.getElementById("allCards").style.display = 'flex';
    document.getElementById("allCards").style.flexDirection = 'row';
    document.getElementById("allCards").style.gap = '20px';
}
function gridLayout() {
    document.getElementById("allCards").style.display = 'grid';
    document.getElementById("allCards").style.gridTemplateColumns = 'repeat(2, 520px)';
    document.getElementById("allCards").style.width = 'auto';
}


function lukkAlle() {
    document.getElementById("verktøyTekst").innerHTML = '';
    document.getElementById("htmlTekst").innerHTML = '';
    document.getElementById("cssTekst").innerHTML = '';
    document.getElementById("javaScriptTekst").innerHTML = '';
    document.getElementById("kroppSynlig").innerHTML = '';
}



function visVerktøy() {
    lukkAlle();


    document.getElementById("verktøyTekst").innerHTML = `

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

    document.getElementById("htmlTekst").innerHTML = `

            <div class="innercard" id="innerText2"> Vi bruker HTML til å definere et dokument.
                <ul>
                    <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                    <li>Tagger for grunnleggende formatering av tekst</li>
                    <li><tt>&lt;div&gt;</tt></li> <!--Er det en forskjell på bruk av "tt" kontra "code"?-->
                    <li><code> &lt;input type="text"&gt;</code></li>
                    <li><tt>&lt;button&gt;</tt></li>
                    <li><a href="http://https://www.w3schools.com/html/default.asp">W3Schools HTML Tutorial</a></li>
                    <li><a href="http://https://www.w3schools.com/tags/default.asp">W3Schools HTML Reference</a>
                    </li>
                </ul>
            </div> `;
}

function visCss() {
    lukkAlle();

    document.getElementById("cssTekst").innerHTML = `

            <div class="innercard" id="innerText3">Vi bruker CSS til å
                <em>style</em><!--Er det en forskjell på bruk av "em" kontra "i"?--> et
                dokument,
                altså
                farger, fonter, utseende og lignende.
                <ul>
                    <li><tt>background-color</tt></li>
                    <li><code>color</code></li>
                    <li><tt>padding</tt></li>
                    <li><code>margin</code></li>
                    <li><tt>border</tt></li>
                    <li><code>text-align</code></li>
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

    document.getElementById("javaScriptTekst").innerHTML = `

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
    document.getElementById("kroppSynlig").innerHTML = `

            <div class="bodies" id="innerText5">

            <div class="bodyPart" id="hode">
                <button onclick="selectHead4()">
                ◀
                </button> 
                <img src="/img/head1.png" alt="hode">

                <button onclick="selectHead2()">
                ▶
                </button>

            </div>

            <div class="bodyPart" id="body">
                <button onclick="selectBody4()">
                ◀
                </button> 
                <img src="/img/body1.png" alt="kropp">

                <button onclick="selectBody2()">
                ▶
                </button>

            </div>

            <div class="bodyPart" id="legs">
                <button onclick="selectLegs4()">
                ◀
                </button> 
                <img src="/img/legs1.png" alt="føtter">

                <button onclick="selectLegs2()">
                ▶
                </button>
                
            </div>

            </div> `
}


/*Endre hoder*/
function selectHead1() {
    document.getElementById("hode").innerHTML = `

    <button onclick="selectHead4()">
        ◀
    </button>
    <img src="/img/head1.png">

    <button onclick="selectHead2()">
        ▶
    </button> `
}

function selectHead2() {
    document.getElementById("hode").innerHTML = `

    <button onclick="selectHead1()">
        ◀
    </button>
    <img src="/img/head2.png">

    <button onclick="selectHead3()">
        ▶
    </button> `
}

function selectHead3() {
    document.getElementById("hode").innerHTML = `

    <button onclick="selectHead2()">
        ◀
    </button>
    <img src="/img/head3.png">

    <button onclick="selectHead4()">
        ▶
    </button> `
}

function selectHead4() {
    document.getElementById("hode").innerHTML = `

    <button onclick="selectHead3()">
        ◀
    </button>
    <img src="/img/head4.png">

    <button onclick="selectHead1()">
        ▶
    </button> `
}


/*Endre kropper*/
function selectBody1() {
    document.getElementById("body").innerHTML = `

    <button onclick="selectBody4()">
        ◀
    </button>
    <img src="/img/body1.png">

    <button onclick="selectBody2()">
        ▶
    </button> `
}

function selectBody2() {
    document.getElementById("body").innerHTML = `

    <button onclick="selectBody1()">
        ◀
    </button>
    <img src="/img/body2.png">

    <button onclick="selectBody3()">
        ▶
    </button> `
}

function selectBody3() {
    document.getElementById("body").innerHTML = `

    <button onclick="selectBody2()">
        ◀
    </button>
    <img src="/img/body3.png">

    <button onclick="selectBody4()">
        ▶
    </button> `
}

function selectBody4() {
    document.getElementById("body").innerHTML = `

    <button onclick="selectBody3()">
        ◀
    </button>
    <img src="/img/body4.png">

    <button onclick="selectBody1()">
        ▶
    </button> `
}


/*Endre bein*/
function selectLegs1() {
    document.getElementById("legs").innerHTML = `

    <button onclick="selectLegs4()">
        ◀
    </button>
    <img src="/img/legs1.png">

    <button onclick="selectLegs2()">
        ▶
    </button> `
}

function selectLegs2() {
    document.getElementById("legs").innerHTML = `

    <button onclick="selectLegs1()">
        ◀
    </button>
    <img src="/img/legs2.png">

    <button onclick="selectLegs3()">
        ▶
    </button> `
}

function selectLegs3() {
    document.getElementById("legs").innerHTML = `

    <button onclick="selectLegs2()">
        ◀
    </button>
    <img src="/img/legs3.png">

    <button onclick="selectLegs4()">
        ▶
    </button> `
}

function selectLegs4() {
    document.getElementById("legs").innerHTML = `

    <button onclick="selectLegs3()">
        ◀
    </button>
    <img src="/img/legs4.png">

    <button onclick="selectLegs1()">
        ▶
    </button> `
}

