document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       LIGHT THEME DEFAULT
    ========================= */

    const toggle = document.getElementById("themeToggle");

    // Always start with light mode
    document.body.classList.remove("dark");

    if (toggle) {
        toggle.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }


    /* =========================
       PHOTO POPUP
    ========================= */

    const profileBtn = document.getElementById("profileBtn");
    const photoModal = document.getElementById("photoModal");

    if (profileBtn && photoModal) {
        profileBtn.addEventListener("click", function () {
            photoModal.classList.add("show");
        });

        photoModal.addEventListener("click", function () {
            photoModal.classList.remove("show");
        });
    }


    /* =========================
       RESUME POPUP
    ========================= */

    const resumeBtn = document.getElementById("resumeBtn");
    const resumeModal = document.getElementById("resumeModal");

    if (resumeBtn && resumeModal) {
        resumeBtn.addEventListener("click", function () {
            resumeModal.classList.add("show");
        });

        resumeModal.addEventListener("click", function () {
            resumeModal.classList.remove("show");
        });
    }


    /* =========================
       SCROLL PROGRESS BAR
    ========================= */

    const progress = document.querySelector(".progress");

    function updateProgress() {
        if (!progress) return;

        const scrollTop =
            document.documentElement.scrollTop ||
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
