window.onload = function() {
    const turObjects = document.querySelectorAll(".object");
    // const item = document.querySelector(".item");
    const object1 = document.querySelector("#object1");
    const object2 = document.querySelector("#object2");
    const object3 = document.querySelector("#object3");
    const object4 = document.querySelector("#object4");
    let objID;
    const placeholders = document.querySelectorAll(".placeholder");

    for (let turObject of turObjects) {
        console.log(turObject);

        turObject.addEventListener("dragstart", dragstart);
        turObject.addEventListener("dragend", dragend);
    }
    // object1.addEventListener("dragstart", dragstart);
    // object1.addEventListener("dragend", dragend);
    // object2.addEventListener("dragstart", dragstart);
    // object2.addEventListener("dragend", dragend);

    for (placeholder of placeholders) {
        placeholder.addEventListener("dragover", dragover);
        placeholder.addEventListener("dragenter", dragenter);
        placeholder.addEventListener("dragleave", dragleave);
        placeholder.addEventListener("drop", dragdrop);
    }

    function dragstart(event) {
        event.target.classList.add("hold", "hanged");
        objID = event.target.id;
        console.log(objID);

        for (placeholder of placeholders) {
            placeholder.classList.add("available");
        }

        setTimeout(() => {
            event.target.classList.add("hide");
            event.target.classList.remove("hanged");
        }, 0);
    }

    function dragend(event) {
        event.target.classList.remove("hold");
        // event.target.className = "item";
    }

    function dragover(event) {
        event.preventDefault();
    }

    function dragenter(event) {
        if (!event.target.classList.contains("placeholder")) {
            return;
        }

        event.target.classList.add("hovered");
    }

    function dragleave(event) {
        event.target.classList.remove("hovered");
    }

    function dragdrop(event) {
        event.target.classList.remove("hovered");
        document.getElementById(objID).classList.remove("hide");

        console.log(event.target);
        event.target.append(document.getElementById(objID));
        document.getElementById(objID).classList.add("inserted");
        for (placeholder of placeholders) {
            placeholder.classList.remove("available");
        }
    }
};