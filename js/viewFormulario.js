const DEL = 1000;
let elements = window.document.getElementsByClassName("validable");
let progressBars = window.document.getElementsByClassName("progressBar");

// window.onload = function() {
//     for (const el of elements) {
//         el.addEventListener("input", validaForm, false);
//     }
// };

function go() {
    validaForm();
    setTimeout(() => {
        alert("La transmición de datos al servidor esta fuera de este curso :(");
    }, 4000);
}

function animate() {}

function validaForm() {
    console.log("111");

    let delay = 0;

    for (campo of elements) {
        element = "divVal" + campo.id.slice(3);
        window.document.getElementById(element).style.display = "none";
    }
    for (let i = 0; i < progressBars.length; i++) {
        let progressBar = progressBars[i];
        progressBar.style.display = "inline-block";
        progressBar.style.width = "0%";
        let campo = elements[i];
        delay = i * DEL;
        waitBar(delay, progressBar);
        waitRes(delay, progressBar, campo);
    }

    function waitBar(delay, progressBar) {
        setTimeout(() => {
            progressBar.style.width = "25rem";
        }, delay);
    }

    function waitRes(delay, progressBar, campo) {
        setTimeout(() => {
            element = "divVal" + campo.id.slice(3);
            window.document
                .getElementById(element)
                .setAttribute("src", "/img/" + regExpValidacion(campo) + ".png");
            window.document.getElementById(element).style.display = "inline";
            progressBar.style.display = "none";
        }, delay + DEL);
    }
}