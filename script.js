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
            if (faqItem) {
                faqItem.classList.toggle("active");
            }

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

            this.style.transform =
                "translateY(-5px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform =
                "translateY(0)";

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
                    "Notice: " +
                    title.textContent
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
    // 8. THEME BUTTON
    // =================================================

    const themeButton =
        document.getElementById("themeButton");

    // Check saved theme
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        if (themeButton) {
            themeButton.textContent =
                "☀️ Light Mode";
        }

    }


    // Change theme
    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (
                document.body.classList.contains("dark-mode")
            ) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

                themeButton.textContent =
                    "☀️ Light Mode";

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                themeButton.textContent =
                    "🌙 Dark Mode";

            }

        });

    }


    // =================================================
    // 9. ESCAPE KEY
    // =================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMenu();
                closeModal();

            }

        }
    );


    // =================================================
    // 10. REGISTRATION FORM
    // =================================================

    const registrationForm =
        document.getElementById("registrationForm");


    if (registrationForm) {

        registrationForm.addEventListener(
            "submit",
            function (event) {

                // Stop form from submitting
                event.preventDefault();


                // ==========================================
                // GET FORM VALUES
                // ==========================================

                const firstName =
                    document
                        .getElementById("firstName")
                        .value
                        .trim();

                const lastName =
                    document
                        .getElementById("lastName")
                        .value
                        .trim();

                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();

                const username =
                    document
                        .getElementById("username")
                        .value
                        .trim();

                const studentId =
                    document
                        .getElementById("studentId")
                        .value
                        .trim();

                const password =
                    document
                        .getElementById("password")
                        .value;

                const confirmPassword =
                    document
                        .getElementById("confirmPassword")
                        .value;

                const role =
                    document
                        .getElementById("role")
                        .value;

                const mobile =
                    document
                        .getElementById("mobile")
                        .value
                        .trim();

                const course =
                    document
                        .getElementById("course")
                        .value;

                const year =
                    document
                        .getElementById("year")
                        .value;

                const gender =
                    document.querySelector(
                        'input[name="gender"]:checked'
                    );

                const terms =
                    document
                        .getElementById("terms")
                        .checked;


                // ==========================================
                // ERROR ELEMENTS
                // ==========================================

                const firstNameError =
                    document.getElementById(
                        "firstNameError"
                    );

                const lastNameError =
                    document.getElementById(
                        "lastNameError"
                    );

                const emailError =
                    document.getElementById(
                        "emailError"
                    );

                const usernameError =
                    document.getElementById(
                        "usernameError"
                    );

                const studentIdError =
                    document.getElementById(
                        "studentIdError"
                    );

                const passwordError =
                    document.getElementById(
                        "passwordError"
                    );

                const confirmPasswordError =
                    document.getElementById(
                        "confirmPasswordError"
                    );

                const roleError =
                    document.getElementById(
                        "roleError"
                    );

                const mobileError =
                    document.getElementById(
                        "mobileError"
                    );

                const courseError =
                    document.getElementById(
                        "courseError"
                    );

                const yearError =
                    document.getElementById(
                        "yearError"
                    );

                const genderError =
                    document.getElementById(
                        "genderError"
                    );

                const termsError =
                    document.getElementById(
                        "termsError"
                    );

                const successMessage =
                    document.getElementById(
                        "successMessage"
                    );


                // ==========================================
                // CLEAR PREVIOUS ERRORS
                // ==========================================

                if (firstNameError)
                    firstNameError.textContent = "";

                if (lastNameError)
                    lastNameError.textContent = "";

                if (emailError)
                    emailError.textContent = "";

                if (usernameError)
                    usernameError.textContent = "";

                if (studentIdError)
                    studentIdError.textContent = "";

                if (passwordError)
                    passwordError.textContent = "";

                if (confirmPasswordError)
                    confirmPasswordError.textContent = "";

                if (roleError)
                    roleError.textContent = "";

                if (mobileError)
                    mobileError.textContent = "";

                if (courseError)
                    courseError.textContent = "";

                if (yearError)
                    yearError.textContent = "";

                if (genderError)
                    genderError.textContent = "";

                if (termsError)
                    termsError.textContent = "";

                if (successMessage)
                    successMessage.textContent = "";


                let isValid = true;


                // ==========================================
                // REGULAR EXPRESSIONS
                // ==========================================

                const namePattern =
                    /^[A-Za-z ]+$/;

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                const usernamePattern =
                    /^[A-Za-z0-9_]+$/;

                const mobilePattern =
                    /^[6-9][0-9]{9}$/;

                const passwordPattern =
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


                // ==========================================
                // FIRST NAME VALIDATION
                // ==========================================

                if (firstName === "") {

                    if (firstNameError) {

                        firstNameError.textContent =
                            "Please enter your first name.";

                    }

                    isValid = false;

                }
                else if (firstName.length < 2) {

                    if (firstNameError) {

                        firstNameError.textContent =
                            "First name must contain at least 2 characters.";

                    }

                    isValid = false;

                }
                else if (!namePattern.test(firstName)) {

                    if (firstNameError) {

                        firstNameError.textContent =
                            "First name can contain only letters.";

                    }

                    isValid = false;

                }


                // ==========================================
                // LAST NAME VALIDATION
                // ==========================================

                if (lastName === "") {

                    if (lastNameError) {

                        lastNameError.textContent =
                            "Please enter your last name.";

                    }

                    isValid = false;

                }
                else if (lastName.length < 2) {

                    if (lastNameError) {

                        lastNameError.textContent =
                            "Last name must contain at least 2 characters.";

                    }

                    isValid = false;

                }
                else if (!namePattern.test(lastName)) {

                    if (lastNameError) {

                        lastNameError.textContent =
                            "Last name can contain only letters.";

                    }

                    isValid = false;

                }


                // ==========================================
                // EMAIL VALIDATION
                // ==========================================

                if (email === "") {

                    if (emailError) {

                        emailError.textContent =
                            "Please enter your email address.";

                    }

                    isValid = false;

                }
                else if (!emailPattern.test(email)) {

                    if (emailError) {

                        emailError.textContent =
                            "Please enter a valid email address.";

                    }

                    isValid = false;

                }


                // ==========================================
                // MOBILE VALIDATION
                // ==========================================

                if (mobile === "") {

                    if (mobileError) {

                        mobileError.textContent =
                            "Please enter your mobile number.";

                    }

                    isValid = false;

                }
                else if (!mobilePattern.test(mobile)) {

                    if (mobileError) {

                        mobileError.textContent =
                            "Please enter a valid 10-digit mobile number.";

                    }

                    isValid = false;

                }


                // ==========================================
                // COURSE VALIDATION
                // ==========================================

                if (course === "") {

                    if (courseError) {

                        courseError.textContent =
                            "Please select your course.";

                    }

                    isValid = false;

                }


                // ==========================================
                // YEAR VALIDATION
                // ==========================================

                if (year === "") {

                    if (yearError) {

                        yearError.textContent =
                            "Please select your year.";

                    }

                    isValid = false;

                }


                // ==========================================
                // GENDER VALIDATION
                // ==========================================

                if (!gender) {

                    if (genderError) {

                        genderError.textContent =
                            "Please select your gender.";

                    }

                    isValid = false;

                }


                // ==========================================
                // TERMS VALIDATION
                // ==========================================

                if (!terms) {

                    if (termsError) {

                        termsError.textContent =
                            "Please accept the Terms and Conditions.";

                    }

                    isValid = false;

                }


                // ==========================================
                // USERNAME VALIDATION
                // ==========================================

                if (username === "") {

                    if (usernameError) {

                        usernameError.textContent =
                            "Please create a username.";

                    }

                    isValid = false;

                }
                else if (username.length < 4) {

                    if (usernameError) {

                        usernameError.textContent =
                            "Username must contain at least 4 characters.";

                    }

                    isValid = false;

                }
                else if (!usernamePattern.test(username)) {

                    if (usernameError) {

                        usernameError.textContent =
                            "Username can contain letters, numbers and underscore only.";

                    }

                    isValid = false;

                }


                // ==========================================
                // STUDENT ID VALIDATION
                // ==========================================

                if (studentId === "") {

                    if (studentIdError) {

                        studentIdError.textContent =
                            "Please enter your Student ID.";

                    }

                    isValid = false;

                }
                else if (studentId.length < 3) {

                    if (studentIdError) {

                        studentIdError.textContent =
                            "Student ID must contain at least 3 characters.";

                    }

                    isValid = false;

                }


                // ==========================================
                // PASSWORD VALIDATION
                // ==========================================

                if (password === "") {

                    if (passwordError) {

                        passwordError.textContent =
                            "Please enter your password.";

                    }

                    isValid = false;

                }
                else if (!passwordPattern.test(password)) {

                    if (passwordError) {

                        passwordError.textContent =
                            "Password must be at least 6 characters and contain letters and numbers.";

                    }

                    isValid = false;

                }


                // ==========================================
                // CONFIRM PASSWORD
                // ==========================================

                if (confirmPassword === "") {

                    if (confirmPasswordError) {

                        confirmPasswordError.textContent =
                            "Please confirm your password.";

                    }

                    isValid = false;

                }
                else if (password !== confirmPassword) {

                    if (confirmPasswordError) {

                        confirmPasswordError.textContent =
                            "Passwords do not match.";

                    }

                    isValid = false;

                }


                // ==========================================
                // ROLE VALIDATION
                // ==========================================

                if (role === "") {

                    if (roleError) {

                        roleError.textContent =
                            "Please select your role.";

                    }

                    isValid = false;

                }


                // ==========================================
                // FINAL RESULT
                // ==========================================

                if (isValid) {

                    if (successMessage) {

                        successMessage.textContent =
                            "✓ Registration successful!";

                        successMessage.style.color =
                            "green";

                    }

                    // Redirect after 1 second
                    setTimeout(function () {

                        window.location.href =
                            "home.html";

                    }, 1000);

                }

            }
        );


        // ==========================================
        // CLEAR ERROR WHEN USER TYPES
        // ==========================================

        const fields = [

            "firstName",
            "lastName",
            "email",
            "username",
            "studentId",
            "password",
            "confirmPassword",
            "mobile"

        ];


        fields.forEach(function (fieldId) {

            const field =
                document.getElementById(fieldId);

            if (field) {

                field.addEventListener(
                    "input",
                    function () {

                        const errorElement =
                            document.getElementById(
                                fieldId + "Error"
                            );

                        if (errorElement) {

                            errorElement.textContent =
                                "";

                        }

                    }
                );

            }

        });

    }

});


// =====================================================
// 11. OPEN SIDEBAR
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
// 12. CLOSE SIDEBAR
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
// 13. NOTIFICATION BANNER
// =====================================================

function closeNotification() {

    const banner =
        document.getElementById(
            "notificationBanner"
        );

    if (banner) {

        banner.style.display = "none";

    }

}


// =====================================================
// 14. CONTENT SLIDER
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


    slides.forEach(function (slide) {

        slide.classList.remove(
            "active-slide"
        );

    });


    dots.forEach(function (dot) {

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
setInterval(function () {

    changeSlide(1);

}, 5000);


// =====================================================
// 15. MODAL POPUP
// =====================================================

function openModal() {

    const modal =
        document.getElementById(
            "studentModal"
        );

    if (modal) {

        modal.classList.add("active");

    }

}


function closeModal() {

    const modal =
        document.getElementById(
            "studentModal"
        );

    if (modal) {

        modal.classList.remove("active");

    }

}