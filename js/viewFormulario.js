const DEL = 1000;
const elements = window.document.getElementsByClassName("validable");
const progressBars = window.document.getElementsByClassName("progressBar");
const progressBarWrappers =
    window.document.getElementsByClassName("progressBarWrapper");

// window.onload = function() {
//     for (const el of elements) {
//         el.addEventListener("input", validaForm, false);
//     }
// };

function go() {
    validaForm();
    // setTimeout(() => {
    //     alert("La transmición de datos al servidor esta fuera de este curso :(");
    // }, 4000);
}

// function restart() {
//     alert("сука падла блядь");
// }

function animate() {}

function validaForm() {
    let delay = 0;

    for (campo of elements) {
        element = "divVal" + campo.id.slice(3);
        window.document.getElementById(element).style.display = "none";
    }
    for (let i = 0; i < progressBars.length; i++) {
        let progressBar = progressBars[i];
        progressBar.style.display = "inline-block";
        progressBar.classList.add("width0");
        let campo = elements[i];
        delay = i * DEL;
        waitBar(delay, progressBar);
        waitRes(delay, progressBar, campo);
    }

    function waitBar(delay, progressBar) {
        for (element of progressBarWrappers) {
            element.style.overflow = "hidden";
        }

        setTimeout(() => {
            progressBar.classList.remove("width0");
            progressBar.classList.add("width25rem");
        }, delay);
    }

    function waitRes(delay, progressBar, campo) {
        setTimeout(() => {
            element = "divVal" + campo.id.slice(3);
            window.document
                .getElementById(element)
                .setAttribute("src", "img/" + regExpValidacion(campo) + ".png");
            window.document.getElementById(element).style.display = "inline";
            progressBar.style.display = "none";
            progressBar.classList.remove("width25rem");
            progressBar.parentNode.style.overflow = "visible";
        }, delay + DEL);
    }
}