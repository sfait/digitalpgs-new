function changeTitle() {
    const message = "Wróć na Digital PGS";
    let original;

    window.addEventListener("focus", function() {
        if (original) {
            document.title = original;
        }
    })

    window.addEventListener("blur", function() {
        const title = document.title;
        if (title != message) {
            original = title;
        }
        document.title = message;
    })
}

function showHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');

    const handleClick = () => {
        hamburger.classList.toggle('hamburger-active');
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger-active'));
        nav.classList.toggle('navigation-active');
    }

    hamburger.addEventListener("click", handleClick);
}

function useScrollReveal() {
    const slideLeft = {
        distance: "150%",
        origin: "left",
        delay: "250",
        opacity: null
    };

    const slideRight = {
        distance: "150%",
        origin: "right",
        delay: "250",
        opacity: null
    };

    ScrollReveal().reveal(".main-header, .navigation, .hero-wrapper", { delay: 250 });
    ScrollReveal().reveal(".about-us, .contact", slideLeft);
    ScrollReveal().reveal(".team", slideRight);
    ScrollReveal().reveal(".footer-wrapper", { delay: 400 });
}

function showAnimations() {
    const mobile = window.matchMedia("screen and (min-width: 1000px)");

    if (mobile.matches) {
        useScrollReveal();
    }

    mobile.addListener( function(mobile) {
        if (mobile.matches) {
            useScrollReveal();
        }
    });
};


const init = () => {
    changeTitle();
    showHamburgerMenu();
    showAnimations();
}

document.addEventListener("DOMContentLoaded", init);
