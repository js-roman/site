let turObjects;
let turObjectContainer;
let cancelChoiceButtonl;
let destination;
let placeholders;

window.onload = function() {
    turObjects = document.querySelectorAll(".object");
    turObjectContainer = document.querySelector(".objects");
    cancelChoiceButton = document.querySelector(".helpChoice");
    destination = document.querySelector(".destination");
    placeholders = document.querySelectorAll(".placeholder");

    let objID;
    start();

    destination.addEventListener("dragover", dragover);
    destination.addEventListener("drop", dragdrop);
};

function restart() {
    turObjectContainer.style.display = "inherit";
    cancelChoiceButton.innerHTML = "Arrastre una  miniatura aqui";
    cancelChoiceButton.removeEventListener("click", restart);
    const item = document.querySelector(".inserted");
    if (item != null) {
        item.classList.remove("inserted");
        turObjectContainer.append(item);
    }

    destination.innerHTML = "I";
    const resImgs = document.querySelectorAll(".val");
    for (res of resImgs) {
        res.style.display = "none";
    }

    start();
}

function start() {
    for (let turObject of turObjects) {
        turObject.addEventListener("dragstart", dragstart);
        turObject.addEventListener("dragend", dragend);
    }
}

function finish() {
    for (let turObject of turObjects) {
        turObject.removeEventListener("dragstart", dragstart);
        turObject.removeEventListener("dragend", dragend);
    }
    document.querySelector(".objects").style.display = "none";

    cancelChoiceButton.innerHTML = "Click aqui para cancelar la votación";
    cancelChoiceButton.addEventListener("click", restart);
    destination.addEventListener("click", restart);
}

function dragstart(event) {
    event.target.classList.add("hold", "hanged");
    objID = event.target.id;

    destination.classList.add("available");
}

function dragend(event) {
    event.target.classList.remove("hold");
    destination.classList.remove("available");
}

function dragover(event) {
    event.preventDefault();
}

function dragdrop(event) {
    event.target.classList.remove("hovered");
    document.getElementById(objID).classList.remove("hide");

    event.target.append(document.getElementById(objID));
    document.getElementById(objID).classList.add("inserted");
    document.getElementById(objID).classList.remove("hold");
    for (placeholder of placeholders) {
        placeholder.classList.remove("available");
    }

    finish();
}