window.onload = function() {
    const buttonDown = document.getElementById("butLeft");
    const buttonUp = document.getElementById("butRight");
    const slides = document.querySelector(".slides");
    const sidebar = document.querySelector(".sidebar");
    const slideCount = slides.querySelectorAll("div").length;
    const slideContainer = document.querySelector(".slideContainer");
    const height = slideContainer.clientHeight;

    let activeSlideIndex = 0;
    sidebar.style.top = `-${(slideCount - 1) * 600}px`;

    let strGET = window.location.search.replace("?", "");
    if (strGET != "") activeSlideIndex = strGET.split("=")[1];
    console.log(activeSlideIndex);
    slides.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

    buttonDown.addEventListener("click", () => {
        changeSlide("down");
    });
    buttonUp.addEventListener("click", () => {
        changeSlide("up");
    });

    function changeSlide(direction) {
        if (direction === "up") {
            activeSlideIndex++;
            if (activeSlideIndex >= slideCount) activeSlideIndex = 0;
        }
        if (direction === "down") {
            activeSlideIndex--;
            if (activeSlideIndex < 0) activeSlideIndex = slideCount - 1;
        }
        console.log(direction);
        slides.style.transform = `translateY(-${activeSlideIndex * height}px)`;
        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    }
};