document.addEventListener("DOMContentLoaded", votation, false);
let turObjects;
let turObjectContainer;
let cancelChoiceButton;
let destination;
let placeholders;
let clearAll;
votation();

function votation() {
    turObjects = document.querySelectorAll(".object");
    turObjectContainer = document.querySelector(".objects");
    cancelChoiceButton = document.querySelector(".helpChoiceMouse");
    destination = document.querySelector(".destination");
    placeholders = document.querySelectorAll(".placeholder");

    let objID;
    start();

    destination.addEventListener("dragover", dragover);
    destination.addEventListener("drop", dragdrop);

    clearAll = function restart() {
        cancelChoiceButton.innerHTML = "Arrastre una  miniatura aqui";
        cancelChoiceButton.removeEventListener("click", clearAll);
        const item = document.querySelector(".inserted");
        if (item != null) {
            item.classList.remove("inserted");
            turObjectContainer.append(item);
        }

        showSidebar();

        destination.innerHTML = "I";
        const resImgs = document.querySelectorAll(".val");
        for (res of resImgs) {
            res.removeAttribute("src");
        }

        start();
    };

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
        hideSidebar();
        cancelChoiceButton.innerHTML = "Click aqui para cancelar la votación";
        cancelChoiceButton.addEventListener("click", clearAll);
        destination.addEventListener("click", clearAll);
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

    function hideSidebar() {
        document.querySelector(".objects h3").style.display = "none";
        document.querySelector(".objects").style.width = "0";
        document.querySelector(".objects").style.padding = "0";
        setTimeout(() => {
            document.querySelector(".objects").style.display = "none";
            document.querySelector("form").style.borderRadius = "10px";
        }, 1000);
    }

    function showSidebar() {
        turObjectContainer.style.display = "inherit";
        document.querySelector(".objects h3").style.display = "inherit";
        document.querySelector(".objects").style.width = "10rem";
        document.querySelector(".objects").style.padding = "5px";
        document.querySelector("form").style.borderRadius = "10px 0 0 10px";
    }
}