window.onload = function() {
    const paintings = document.querySelectorAll(".painting");
    const frames = document.querySelectorAll(".frame");
    const fotoPlace = document.querySelector(".fotoPlace");

    for (painting of paintings) {
        painting.addEventListener("click", maximize);
    }

    function maximize(event) {
        console.log(event.target);
        event.target.classList.add("big_painting");
        event.target.parentNode.classList.add("big_frame");
        event.target.removeEventListener("click", maximize);
        event.target.addEventListener("click", wait);
        for (frame of frames) {
            frame.classList.add("hide");
        }
        console.log(event.target);
        event.target.parentNode.classList.remove("hide");
    }

    function wait(event) {
        // event.target.classList.remove("big_painting");
        event.target.removeEventListener("click", wait);
        event.target.addEventListener("click", maximize);
        setTimeout(() => {
            for (frame of frames) {
                frame.classList.remove("hide");
            }
        }, 500);
        event.target.classList.remove("big_painting");
        event.target.parentNode.classList.remove("big_frame");
    }
};