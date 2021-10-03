document.addEventListener("DOMContentLoaded", fotos, false);

function fotos() {
    const paintings = document.querySelectorAll(".painting");
    const frames = document.querySelectorAll(".frame");
    const fotoPlace = document.querySelector(".fotoPlace");
    const mainContainer = document.querySelector(".mainContainer");
    const content = document.querySelector(".content");

    for (painting of paintings) {
        painting.addEventListener("click", openImg);
    }

    function openImg(event) {
        // alert(event.target.src);
        window.open(event.target.src, "_blank");
        window.focus();
    }

    function maximize(event) {
        console.log(event.target.tagName + " " + event.target.parentNode.classList);
        event.target.classList.add("big_painting");
        event.target.parentNode.classList.add("big_frame");
        event.target.removeEventListener("click", maximize);
        event.target.addEventListener("click", wait);
        for (frame of frames) {
            frame.classList.add("hide");
        }
        // console.log(event.target);
        event.target.parentNode.classList.remove("hide");
        fotoPlace.style.height = "776px";
        fotoPlace.style.width =
            Math.max(1000, document.documentElement.clientWidth) + "px";
        mainContainer.style.width =
            Math.max(1000, document.documentElement.clientWidth) + "px";
        content.style.width =
            Math.max(1000, document.documentElement.clientWidth) + "px";

        event.target.scrollIntoView(top);
    }

    function wait(event) {
        // event.target.classList.remove("big_painting");

        event.target.removeEventListener("click", wait);
        event.target.addEventListener("click", maximize);
        setTimeout(() => {
            for (frame of frames) {
                frame.classList.remove("hide");
            }
        }, 0);
        event.target.classList.remove("big_painting");
        event.target.parentNode.classList.remove("big_frame");
        fotoPlace.style.height = null;
        fotoPlace.style.width = null;
        mainContainer.style.width = null;
        content.style.width = null;
    }
}