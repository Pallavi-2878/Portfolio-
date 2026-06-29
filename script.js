// =========================
// Portfolio JavaScript
// =========================

// Welcome Message
window.onload = function () {
    console.log("Welcome to Pallavi's Portfolio");
};

// =========================
// Active Navbar on Scroll
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

};

// =========================
// Smooth Button Animation
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseover", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseout", () => {

        button.style.transform = "scale(1)";

    });

});

// =========================
// Contact Form
// =========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank You! Your message has been received.");

        form.reset();

    });

}

// =========================
// Scroll to Top Button
// =========================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Style Button

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 18px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#a855f7";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

// Show Button

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

// Scroll Top

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =========================
// Console Message
// =========================

console.log("Portfolio Loaded Successfully");