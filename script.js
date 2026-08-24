document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================
       THEME TOGGLE
    ========================= */

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const icon = themeToggle.querySelector("i");

            if (icon) {

                if (document.body.classList.contains("dark-mode")) {
                    icon.className = "fa-solid fa-sun";
                } else {
                    icon.className = "fa-solid fa-moon";
                }

            }

        });

    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");

        });

    }


    /* =========================
       SMOOTH SCROLL
    ========================= */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Update URL without causing a page reload
                history.replaceState(null, null, targetId);

            }


            // Close mobile menu after clicking
            if (navMenu && menuToggle) {

                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");

            }

        });

    });


    /* =========================
       NAVIGATION ACTIVE LINK
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =========================
       SCROLL PROGRESS BAR
    ========================= */

    const progressBar = document.querySelector(".scroll-progress");

    function updateScrollProgress() {

        if (!progressBar) return;

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        let progress = 0;

        if (documentHeight > 0) {
            progress = (scrollTop / documentHeight) * 100;
        }

        progressBar.style.width = progress + "%";

    }

    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }


    /* =========================
       PHOTO MODAL
    ========================= */

    const photoModal = document.getElementById("photoModal");
    const profileBtn = document.getElementById("profileBtn");
    const profileViewBtn = document.getElementById("profileViewBtn");
    const photoClose = document.getElementById("photoClose");

    function openPhotoModal() {

        if (!photoModal) return;

        photoModal.classList.add("active");
        document.body.style.overflow = "hidden";

    }


    function closePhotoModal() {

        if (!photoModal) return;

        photoModal.classList.remove("active");
        document.body.style.overflow = "";

    }


    if (profileBtn) {

        profileBtn.addEventListener("click", openPhotoModal);

    }


    if (profileViewBtn) {

        profileViewBtn.addEventListener("click", openPhotoModal);

    }


    if (photoClose) {

        photoClose.addEventListener("click", closePhotoModal);

    }


    /* =========================
       RESUME MODAL
    ========================= */

    const resumeBtn = document.getElementById("resumeBtn");
    const resumeModal = document.getElementById("resumeModal");
    const resumeClose = document.getElementById("resumeClose");

    function openResumeModal() {

        if (!resumeModal) return;

        resumeModal.classList.add("active");
        document.body.style.overflow = "hidden";

    }


    function closeResumeModal() {

        if (!resumeModal) return;

        resumeModal.classList.remove("active");
        document.body.style.overflow = "";

    }


    if (resumeBtn) {

        resumeBtn.addEventListener("click", openResumeModal);

    }


    if (resumeClose) {

        resumeClose.addEventListener("click", closeResumeModal);

    }


    /* =========================
       MODAL BACKDROP CLICK
    ========================= */

    const modalBackdrops = document.querySelectorAll(".modal-backdrop");

    modalBackdrops.forEach(function (backdrop) {

        backdrop.addEventListener("click", function () {

            if (photoModal) {
                photoModal.classList.remove("active");
            }

            if (resumeModal) {
                resumeModal.classList.remove("active");
            }

            document.body.style.overflow = "";

        });

    });


    /* =========================
       ESC KEY CLOSE MODALS
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (photoModal) {
                photoModal.classList.remove("active");
            }

            if (resumeModal) {
                resumeModal.classList.remove("active");
            }

            document.body.style.overflow = "";

        }

    });


    /* =========================
       IMAGE ERROR HANDLING
    ========================= */

    const profileImage = document.querySelector(".profile-image");

    if (profileImage) {

        profileImage.addEventListener("error", function () {

            console.log("Profile image could not be loaded: profile.jpg");

        });

    }

});
    function closePhotoModal() {
        if (!photoModal) return;

        photoModal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }

    if (profileBtn) {
        profileBtn.addEventListener("click", openPhotoModal);
    }

    if (profileViewBtn) {
        profileViewBtn.addEventListener("click", openPhotoModal);
    }

    if (photoClose) {
        photoClose.addEventListener("click", closePhotoModal);
    }

    if (photoModal) {
        const photoBackdrop = photoModal.querySelector(".modal-backdrop");

        if (photoBackdrop) {
            photoBackdrop.addEventListener("click", closePhotoModal);
        }
    }


    /* =========================
       RESUME MODAL
    ========================= */

    const resumeBtn = document.getElementById("resumeBtn");
    const resumeModal = document.getElementById("resumeModal");
    const resumeClose = document.getElementById("resumeClose");

    function openResumeModal() {
        if (!resumeModal) return;

        resumeModal.classList.add("show");
        document.body.classList.add("modal-open");
    }

    function closeResumeModal() {
        if (!resumeModal) return;

        resumeModal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }

    if (resumeBtn) {
        resumeBtn.addEventListener("click", openResumeModal);
    }

    if (resumeClose) {
        resumeClose.addEventListener("click", closeResumeModal);
    }

    if (resumeModal) {
        const resumeBackdrop = resumeModal.querySelector(".modal-backdrop");

        if (resumeBackdrop) {
            resumeBackdrop.addEventListener("click", closeResumeModal);
        }
    }


    /* =========================
       ESCAPE KEY CLOSE MODALS
    ========================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closePhotoModal();
            closeResumeModal();
        }

    });


    /* =========================
       SCROLL PROGRESS BAR
    ========================= */

    const scrollProgress = document.querySelector(".scroll-progress");

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (scrollHeight > 0) {
            const progress = (scrollTop / scrollHeight) * 100;

            scrollProgress.style.width = progress + "%";
        }
    }

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();


    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            const linkTarget = link.getAttribute("href");

            if (linkTarget === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();


    /* =========================
       FOOTER YEAR
    ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});            document.documentElement.scrollTop ||
            document.body.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (scrollHeight > 0) {
            progress.style.width =
                (scrollTop / scrollHeight) * 100 + "%";
        }
    }

    window.addEventListener("scroll", updateProgress);
    updateProgress();


    /* =========================
       REVEAL ANIMATION
    ========================= */

    const reveals = document.querySelectorAll(".reveal");

    function revealNow() {
        reveals.forEach(function (element) {
            const position =
                element.getBoundingClientRect().top;

            const screenHeight = window.innerHeight;

            if (position < screenHeight - 80) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealNow);
    window.addEventListener("resize", revealNow);

    revealNow();

});
