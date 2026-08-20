// =====================================================
// STUDENT HUB PORTAL - script.js
// DOM Manipulation + Event Handling + UI Interactivity
// =====================================================


// =====================================================
// 1. PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("StudentHub Portal JavaScript loaded successfully.");


    // =================================================
    // 2. COLLAPSIBLE FAQ
    // =================================================

    const faqQuestions =
        document.querySelectorAll(".faq-question");


    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            // Find the FAQ item that was clicked
            const faqItem =
                this.closest(".faq-item");


            // Close other FAQ items
            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    if (item !== faqItem) {

                        item.classList.remove("active");

                    }

                });


            // Open / close selected FAQ
            faqItem.classList.toggle("active");

        });

    });


    // =================================================
    // 3. QUICK ACCESS CARD EVENT
    // =================================================

    const quickCards =
        document.querySelectorAll(".quick-card");


    quickCards.forEach(function (card) {

        card.addEventListener("click", function () {

            console.log(
                "Quick Access clicked:",
                this.textContent.trim()
            );

        });

    });


    // =================================================
    // 4. STAT CARD HOVER EVENT
    // =================================================

    const statCards =
        document.querySelectorAll(".stat-card");


    statCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-5px)";

        });


        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });


    // =================================================
    // 5. NOTICE CLICK EVENT
    // =================================================

    const notices =
        document.querySelectorAll(".notice-item");


    notices.forEach(function (notice) {

        notice.addEventListener("click", function () {

            const title =
                this.querySelector("h3");


            if (title) {

                alert(
                    "Notice: " + title.textContent
                );

            }

        });

    });


    // =================================================
    // 6. ASSIGNMENT CLICK EVENT
    // =================================================

    const assignments =
        document.querySelectorAll(".assignment-item");


    assignments.forEach(function (assignment) {

        assignment.addEventListener("click", function () {

            const title =
                this.querySelector("h3");


            if (title) {

                alert(
                    "Assignment: " +
                    title.textContent
                );

            }

        });

    });


    // =================================================
    // 7. DYNAMIC COPYRIGHT YEAR
    // =================================================

    const copyright =
        document.querySelector(".copyright");


    if (copyright) {

        const currentYear =
            new Date().getFullYear();


        copyright.textContent =
            "© " +
            currentYear +
            " StudentHub Portal | All Rights Reserved.";

    }


    // =================================================
    // 8. ESCAPE KEY EVENT
    // =================================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeMenu();

        }

    });

});


// =====================================================
// 9. OPEN SIDEBAR
// =====================================================

function openMenu() {

    const sidebar =
        document.getElementById("sidebar");


    const overlay =
        document.getElementById("overlay");


    if (sidebar) {

        sidebar.classList.add("active");

    }


    if (overlay) {

        overlay.classList.add("active");

    }

}


// =====================================================
// 10. CLOSE SIDEBAR
// =====================================================

function closeMenu() {

    const sidebar =
        document.getElementById("sidebar");


    const overlay =
        document.getElementById("overlay");


    if (sidebar) {

        sidebar.classList.remove("active");

    }


    if (overlay) {

        overlay.classList.remove("active");

    }

}

// =====================================================
// NOTIFICATION BANNER
// =====================================================

function closeNotification() {

    const banner =
        document.getElementById("notificationBanner");


    if (banner) {

        banner.style.display = "none";

    }

}










// =====================================================
// CONTENT SLIDER
// =====================================================

let slideIndex = 0;


function showSlide(index) {

    const slides =
        document.querySelectorAll(".slide");


    const dots =
        document.querySelectorAll(".dot");


    if (slides.length === 0) {

        return;

    }


    if (index >= slides.length) {

        slideIndex = 0;

    }


    if (index < 0) {

        slideIndex =
            slides.length - 1;

    }


    slides.forEach(function(slide) {

        slide.classList.remove(
            "active-slide"
        );

    });


    dots.forEach(function(dot) {

        dot.classList.remove(
            "active-dot"
        );

    });


    slides[slideIndex]
        .classList.add("active-slide");


    if (dots[slideIndex]) {

        dots[slideIndex]
            .classList.add("active-dot");

    }

}


function changeSlide(direction) {

    slideIndex += direction;

    showSlide(slideIndex);

}


function currentSlide(index) {

    slideIndex = index;

    showSlide(slideIndex);

}


// Automatic slider

setInterval(function() {

    changeSlide(1);

}, 5000);



// =====================================================
// MODAL POPUP
// =====================================================

function openModal() {

    const modal =
        document.getElementById("studentModal");


    if (modal) {

        modal.classList.add("active");

    }

}


function closeModal() {

    const modal =
        document.getElementById("studentModal");


    if (modal) {

        modal.classList.remove("active");

    }

}



// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeMenu();

            closeModal();

        }

    }
);

const themeButton = document.getElementById("themeButton");

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Light Mode";
}

// Change theme
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙 Dark Mode";
    }

});