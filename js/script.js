/* ======================================
   STALL Landing Page
====================================== */

// Mobile Menu
const mobileBtn = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

if (mobileBtn) {
    mobileBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

/* ======================================
   Scroll Navbar
====================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,8,8,.95)";
        header.style.padding = "15px 0";

    } else {

        header.style.background = "rgba(8,8,8,.65)";
        header.style.padding = "22px 0";

    }

});

/* ======================================
   Scroll To Top
====================================== */

const scrollBtn = document.createElement("button");

scrollBtn.id = "scrollTop";

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ======================================
   Smooth Anchor Scroll
====================================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ======================================
   Fade Animation
====================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

    ".category-card,.step,.business-card-large"

).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});

/* ======================================
   Category Hover Glow
====================================== */

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,.18),
        #181818 70%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#181818";

    });

});

/* ======================================
   Business Card Hover
====================================== */

document.querySelectorAll(".business-card-large").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

/* ======================================
   Search Button Demo
====================================== */

const searchBtn = document.querySelector(".search-box button");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        const input = document.querySelector(".search-input input");

        const value = input.value.trim();

        if (value === "") {

            alert("Please enter a business name.");

            return;

        }

        alert("Searching for: " + value);

    });

}

/* ======================================
   Counter Animation
====================================== */

const counters = document.querySelectorAll(".stats h2");

let counted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats || counted) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 60;

            const interval = setInterval(() => {

                count += speed;

                if (count >= target) {

                    counter.innerText = target + "+";

                    clearInterval(interval);

                } else {

                    counter.innerText = Math.floor(count) + "+";

                }

            }, 20);

        });

    }

});

/* ======================================
   Hero Floating Animation
====================================== */

const phone = document.querySelector(".phone");

if (phone) {

    let direction = 1;

    setInterval(() => {

        phone.style.transform =
            `translateY(${direction * 8}px)`;

        direction *= -1;

    }, 2500);

}

console.log("STALL Landing Page Loaded Successfully 🚀");
