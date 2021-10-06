document.addEventListener("DOMContentLoaded", menuF, false);

function menuF() {
    let activeSlideIndex = 0;

    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    let body = document.querySelector("body");

    let arrow = document.querySelectorAll(".arrow");

    // isMobile.any()

    if (isMobile.any()) {
        body.classList.add("touch");
        let arrow = document.querySelectorAll("div.arrow>span");

        for (i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i].parentNode.previousElementSibling;
            let subMenu = arrow[i].parentNode.nextElementSibling;
            let thisArrow = arrow[i].parentNode;

            thisLink.classList.add("parent");
            arrow[i].parentNode.addEventListener("click", function() {
                subMenu.classList.toggle("open");
                thisArrow.classList.toggle("active");
            });
        }
    } else {
        body.classList.add("mouse");
    }

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