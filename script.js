const navbar = document.getElementById("navbar");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.querySelectorAll(".nav-link");

const mobileLinks =
    document.querySelectorAll(".mobile-links a");


/* NAVBAR GLASS LA SCROLL */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* MOBILE MENU */

menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("open");
    mobileMenu.classList.toggle("open");

    document.body.style.overflow =
        mobileMenu.classList.contains("open")
            ? "hidden"
            : "";

});


/* ÎNCHIDERE MOBILE MENU */

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("open");
        mobileMenu.classList.remove("open");

        document.body.style.overflow = "";

    });

});


/* LINK ACTIV */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});