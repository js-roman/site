document.addEventListener("DOMContentLoaded", menuF, false);

function menuF() {
    let activeSlideIndex = 0;

    function sliderChoice(slide) {
        activeSlideIndex = slide;
    }

    const menu_switcher = document.querySelector("#menu_switcher");
    const menu = document.querySelector(".menu");
    const menuSecondLevel = document.querySelectorAll(".openable");

    menu_switcher.addEventListener("click", () => {
        console.log("клик");

        menu.classList.toggle("active");
        // menu_switcher.style.display = "none";
        menu_switcher.classList.toggle("active");
    });

    menuSecondLevel.forEach((each) => {
        each.addEventListener("click", (event) => {
            event.preventDefault();
            event.target.parentNode.classList.toggle("opened");
        });
    });
}