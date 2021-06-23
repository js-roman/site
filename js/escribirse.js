window.onload = function() {
        const turObjects = document.querySelectorAll(".object");
        const placeholders = document.querySelector(".placeholder");

        for (let turObject of turObjects) {
            turObject.addEventListener("dragstart", dragstart);
            turObject.addEventListener("dragend", dragend);
        }


        for (placeholder of placeholders) {
            placeholder.addEventListener("dragover", dragover);
            placeholder.addEventListener("dragenter", dragenter);
            placeholder.addEventListener("dragleave", dragleave);
            placeholder.addEventListener("drop", dragdrop);
        }

        function dragstart(event) {
            event.target.classList.add("hold", "hanged");
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
            event.target.className = "item";
        }

        function dragover(event) {
            event.preventDefault();
        }

        function dragenter(event) {
            event.target.classList.add("hovered");
        }

        function dragleave(event) {
            event.target.classList.remove("hovered");
        }

        function dragdrop(event) {
            event.target.classList.remove("hovered");
            event.target.append(item);
            for (placeholder of placeholders) {
                placeholder.classList.remove("available");
            }


        };