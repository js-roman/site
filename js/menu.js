let activeSlideIndex = 0;

function sliderChoice(slide) {
    activeSlideIndex = slide;
}

window.onload = function() {
    const menu_switcher = document.querySelector("#menu_switcher");
    const menu = document.querySelector(".menu");

    menu_switcher.addEventListener("click", () => {
        menu.classList.toggle("active");
        // menu_switcher.style.display = "none";
        menu_switcher.classList.toggle("active");
    });
};