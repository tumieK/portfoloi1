document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let current = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove("active");
            if (i === index) {
                page.classList.add("active");
            }
        });
    }

    nextBtn.addEventListener("click", () => {
        if (current < pages.length - 1) {
            current++;
            showPage(current);
        }
    });

    prevBtn.addEventListener("click", () => {
        if (current > 0) {
            current--;
            showPage(current);
        }
    });
    showPage(current);
});
