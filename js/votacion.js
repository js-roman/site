document.addEventListener("DOMContentLoaded", votation, false);

function votation() {
    const turObjects = document.querySelectorAll(".object");
    const turObjectContainer = document.querySelector(".objects");
    const cancelChoiceButton = document.querySelector(".helpChoiceMouse");
    const destination = document.querySelector(".destination");
    const placeholders = document.querySelectorAll(".placeholder");
    const body = document.querySelector("body");
    let objID;
    start();

    destination.addEventListener("dragover", dragover);
    destination.addEventListener("drop", dragdrop);
    document.querySelector("#reset").addEventListener("click", restart);

    function restart() {
        if (body.classList.contains("mouse")) {
            cancelChoiceButton.innerHTML = "Arrastre una  miniatura aqui";

            let item = document.querySelector(".inserted");
            console.log(item);
            if (item != null) {
                item.parentNode.removeChild(item);

                // item.classList.remove("inserted");
                // turObjectContainer.append(item);
            }
            destination.innerHTML = "<span>I</span>";
            showSidebar();
        } else {
            document.querySelector("#choice").selectedIndex = 0;
        }

        cancelChoiceButton.removeEventListener("click", restart);

        const resImgs = document.querySelectorAll(".val");
        for (res of resImgs) {
            res.removeAttribute("src");
            res.style.display = "none";
        }

        document.querySelector("#txtName").value = "";
        document.querySelector("#txtEmail").value = "";
        document.querySelector("#txtPhone").value = "";

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
        hideSidebar();
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

        item = document.getElementById(objID);
        itemDup = item.cloneNode(true);
        console.log(item);

        event.target.append(itemDup);
        itemDup.classList.add("inserted");
        itemDup.classList.remove("hold");
        item.classList.remove("hold");
        for (placeholder of placeholders) {
            placeholder.classList.remove("available");
        }

        finish();
    }

    function hideSidebar() {
        document.querySelector(".objects").style.width = "0";
        document.querySelector(".objects").style.padding = "0";
        // document.querySelector(".objects h3").style.visibility = "hidden";
        document.querySelector(".objects h3").style.width = "0";
        setTimeout(() => {
            document.querySelector(".objects").style.display = "none";
            document.querySelector("form").style.borderRadius = "10px";
        }, 1000);
    }

    function showSidebar() {
        turObjectContainer.style.display = "inherit";
        // document.querySelector(".objects h3").style.visibility = "visible";
        document.querySelector(".objects h3").style.width = "150px";
        document.querySelector(".objects").style.width = "250px";
        document.querySelector(".objects").style.padding = "5px";
        document.querySelector("form").style.borderRadius = "10px 0 0 10px";
    }
}