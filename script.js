document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       LIGHT MODE DEFAULT
    ========================= */

    const themeToggle = document.getElementById("themeToggle");

    // Website always opens in light mode
    document.body.classList.remove("dark");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            const icon = themeToggle.querySelector("i");

            if (document.body.classList.contains("dark")) {
                icon.className = "fa-solid fa-sun";
            } else {
                icon.className = "fa-solid fa-moon";
            }
        });
    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
            });
        });

    }


    /* =========================
       PHOTO MODAL
    ========================= */

    const profileBtn = document.getElementById("profileBtn");
    const profileViewBtn = document.getElementById("profileViewBtn");
    const photoModal = document.getElementById("photoModal");
    const photoClose = document.getElementById("photoClose");

    function openPhotoModal() {
        if (!photoModal) return;

        photoModal.classList.add("show");
        document.body.classList.add("modal-open");
    }

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
